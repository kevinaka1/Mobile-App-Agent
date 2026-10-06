import type { HistoryEntry, MarketSnapshot, MarketUser } from '@/types/market';

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: 'no-store' });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || 'The API request failed.');
  return body as T;
}

export const marketApi = {
  async listUsers(): Promise<MarketUser[]> {
    return (await request<{ users: MarketUser[] }>('/api/users')).users;
  },
  async listHistory(userId: string): Promise<HistoryEntry[]> {
    const query = new URLSearchParams({ userId });
    return (await request<{ history: HistoryEntry[] }>(`/api/history?${query}`)).history;
  },
  async getSnapshot(analysisId: string): Promise<MarketSnapshot | null> {
    const query = new URLSearchParams({ analysisId });
    return (await request<{ snapshot: MarketSnapshot }>(`/api/snapshot?${query}`)).snapshot;
  }
};
