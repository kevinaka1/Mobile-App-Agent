function requireUuidByMockId(mockIdMap, mockId, fieldName) {
  const uuid = mockIdMap.get(mockId);
  if (!uuid) {
    throw new Error(`No database UUID found for ${fieldName}=${mockId}. Seed its parent entity first.`);
  }
  return uuid;
}

async function upsertAndReturnIds(supabase, tableName, rows) {
  if (!rows.length) return new Map();

  const mockIds = rows.map(row => row.mock_id);
  const { data: existingRows, error: lookupError } = await supabase
    .from(tableName)
    .select('id,mock_id')
    .in('mock_id', mockIds);

  if (lookupError) throw new Error(`Failed to look up ${tableName} mock IDs: ${lookupError.message}`);

  const idByMockId = new Map();
  for (const row of existingRows) {
    if (idByMockId.has(row.mock_id)) {
      throw new Error(`Found duplicate mock_id=${row.mock_id} in ${tableName}. Remove the duplicate before seeding.`);
    }
    idByMockId.set(row.mock_id, row.id);
  }

  const newRows = [];
  for (const row of rows) {
    const existingId = idByMockId.get(row.mock_id);
    if (!existingId) {
      newRows.push(row);
      continue;
    }

    const { data, error } = await supabase
      .from(tableName)
      .update(row)
      .eq('id', existingId)
      .select('id,mock_id')
      .single();
    if (error) throw new Error(`Failed to update ${tableName} mock_id=${row.mock_id}: ${error.message}`);
    idByMockId.set(data.mock_id, data.id);
  }

  if (newRows.length) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(newRows)
      .select('id,mock_id');

    if (error) throw new Error(`Failed to insert ${tableName}: ${error.message}`);
    for (const row of data) idByMockId.set(row.mock_id, row.id);
  }

  if (idByMockId.size < rows.length) {
    throw new Error(`Expected ${rows.length} ${tableName} rows, resolved ${idByMockId.size}.`);
  }
  return new Map(rows.map(row => [row.mock_id, idByMockId.get(row.mock_id)]));
}

module.exports = { requireUuidByMockId, upsertAndReturnIds };
