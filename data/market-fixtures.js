// Demo database seed. All user and app-store details are illustrative.
window.MarketFixtures = {
  "users": [
    {
      "id": "usr_alex_morgan",
      "name": "Alex Morgan",
      "email": "alex@example.test",
      "initials": "AM"
    },
    {
      "id": "usr_maya_chen",
      "name": "Maya Chen",
      "email": "maya@example.test",
      "initials": "MC"
    },
    {
      "id": "usr_jordan_rivera",
      "name": "Jordan Rivera",
      "email": "jordan@example.test",
      "initials": "JR"
    }
  ],
  "ideas": [
    {
      "id": "idea_alex_meal",
      "userId": "usr_alex_morgan",
      "name": "Fridge-first meal planner",
      "description": "An app that helps people plan meals around what is already in their fridge, with recipes that adapt to dietary needs.",
      "createdAt": "2026-09-28T16:40:00.000Z"
    },
    {
      "id": "idea_alex_fitness",
      "userId": "usr_alex_morgan",
      "name": "Flexible home workouts",
      "description": "A fitness app that builds short home workouts around the time and energy I have each day.",
      "createdAt": "2026-09-25T18:15:00.000Z"
    },
    {
      "id": "idea_maya_budget",
      "userId": "usr_maya_chen",
      "name": "Shared household budget",
      "description": "A simple budgeting app that helps couples split shared bills, track subscriptions, and save for a goal together.",
      "createdAt": "2026-09-27T19:20:00.000Z"
    },
    {
      "id": "idea_jordan_general",
      "userId": "usr_jordan_rivera",
      "name": "Daily routine coach",
      "description": "An app that helps me build a calmer daily routine with gentle reminders and progress tracking.",
      "createdAt": "2026-09-26T15:05:00.000Z"
    }
  ],
  "analyses": [
    {
      "id": "analysis_alex_meal",
      "ideaId": "idea_alex_meal",
      "status": "completed",
      "similarAppCount": 10,
      "reviewsScannedCount": 8400,
      "sentimentGroupCount": 3,
      "topGap": "Personalized meal planning",
      "source": "mock",
      "category": "meal",
      "createdAt": "2026-09-28T16:40:00.000Z"
    },
    {
      "id": "analysis_alex_fitness",
      "ideaId": "idea_alex_fitness",
      "status": "completed",
      "similarAppCount": 10,
      "reviewsScannedCount": 6700,
      "sentimentGroupCount": 3,
      "topGap": "Workouts that adapt to real schedules",
      "source": "mock",
      "category": "fitness",
      "createdAt": "2026-09-25T18:15:00.000Z"
    },
    {
      "id": "analysis_maya_budget",
      "ideaId": "idea_maya_budget",
      "status": "completed",
      "similarAppCount": 10,
      "reviewsScannedCount": 9200,
      "sentimentGroupCount": 3,
      "topGap": "More reliable account syncing",
      "source": "mock",
      "category": "budget",
      "createdAt": "2026-09-27T19:20:00.000Z"
    },
    {
      "id": "analysis_jordan_general",
      "ideaId": "idea_jordan_general",
      "status": "completed",
      "similarAppCount": 10,
      "reviewsScannedCount": 5100,
      "sentimentGroupCount": 3,
      "topGap": "More useful, less distracting reminders",
      "source": "mock",
      "category": "general",
      "createdAt": "2026-09-26T15:05:00.000Z"
    }
  ],
  "analysisCompetitors": [
    {
      "id": "competitor_alex_meal_01",
      "analysisId": "analysis_alex_meal",
      "appName": "Mealime",
      "subtitle": "Mealime Meal Plans",
      "appUrl": "https://example.test/mock-apps/mealime",
      "icon": "🥑",
      "rank": 1,
      "rating": 4.7,
      "matchPercent": 92
    },
    {
      "id": "competitor_alex_meal_02",
      "analysisId": "analysis_alex_meal",
      "appName": "SuperCook",
      "subtitle": "Recipe by Ingredient",
      "appUrl": "https://example.test/mock-apps/supercook",
      "icon": "🥕",
      "rank": 2,
      "rating": 4.6,
      "matchPercent": 89
    },
    {
      "id": "competitor_alex_meal_03",
      "analysisId": "analysis_alex_meal",
      "appName": "Samsung Food",
      "subtitle": "Recipes & Meal Planner",
      "appUrl": "https://example.test/mock-apps/samsung-food",
      "icon": "🍲",
      "rank": 3,
      "rating": 4.6,
      "matchPercent": 86
    },
    {
      "id": "competitor_alex_meal_04",
      "analysisId": "analysis_alex_meal",
      "appName": "Sidekick",
      "subtitle": "Sorted Food",
      "appUrl": "https://example.test/mock-apps/sidekick",
      "icon": "🌿",
      "rank": 4,
      "rating": 4.8,
      "matchPercent": 82
    },
    {
      "id": "competitor_alex_meal_05",
      "analysisId": "analysis_alex_meal",
      "appName": "BigOven",
      "subtitle": "Recipes & Meal Planner",
      "appUrl": "https://example.test/mock-apps/bigoven",
      "icon": "🍋",
      "rank": 5,
      "rating": 4.5,
      "matchPercent": 79
    },
    {
      "id": "competitor_alex_meal_06",
      "analysisId": "analysis_alex_meal",
      "appName": "Paprika",
      "subtitle": "Recipe Manager",
      "appUrl": "https://example.test/mock-apps/paprika",
      "icon": "🥦",
      "rank": 6,
      "rating": 4.8,
      "matchPercent": 77
    },
    {
      "id": "competitor_alex_meal_07",
      "analysisId": "analysis_alex_meal",
      "appName": "Yummly",
      "subtitle": "Recipes & Cooking Tools",
      "appUrl": "https://example.test/mock-apps/yummly",
      "icon": "🍽️",
      "rank": 7,
      "rating": 4.6,
      "matchPercent": 75
    },
    {
      "id": "competitor_alex_meal_08",
      "analysisId": "analysis_alex_meal",
      "appName": "Kitchen Stories",
      "subtitle": "Recipes",
      "appUrl": "https://example.test/mock-apps/kitchen-stories",
      "icon": "🧑‍🍳",
      "rank": 8,
      "rating": 4.7,
      "matchPercent": 72
    },
    {
      "id": "competitor_alex_meal_09",
      "analysisId": "analysis_alex_meal",
      "appName": "AnyList",
      "subtitle": "Grocery Shopping List",
      "appUrl": "https://example.test/mock-apps/anylist",
      "icon": "📒",
      "rank": 9,
      "rating": 4.9,
      "matchPercent": 69
    },
    {
      "id": "competitor_alex_meal_10",
      "analysisId": "analysis_alex_meal",
      "appName": "Samsung Health",
      "subtitle": "Food Tracker",
      "appUrl": "https://example.test/mock-apps/samsung-health",
      "icon": "🌾",
      "rank": 10,
      "rating": 4.4,
      "matchPercent": 65
    },
    {
      "id": "competitor_alex_fitness_01",
      "analysisId": "analysis_alex_fitness",
      "appName": "Strava",
      "subtitle": "Run, Ride, Hike",
      "appUrl": "https://example.test/mock-apps/strava",
      "icon": "🏃",
      "rank": 1,
      "rating": 4.8,
      "matchPercent": 94
    },
    {
      "id": "competitor_alex_fitness_02",
      "analysisId": "analysis_alex_fitness",
      "appName": "Fitbod",
      "subtitle": "Workout Planner",
      "appUrl": "https://example.test/mock-apps/fitbod",
      "icon": "💪",
      "rank": 2,
      "rating": 4.7,
      "matchPercent": 88
    },
    {
      "id": "competitor_alex_fitness_03",
      "analysisId": "analysis_alex_fitness",
      "appName": "Nike Training Club",
      "subtitle": "Fitness",
      "appUrl": "https://example.test/mock-apps/nike-training-club",
      "icon": "🧘",
      "rank": 3,
      "rating": 4.8,
      "matchPercent": 84
    },
    {
      "id": "competitor_alex_fitness_04",
      "analysisId": "analysis_alex_fitness",
      "appName": "Peloton",
      "subtitle": "Fitness & Workouts",
      "appUrl": "https://example.test/mock-apps/peloton",
      "icon": "🚴",
      "rank": 4,
      "rating": 4.7,
      "matchPercent": 81
    },
    {
      "id": "competitor_alex_fitness_05",
      "analysisId": "analysis_alex_fitness",
      "appName": "Strong",
      "subtitle": "Workout Tracker",
      "appUrl": "https://example.test/mock-apps/strong",
      "icon": "📈",
      "rank": 5,
      "rating": 4.9,
      "matchPercent": 78
    },
    {
      "id": "competitor_alex_fitness_06",
      "analysisId": "analysis_alex_fitness",
      "appName": "Freeletics",
      "subtitle": "Fitness Coach",
      "appUrl": "https://example.test/mock-apps/freeletics",
      "icon": "⚡",
      "rank": 6,
      "rating": 4.6,
      "matchPercent": 75
    },
    {
      "id": "competitor_alex_fitness_07",
      "analysisId": "analysis_alex_fitness",
      "appName": "Hevy",
      "subtitle": "Workout Tracker",
      "appUrl": "https://example.test/mock-apps/hevy",
      "icon": "🏋️",
      "rank": 7,
      "rating": 4.9,
      "matchPercent": 73
    },
    {
      "id": "competitor_alex_fitness_08",
      "analysisId": "analysis_alex_fitness",
      "appName": "Apple Fitness+",
      "subtitle": "Fitness",
      "appUrl": "https://example.test/mock-apps/apple-fitness",
      "icon": "🍎",
      "rank": 8,
      "rating": 4.7,
      "matchPercent": 71
    },
    {
      "id": "competitor_alex_fitness_09",
      "analysisId": "analysis_alex_fitness",
      "appName": "Ladder",
      "subtitle": "Strength Training",
      "appUrl": "https://example.test/mock-apps/ladder",
      "icon": "🎯",
      "rank": 9,
      "rating": 4.8,
      "matchPercent": 68
    },
    {
      "id": "competitor_alex_fitness_10",
      "analysisId": "analysis_alex_fitness",
      "appName": "JEFIT",
      "subtitle": "Workout Planner",
      "appUrl": "https://example.test/mock-apps/jefit",
      "icon": "🟣",
      "rank": 10,
      "rating": 4.6,
      "matchPercent": 65
    },
    {
      "id": "competitor_maya_budget_01",
      "analysisId": "analysis_maya_budget",
      "appName": "Rocket Money",
      "subtitle": "Bills & Budgets",
      "appUrl": "https://example.test/mock-apps/rocket-money",
      "icon": "💸",
      "rank": 1,
      "rating": 4.8,
      "matchPercent": 92
    },
    {
      "id": "competitor_maya_budget_02",
      "analysisId": "analysis_maya_budget",
      "appName": "YNAB",
      "subtitle": "Budgeting & Finance",
      "appUrl": "https://example.test/mock-apps/ynab",
      "icon": "📊",
      "rank": 2,
      "rating": 4.7,
      "matchPercent": 88
    },
    {
      "id": "competitor_maya_budget_03",
      "analysisId": "analysis_maya_budget",
      "appName": "Monarch",
      "subtitle": "Money Management",
      "appUrl": "https://example.test/mock-apps/monarch",
      "icon": "🌱",
      "rank": 3,
      "rating": 4.8,
      "matchPercent": 84
    },
    {
      "id": "competitor_maya_budget_04",
      "analysisId": "analysis_maya_budget",
      "appName": "PocketGuard",
      "subtitle": "Budget Planner",
      "appUrl": "https://example.test/mock-apps/pocketguard",
      "icon": "🪙",
      "rank": 4,
      "rating": 4.6,
      "matchPercent": 81
    },
    {
      "id": "competitor_maya_budget_05",
      "analysisId": "analysis_maya_budget",
      "appName": "Copilot",
      "subtitle": "Track & Budget Money",
      "appUrl": "https://example.test/mock-apps/copilot",
      "icon": "📈",
      "rank": 5,
      "rating": 4.8,
      "matchPercent": 79
    },
    {
      "id": "competitor_maya_budget_06",
      "analysisId": "analysis_maya_budget",
      "appName": "NerdWallet",
      "subtitle": "Finance Tracker",
      "appUrl": "https://example.test/mock-apps/nerdwallet",
      "icon": "🏦",
      "rank": 6,
      "rating": 4.7,
      "matchPercent": 76
    },
    {
      "id": "competitor_maya_budget_07",
      "analysisId": "analysis_maya_budget",
      "appName": "Empower",
      "subtitle": "Personal Dashboard",
      "appUrl": "https://example.test/mock-apps/empower",
      "icon": "💳",
      "rank": 7,
      "rating": 4.6,
      "matchPercent": 73
    },
    {
      "id": "competitor_maya_budget_08",
      "analysisId": "analysis_maya_budget",
      "appName": "Goodbudget",
      "subtitle": "Budget Planner",
      "appUrl": "https://example.test/mock-apps/goodbudget",
      "icon": "🐿️",
      "rank": 8,
      "rating": 4.5,
      "matchPercent": 70
    },
    {
      "id": "competitor_maya_budget_09",
      "analysisId": "analysis_maya_budget",
      "appName": "EveryDollar",
      "subtitle": "Budgeting App",
      "appUrl": "https://example.test/mock-apps/everydollar",
      "icon": "📋",
      "rank": 9,
      "rating": 4.7,
      "matchPercent": 68
    },
    {
      "id": "competitor_maya_budget_10",
      "analysisId": "analysis_maya_budget",
      "appName": "Simplifi",
      "subtitle": "Personal Finance",
      "appUrl": "https://example.test/mock-apps/simplifi",
      "icon": "🧾",
      "rank": 10,
      "rating": 4.5,
      "matchPercent": 65
    },
    {
      "id": "competitor_jordan_general_01",
      "analysisId": "analysis_jordan_general",
      "appName": "Notion",
      "subtitle": "Notes, Tasks & AI",
      "appUrl": "https://example.test/mock-apps/notion",
      "icon": "🔎",
      "rank": 1,
      "rating": 4.8,
      "matchPercent": 91
    },
    {
      "id": "competitor_jordan_general_02",
      "analysisId": "analysis_jordan_general",
      "appName": "Productivity",
      "subtitle": "Focus & Planning",
      "appUrl": "https://example.test/mock-apps/productivity",
      "icon": "🧩",
      "rank": 2,
      "rating": 4.7,
      "matchPercent": 88
    },
    {
      "id": "competitor_jordan_general_03",
      "analysisId": "analysis_jordan_general",
      "appName": "Headspace",
      "subtitle": "Meditation & Sleep",
      "appUrl": "https://example.test/mock-apps/headspace",
      "icon": "✨",
      "rank": 3,
      "rating": 4.9,
      "matchPercent": 84
    },
    {
      "id": "competitor_jordan_general_04",
      "analysisId": "analysis_jordan_general",
      "appName": "Duolingo",
      "subtitle": "Language Lessons",
      "appUrl": "https://example.test/mock-apps/duolingo",
      "icon": "📱",
      "rank": 4,
      "rating": 4.8,
      "matchPercent": 82
    },
    {
      "id": "competitor_jordan_general_05",
      "analysisId": "analysis_jordan_general",
      "appName": "Todoist",
      "subtitle": "To-do List & Planner",
      "appUrl": "https://example.test/mock-apps/todoist",
      "icon": "🟢",
      "rank": 5,
      "rating": 4.8,
      "matchPercent": 79
    },
    {
      "id": "competitor_jordan_general_06",
      "analysisId": "analysis_jordan_general",
      "appName": "Fabulous",
      "subtitle": "Daily Routine Planner",
      "appUrl": "https://example.test/mock-apps/fabulous",
      "icon": "🧠",
      "rank": 6,
      "rating": 4.6,
      "matchPercent": 75
    },
    {
      "id": "competitor_jordan_general_07",
      "analysisId": "analysis_jordan_general",
      "appName": "Finch",
      "subtitle": "Self Care Pet",
      "appUrl": "https://example.test/mock-apps/finch",
      "icon": "🪴",
      "rank": 7,
      "rating": 4.9,
      "matchPercent": 72
    },
    {
      "id": "competitor_jordan_general_08",
      "analysisId": "analysis_jordan_general",
      "appName": "Day One",
      "subtitle": "Journal & Diary",
      "appUrl": "https://example.test/mock-apps/day-one",
      "icon": "📓",
      "rank": 8,
      "rating": 4.8,
      "matchPercent": 69
    },
    {
      "id": "competitor_jordan_general_09",
      "analysisId": "analysis_jordan_general",
      "appName": "Structured",
      "subtitle": "Daily Planner",
      "appUrl": "https://example.test/mock-apps/structured",
      "icon": "☀️",
      "rank": 9,
      "rating": 4.7,
      "matchPercent": 66
    },
    {
      "id": "competitor_jordan_general_10",
      "analysisId": "analysis_jordan_general",
      "appName": "Balance",
      "subtitle": "Meditation & Sleep",
      "appUrl": "https://example.test/mock-apps/balance",
      "icon": "🎧",
      "rank": 10,
      "rating": 4.8,
      "matchPercent": 63
    }
  ],
  "reviewThemes": [
    {
      "id": "theme_alex_meal_positive_1",
      "analysisId": "analysis_alex_meal",
      "sentiment": "positive",
      "summary": "Easy to follow recipes",
      "exampleReview": "“Clear steps and recipes I actually make.”",
      "mentions": "1.2k mentions",
      "prevalence": 82,
      "rank": 1
    },
    {
      "id": "theme_alex_meal_positive_2",
      "analysisId": "analysis_alex_meal",
      "sentiment": "positive",
      "summary": "Good meal planning",
      "exampleReview": "“Planning the week takes just a few minutes.”",
      "mentions": "980 mentions",
      "prevalence": 68,
      "rank": 2
    },
    {
      "id": "theme_alex_meal_positive_3",
      "analysisId": "analysis_alex_meal",
      "sentiment": "positive",
      "summary": "Helpful dietary filters",
      "exampleReview": "“Finally easy to find gluten-free dinners.”",
      "mentions": "710 mentions",
      "prevalence": 49,
      "rank": 3
    },
    {
      "id": "theme_alex_meal_average_1",
      "analysisId": "analysis_alex_meal",
      "sentiment": "average",
      "summary": "Ingredient matching feels limited",
      "exampleReview": "“It misses ingredients I definitely have.”",
      "mentions": "890 mentions",
      "prevalence": 72,
      "rank": 1
    },
    {
      "id": "theme_alex_meal_average_2",
      "analysisId": "analysis_alex_meal",
      "sentiment": "average",
      "summary": "Recipe variety varies",
      "exampleReview": "“Good ideas, but I see the same ones often.”",
      "mentions": "650 mentions",
      "prevalence": 53,
      "rank": 2
    },
    {
      "id": "theme_alex_meal_average_3",
      "analysisId": "analysis_alex_meal",
      "sentiment": "average",
      "summary": "Grocery list needs editing",
      "exampleReview": "“Useful start, but I still tweak the list.”",
      "mentions": "460 mentions",
      "prevalence": 37,
      "rank": 3
    },
    {
      "id": "theme_alex_meal_negative_1",
      "analysisId": "analysis_alex_meal",
      "sentiment": "negative",
      "summary": "Ingredient recognition misses items",
      "exampleReview": "“I have to add half my pantry by hand.”",
      "mentions": "1.4k mentions",
      "prevalence": 88,
      "rank": 1
    },
    {
      "id": "theme_alex_meal_negative_2",
      "analysisId": "analysis_alex_meal",
      "sentiment": "negative",
      "summary": "Too many premium prompts",
      "exampleReview": "“The paywall appears before I can plan.”",
      "mentions": "980 mentions",
      "prevalence": 67,
      "rank": 2
    },
    {
      "id": "theme_alex_meal_negative_3",
      "analysisId": "analysis_alex_meal",
      "sentiment": "negative",
      "summary": "Diet filters are inconsistent",
      "exampleReview": "“Some recipes ignore my preferences.”",
      "mentions": "640 mentions",
      "prevalence": 44,
      "rank": 3
    },
    {
      "id": "theme_alex_fitness_positive_1",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "positive",
      "summary": "Guided workouts are motivating",
      "exampleReview": "“I actually look forward to training now.”",
      "mentions": "1.4k mentions",
      "prevalence": 84,
      "rank": 1
    },
    {
      "id": "theme_alex_fitness_positive_2",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "positive",
      "summary": "Progress tracking works well",
      "exampleReview": "“Seeing progress keeps me consistent.”",
      "mentions": "1.1k mentions",
      "prevalence": 67,
      "rank": 2
    },
    {
      "id": "theme_alex_fitness_positive_3",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "positive",
      "summary": "Good exercise variety",
      "exampleReview": "“There’s always a new routine to try.”",
      "mentions": "730 mentions",
      "prevalence": 48,
      "rank": 3
    },
    {
      "id": "theme_alex_fitness_average_1",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "average",
      "summary": "Plans are hard to personalize",
      "exampleReview": "“The program doesn’t adapt when I miss a day.”",
      "mentions": "960 mentions",
      "prevalence": 73,
      "rank": 1
    },
    {
      "id": "theme_alex_fitness_average_2",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "average",
      "summary": "Equipment options are limited",
      "exampleReview": "“My home setup isn’t in the exercise list.”",
      "mentions": "700 mentions",
      "prevalence": 52,
      "rank": 2
    },
    {
      "id": "theme_alex_fitness_average_3",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "average",
      "summary": "Notifications need control",
      "exampleReview": "“Reminders come at the wrong time.”",
      "mentions": "530 mentions",
      "prevalence": 40,
      "rank": 3
    },
    {
      "id": "theme_alex_fitness_negative_1",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "negative",
      "summary": "Workout recommendations repeat",
      "exampleReview": "“It keeps giving me the same sessions.”",
      "mentions": "1.3k mentions",
      "prevalence": 86,
      "rank": 1
    },
    {
      "id": "theme_alex_fitness_negative_2",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "negative",
      "summary": "Progress tracking misses context",
      "exampleReview": "“It doesn’t account for how hard the workout felt.”",
      "mentions": "970 mentions",
      "prevalence": 65,
      "rank": 2
    },
    {
      "id": "theme_alex_fitness_negative_3",
      "analysisId": "analysis_alex_fitness",
      "sentiment": "negative",
      "summary": "Too much content is locked",
      "exampleReview": "“Useful plans require another subscription.”",
      "mentions": "720 mentions",
      "prevalence": 46,
      "rank": 3
    },
    {
      "id": "theme_maya_budget_positive_1",
      "analysisId": "analysis_maya_budget",
      "sentiment": "positive",
      "summary": "Clear spending overview",
      "exampleReview": "“I can finally see where my money goes.”",
      "mentions": "1.5k mentions",
      "prevalence": 85,
      "rank": 1
    },
    {
      "id": "theme_maya_budget_positive_2",
      "analysisId": "analysis_maya_budget",
      "sentiment": "positive",
      "summary": "Helpful savings goals",
      "exampleReview": "“The goals keep me accountable.”",
      "mentions": "940 mentions",
      "prevalence": 66,
      "rank": 2
    },
    {
      "id": "theme_maya_budget_positive_3",
      "analysisId": "analysis_maya_budget",
      "sentiment": "positive",
      "summary": "Fast account syncing",
      "exampleReview": "“Everything is in one place.”",
      "mentions": "700 mentions",
      "prevalence": 48,
      "rank": 3
    },
    {
      "id": "theme_maya_budget_average_1",
      "analysisId": "analysis_maya_budget",
      "sentiment": "average",
      "summary": "Setup takes too long",
      "exampleReview": "“Connecting all my accounts was a project.”",
      "mentions": "880 mentions",
      "prevalence": 71,
      "rank": 1
    },
    {
      "id": "theme_maya_budget_average_2",
      "analysisId": "analysis_maya_budget",
      "sentiment": "average",
      "summary": "Subscription detection misses",
      "exampleReview": "“It didn’t catch a couple of recurring charges.”",
      "mentions": "680 mentions",
      "prevalence": 55,
      "rank": 2
    },
    {
      "id": "theme_maya_budget_average_3",
      "analysisId": "analysis_maya_budget",
      "sentiment": "average",
      "summary": "Budget categories need tuning",
      "exampleReview": "“I had to fix the auto categories.”",
      "mentions": "510 mentions",
      "prevalence": 42,
      "rank": 3
    },
    {
      "id": "theme_maya_budget_negative_1",
      "analysisId": "analysis_maya_budget",
      "sentiment": "negative",
      "summary": "Account sync breaks",
      "exampleReview": "“My bank disconnects every few days.”",
      "mentions": "1.3k mentions",
      "prevalence": 87,
      "rank": 1
    },
    {
      "id": "theme_maya_budget_negative_2",
      "analysisId": "analysis_maya_budget",
      "sentiment": "negative",
      "summary": "Too many features behind paywall",
      "exampleReview": "“Basic insights should not need premium.”",
      "mentions": "920 mentions",
      "prevalence": 63,
      "rank": 2
    },
    {
      "id": "theme_maya_budget_negative_3",
      "analysisId": "analysis_maya_budget",
      "sentiment": "negative",
      "summary": "Transactions categorize poorly",
      "exampleReview": "“I spend too much time correcting categories.”",
      "mentions": "690 mentions",
      "prevalence": 47,
      "rank": 3
    },
    {
      "id": "theme_jordan_general_positive_1",
      "analysisId": "analysis_jordan_general",
      "sentiment": "positive",
      "summary": "Simple to get started",
      "exampleReview": "“I was up and running in a couple of minutes.”",
      "mentions": "1.3k mentions",
      "prevalence": 84,
      "rank": 1
    },
    {
      "id": "theme_jordan_general_positive_2",
      "analysisId": "analysis_jordan_general",
      "sentiment": "positive",
      "summary": "Helpful reminders",
      "exampleReview": "“The nudges make it easier to stick with it.”",
      "mentions": "980 mentions",
      "prevalence": 65,
      "rank": 2
    },
    {
      "id": "theme_jordan_general_positive_3",
      "analysisId": "analysis_jordan_general",
      "sentiment": "positive",
      "summary": "Clean and pleasant design",
      "exampleReview": "“It feels calm and easy to use.”",
      "mentions": "720 mentions",
      "prevalence": 48,
      "rank": 3
    },
    {
      "id": "theme_jordan_general_average_1",
      "analysisId": "analysis_jordan_general",
      "sentiment": "average",
      "summary": "Customization takes time",
      "exampleReview": "“I needed a while to make it fit my routine.”",
      "mentions": "900 mentions",
      "prevalence": 72,
      "rank": 1
    },
    {
      "id": "theme_jordan_general_average_2",
      "analysisId": "analysis_jordan_general",
      "sentiment": "average",
      "summary": "Some features are hard to find",
      "exampleReview": "“I didn’t know this existed until recently.”",
      "mentions": "680 mentions",
      "prevalence": 52,
      "rank": 2
    },
    {
      "id": "theme_jordan_general_average_3",
      "analysisId": "analysis_jordan_general",
      "sentiment": "average",
      "summary": "Sync can be inconsistent",
      "exampleReview": "“My changes don’t always show up everywhere.”",
      "mentions": "490 mentions",
      "prevalence": 39,
      "rank": 3
    },
    {
      "id": "theme_jordan_general_negative_1",
      "analysisId": "analysis_jordan_general",
      "sentiment": "negative",
      "summary": "Key features behind a paywall",
      "exampleReview": "“I hit the upgrade screen before seeing value.”",
      "mentions": "1.4k mentions",
      "prevalence": 87,
      "rank": 1
    },
    {
      "id": "theme_jordan_general_negative_2",
      "analysisId": "analysis_jordan_general",
      "sentiment": "negative",
      "summary": "Too many notifications",
      "exampleReview": "“The reminders became more distracting than helpful.”",
      "mentions": "950 mentions",
      "prevalence": 64,
      "rank": 2
    },
    {
      "id": "theme_jordan_general_negative_3",
      "analysisId": "analysis_jordan_general",
      "sentiment": "negative",
      "summary": "Sync issues across devices",
      "exampleReview": "“I have to refresh to see the latest changes.”",
      "mentions": "690 mentions",
      "prevalence": 47,
      "rank": 3
    }
  ],
  "catalogs": {
    "meal": {
      "competitors": [
        {
          "icon": "🥑",
          "name": "Mealime",
          "subtitle": "Mealime Meal Plans",
          "rating": 4.7,
          "similarityPercent": 92
        },
        {
          "icon": "🥕",
          "name": "SuperCook",
          "subtitle": "Recipe by Ingredient",
          "rating": 4.6,
          "similarityPercent": 89
        },
        {
          "icon": "🍲",
          "name": "Samsung Food",
          "subtitle": "Recipes & Meal Planner",
          "rating": 4.6,
          "similarityPercent": 86
        },
        {
          "icon": "🌿",
          "name": "Sidekick",
          "subtitle": "Sorted Food",
          "rating": 4.8,
          "similarityPercent": 82
        },
        {
          "icon": "🍋",
          "name": "BigOven",
          "subtitle": "Recipes & Meal Planner",
          "rating": 4.5,
          "similarityPercent": 79
        },
        {
          "icon": "🥦",
          "name": "Paprika",
          "subtitle": "Recipe Manager",
          "rating": 4.8,
          "similarityPercent": 77
        },
        {
          "icon": "🍽️",
          "name": "Yummly",
          "subtitle": "Recipes & Cooking Tools",
          "rating": 4.6,
          "similarityPercent": 75
        },
        {
          "icon": "🧑‍🍳",
          "name": "Kitchen Stories",
          "subtitle": "Recipes",
          "rating": 4.7,
          "similarityPercent": 72
        },
        {
          "icon": "📒",
          "name": "AnyList",
          "subtitle": "Grocery Shopping List",
          "rating": 4.9,
          "similarityPercent": 69
        },
        {
          "icon": "🌾",
          "name": "Samsung Health",
          "subtitle": "Food Tracker",
          "rating": 4.4,
          "similarityPercent": 65
        }
      ],
      "reviewThemes": {
        "positive": [
          {
            "name": "Easy to follow recipes",
            "prevalence": 82,
            "example": "“Clear steps and recipes I actually make.”",
            "mentions": "1.2k mentions"
          },
          {
            "name": "Good meal planning",
            "prevalence": 68,
            "example": "“Planning the week takes just a few minutes.”",
            "mentions": "980 mentions"
          },
          {
            "name": "Helpful dietary filters",
            "prevalence": 49,
            "example": "“Finally easy to find gluten-free dinners.”",
            "mentions": "710 mentions"
          }
        ],
        "average": [
          {
            "name": "Ingredient matching feels limited",
            "prevalence": 72,
            "example": "“It misses ingredients I definitely have.”",
            "mentions": "890 mentions"
          },
          {
            "name": "Recipe variety varies",
            "prevalence": 53,
            "example": "“Good ideas, but I see the same ones often.”",
            "mentions": "650 mentions"
          },
          {
            "name": "Grocery list needs editing",
            "prevalence": 37,
            "example": "“Useful start, but I still tweak the list.”",
            "mentions": "460 mentions"
          }
        ],
        "negative": [
          {
            "name": "Ingredient recognition misses items",
            "prevalence": 88,
            "example": "“I have to add half my pantry by hand.”",
            "mentions": "1.4k mentions"
          },
          {
            "name": "Too many premium prompts",
            "prevalence": 67,
            "example": "“The paywall appears before I can plan.”",
            "mentions": "980 mentions"
          },
          {
            "name": "Diet filters are inconsistent",
            "prevalence": 44,
            "example": "“Some recipes ignore my preferences.”",
            "mentions": "640 mentions"
          }
        ]
      }
    },
    "budget": {
      "competitors": [
        {
          "icon": "💸",
          "name": "Rocket Money",
          "subtitle": "Bills & Budgets",
          "rating": 4.8,
          "similarityPercent": 92
        },
        {
          "icon": "📊",
          "name": "YNAB",
          "subtitle": "Budgeting & Finance",
          "rating": 4.7,
          "similarityPercent": 88
        },
        {
          "icon": "🌱",
          "name": "Monarch",
          "subtitle": "Money Management",
          "rating": 4.8,
          "similarityPercent": 84
        },
        {
          "icon": "🪙",
          "name": "PocketGuard",
          "subtitle": "Budget Planner",
          "rating": 4.6,
          "similarityPercent": 81
        },
        {
          "icon": "📈",
          "name": "Copilot",
          "subtitle": "Track & Budget Money",
          "rating": 4.8,
          "similarityPercent": 79
        },
        {
          "icon": "🏦",
          "name": "NerdWallet",
          "subtitle": "Finance Tracker",
          "rating": 4.7,
          "similarityPercent": 76
        },
        {
          "icon": "💳",
          "name": "Empower",
          "subtitle": "Personal Dashboard",
          "rating": 4.6,
          "similarityPercent": 73
        },
        {
          "icon": "🐿️",
          "name": "Goodbudget",
          "subtitle": "Budget Planner",
          "rating": 4.5,
          "similarityPercent": 70
        },
        {
          "icon": "📋",
          "name": "EveryDollar",
          "subtitle": "Budgeting App",
          "rating": 4.7,
          "similarityPercent": 68
        },
        {
          "icon": "🧾",
          "name": "Simplifi",
          "subtitle": "Personal Finance",
          "rating": 4.5,
          "similarityPercent": 65
        }
      ],
      "reviewThemes": {
        "positive": [
          {
            "name": "Clear spending overview",
            "prevalence": 85,
            "example": "“I can finally see where my money goes.”",
            "mentions": "1.5k mentions"
          },
          {
            "name": "Helpful savings goals",
            "prevalence": 66,
            "example": "“The goals keep me accountable.”",
            "mentions": "940 mentions"
          },
          {
            "name": "Fast account syncing",
            "prevalence": 48,
            "example": "“Everything is in one place.”",
            "mentions": "700 mentions"
          }
        ],
        "average": [
          {
            "name": "Setup takes too long",
            "prevalence": 71,
            "example": "“Connecting all my accounts was a project.”",
            "mentions": "880 mentions"
          },
          {
            "name": "Subscription detection misses",
            "prevalence": 55,
            "example": "“It didn’t catch a couple of recurring charges.”",
            "mentions": "680 mentions"
          },
          {
            "name": "Budget categories need tuning",
            "prevalence": 42,
            "example": "“I had to fix the auto categories.”",
            "mentions": "510 mentions"
          }
        ],
        "negative": [
          {
            "name": "Account sync breaks",
            "prevalence": 87,
            "example": "“My bank disconnects every few days.”",
            "mentions": "1.3k mentions"
          },
          {
            "name": "Too many features behind paywall",
            "prevalence": 63,
            "example": "“Basic insights should not need premium.”",
            "mentions": "920 mentions"
          },
          {
            "name": "Transactions categorize poorly",
            "prevalence": 47,
            "example": "“I spend too much time correcting categories.”",
            "mentions": "690 mentions"
          }
        ]
      }
    },
    "fitness": {
      "competitors": [
        {
          "icon": "🏃",
          "name": "Strava",
          "subtitle": "Run, Ride, Hike",
          "rating": 4.8,
          "similarityPercent": 94
        },
        {
          "icon": "💪",
          "name": "Fitbod",
          "subtitle": "Workout Planner",
          "rating": 4.7,
          "similarityPercent": 88
        },
        {
          "icon": "🧘",
          "name": "Nike Training Club",
          "subtitle": "Fitness",
          "rating": 4.8,
          "similarityPercent": 84
        },
        {
          "icon": "🚴",
          "name": "Peloton",
          "subtitle": "Fitness & Workouts",
          "rating": 4.7,
          "similarityPercent": 81
        },
        {
          "icon": "📈",
          "name": "Strong",
          "subtitle": "Workout Tracker",
          "rating": 4.9,
          "similarityPercent": 78
        },
        {
          "icon": "⚡",
          "name": "Freeletics",
          "subtitle": "Fitness Coach",
          "rating": 4.6,
          "similarityPercent": 75
        },
        {
          "icon": "🏋️",
          "name": "Hevy",
          "subtitle": "Workout Tracker",
          "rating": 4.9,
          "similarityPercent": 73
        },
        {
          "icon": "🍎",
          "name": "Apple Fitness+",
          "subtitle": "Fitness",
          "rating": 4.7,
          "similarityPercent": 71
        },
        {
          "icon": "🎯",
          "name": "Ladder",
          "subtitle": "Strength Training",
          "rating": 4.8,
          "similarityPercent": 68
        },
        {
          "icon": "🟣",
          "name": "JEFIT",
          "subtitle": "Workout Planner",
          "rating": 4.6,
          "similarityPercent": 65
        }
      ],
      "reviewThemes": {
        "positive": [
          {
            "name": "Guided workouts are motivating",
            "prevalence": 84,
            "example": "“I actually look forward to training now.”",
            "mentions": "1.4k mentions"
          },
          {
            "name": "Progress tracking works well",
            "prevalence": 67,
            "example": "“Seeing progress keeps me consistent.”",
            "mentions": "1.1k mentions"
          },
          {
            "name": "Good exercise variety",
            "prevalence": 48,
            "example": "“There’s always a new routine to try.”",
            "mentions": "730 mentions"
          }
        ],
        "average": [
          {
            "name": "Plans are hard to personalize",
            "prevalence": 73,
            "example": "“The program doesn’t adapt when I miss a day.”",
            "mentions": "960 mentions"
          },
          {
            "name": "Equipment options are limited",
            "prevalence": 52,
            "example": "“My home setup isn’t in the exercise list.”",
            "mentions": "700 mentions"
          },
          {
            "name": "Notifications need control",
            "prevalence": 40,
            "example": "“Reminders come at the wrong time.”",
            "mentions": "530 mentions"
          }
        ],
        "negative": [
          {
            "name": "Workout recommendations repeat",
            "prevalence": 86,
            "example": "“It keeps giving me the same sessions.”",
            "mentions": "1.3k mentions"
          },
          {
            "name": "Progress tracking misses context",
            "prevalence": 65,
            "example": "“It doesn’t account for how hard the workout felt.”",
            "mentions": "970 mentions"
          },
          {
            "name": "Too much content is locked",
            "prevalence": 46,
            "example": "“Useful plans require another subscription.”",
            "mentions": "720 mentions"
          }
        ]
      }
    },
    "general": {
      "competitors": [
        {
          "icon": "🔎",
          "name": "Notion",
          "subtitle": "Notes, Tasks & AI",
          "rating": 4.8,
          "similarityPercent": 91
        },
        {
          "icon": "🧩",
          "name": "Productivity",
          "subtitle": "Focus & Planning",
          "rating": 4.7,
          "similarityPercent": 88
        },
        {
          "icon": "✨",
          "name": "Headspace",
          "subtitle": "Meditation & Sleep",
          "rating": 4.9,
          "similarityPercent": 84
        },
        {
          "icon": "📱",
          "name": "Duolingo",
          "subtitle": "Language Lessons",
          "rating": 4.8,
          "similarityPercent": 82
        },
        {
          "icon": "🟢",
          "name": "Todoist",
          "subtitle": "To-do List & Planner",
          "rating": 4.8,
          "similarityPercent": 79
        },
        {
          "icon": "🧠",
          "name": "Fabulous",
          "subtitle": "Daily Routine Planner",
          "rating": 4.6,
          "similarityPercent": 75
        },
        {
          "icon": "🪴",
          "name": "Finch",
          "subtitle": "Self Care Pet",
          "rating": 4.9,
          "similarityPercent": 72
        },
        {
          "icon": "📓",
          "name": "Day One",
          "subtitle": "Journal & Diary",
          "rating": 4.8,
          "similarityPercent": 69
        },
        {
          "icon": "☀️",
          "name": "Structured",
          "subtitle": "Daily Planner",
          "rating": 4.7,
          "similarityPercent": 66
        },
        {
          "icon": "🎧",
          "name": "Balance",
          "subtitle": "Meditation & Sleep",
          "rating": 4.8,
          "similarityPercent": 63
        }
      ],
      "reviewThemes": {
        "positive": [
          {
            "name": "Simple to get started",
            "prevalence": 84,
            "example": "“I was up and running in a couple of minutes.”",
            "mentions": "1.3k mentions"
          },
          {
            "name": "Helpful reminders",
            "prevalence": 65,
            "example": "“The nudges make it easier to stick with it.”",
            "mentions": "980 mentions"
          },
          {
            "name": "Clean and pleasant design",
            "prevalence": 48,
            "example": "“It feels calm and easy to use.”",
            "mentions": "720 mentions"
          }
        ],
        "average": [
          {
            "name": "Customization takes time",
            "prevalence": 72,
            "example": "“I needed a while to make it fit my routine.”",
            "mentions": "900 mentions"
          },
          {
            "name": "Some features are hard to find",
            "prevalence": 52,
            "example": "“I didn’t know this existed until recently.”",
            "mentions": "680 mentions"
          },
          {
            "name": "Sync can be inconsistent",
            "prevalence": 39,
            "example": "“My changes don’t always show up everywhere.”",
            "mentions": "490 mentions"
          }
        ],
        "negative": [
          {
            "name": "Key features behind a paywall",
            "prevalence": 87,
            "example": "“I hit the upgrade screen before seeing value.”",
            "mentions": "1.4k mentions"
          },
          {
            "name": "Too many notifications",
            "prevalence": 64,
            "example": "“The reminders became more distracting than helpful.”",
            "mentions": "950 mentions"
          },
          {
            "name": "Sync issues across devices",
            "prevalence": 47,
            "example": "“I have to refresh to see the latest changes.”",
            "mentions": "690 mentions"
          }
        ]
      }
    }
  }
};
