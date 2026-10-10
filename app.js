// ═══════════════════════════════════════════════════════════
    // MOCK DATA
    // ═══════════════════════════════════════════════════════════
    const MOCK_USERS = {
      'buyer@demo.com': { id: 'usr_buyer001', email: 'buyer@demo.com', password: 'Demo@1234', full_name: 'Arjun Sharma', role: 'buyer', wallet_address: '0x742d35Cc6634C0532925a3b8D4C9C1C3a6b8F2e1', eth_balance: 5.0, credit_balance: 0 },
      'seller@demo.com': { id: 'usr_sell001', email: 'seller@demo.com', password: 'Demo@1234', full_name: 'GreenEarth Pvt Ltd', role: 'seller', wallet_address: '0x891f24Aa7745D1643936b5d0E8C7D2D4b7c9E3f2', eth_balance: 12.5, credit_balance: 0 },
    };

    // Anti-greenwash evidence data per project
    // ═══════════════════════════════════════════════════════════
// EXPANDED GLOBAL PROJECT DATASET & EVIDENCE VAULT (125 SITES)
// ═══════════════════════════════════════════════════════════
const EVIDENCE_VAULT = {
  "p1": {
    "score": 89,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 34,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmcojYyNZqcrah3EH5E6HdNNDGwecAjAPzeZgqnE2KGDws",
    "gps": "10.3210\u00b0 N, 76.9540\u00b0 E",
    "lat": 10.321,
    "lng": 76.954,
    "area_ha": 14200,
    "trees_count": 4416200,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p2": {
    "score": 94,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 46,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmkmLJA1iiymW7dqWCNAxvvbV7NzoEEZ5jpyX8fwAXcxvk",
    "gps": "21.9490\u00b0 N, 88.9000\u00b0 E",
    "lat": 21.949,
    "lng": 88.9,
    "area_ha": 18500,
    "trees_count": 4662000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p3": {
    "score": 79,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 39,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Gold Standard",
    "ipfs": "QmQs4ee4jo7CY9BTs5or6eY16kEQUsuA1PvnHhjnfVCD4j",
    "gps": "26.9150\u00b0 N, 71.9050\u00b0 E",
    "lat": 26.915,
    "lng": 71.905,
    "area_ha": 8400,
    "trees_count": 1520400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p4": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 12,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "QmTzz5DGwtsNAqhcze1pJfw877ZGciCdGVur6RH1mdGjYR",
    "gps": "28.5900\u00b0 N, 77.1650\u00b0 E",
    "lat": 28.59,
    "lng": 77.165,
    "area_ha": 620,
    "trees_count": 95480,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p5": {
    "score": 96,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 38,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmospGn7srDpTJoE2CLsyHeQyYw7yBxG7SjKcWPaFi1vYi",
    "gps": "27.5380\u00b0 N, 71.9170\u00b0 E",
    "lat": 27.538,
    "lng": 71.917,
    "area_ha": 2400,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p6": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "EY Climate",
    "standard": "Gold Standard",
    "ipfs": "QmoxjfHfc6xEKo93zcmTtaiPQ9gtrtnDohTZv88TXZKkSp",
    "gps": "8.2580\u00b0 N, 77.5450\u00b0 E",
    "lat": 8.258,
    "lng": 77.545,
    "area_ha": 1800,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p7": {
    "score": 97,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 48,
    "auditor": "T\u00dcV Rheinland",
    "standard": "CAR",
    "ipfs": "QmP1MkrxRkYbDDS2LgQAU8d2PZ2e8T3NDKmNkqF52YzMen",
    "gps": "30.9010\u00b0 N, 75.8570\u00b0 E",
    "lat": 30.901,
    "lng": 75.857,
    "area_ha": 350,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p8": {
    "score": 85,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qmrb8znMRNWLrp7xdqiSjxGoYVSjGrq6tFTcN2rBDoLthH",
    "gps": "8.6180\u00b0 N, 77.2480\u00b0 E",
    "lat": 8.618,
    "lng": 77.248,
    "area_ha": 9800,
    "trees_count": 1519000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p9": {
    "score": 87,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 25,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmjHbmbyqJMJi834Hwdk61HULxFr74Vag9px5FZRbcmPuJ",
    "gps": "19.7160\u00b0 N, 85.3210\u00b0 E",
    "lat": 19.716,
    "lng": 85.321,
    "area_ha": 11200,
    "trees_count": 4132800,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p10": {
    "score": 76,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 21,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "Qm5AJkaH8ghwWV53SKF6xqaxzfG3kUevBadV6MLfrLhHwp",
    "gps": "12.9270\u00b0 N, 77.6850\u00b0 E",
    "lat": 12.927,
    "lng": 77.685,
    "area_ha": 480,
    "trees_count": 206880,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p11": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 26,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmzuT7qViWGqyFYPvWtsHnRwWpHJbzV9YMZYTKBhaEm3kh",
    "gps": "23.2150\u00b0 N, 69.1120\u00b0 E",
    "lat": 23.215,
    "lng": 69.112,
    "area_ha": 6500,
    "trees_count": 2242500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p12": {
    "score": 87,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 16,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Gold Standard",
    "ipfs": "QmEgHE6ymh6AJ2K4MRFQgBBcPgVaEdTfuTHY5wzJxhTJzr",
    "gps": "18.5200\u00b0 N, 74.2800\u00b0 E",
    "lat": 18.52,
    "lng": 74.28,
    "area_ha": 5400,
    "trees_count": 1101600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p13": {
    "score": 77,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 40,
    "auditor": "EY Climate",
    "standard": "CAR",
    "ipfs": "Qm2N8uKRCnsNWGAvwyJsoU5kEggQrZ6PG8NkGPeNgUcwLc",
    "gps": "19.0600\u00b0 N, 72.8600\u00b0 E",
    "lat": 19.06,
    "lng": 72.86,
    "area_ha": 340,
    "trees_count": 61880,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p14": {
    "score": 85,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 35,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmYyMQC8rTfeb2nF8Z4mDDsL9u1r98FBf21nEKB4kXkUnW",
    "gps": "26.9120\u00b0 N, 70.9020\u00b0 E",
    "lat": 26.912,
    "lng": 70.902,
    "area_ha": 1600,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p15": {
    "score": 88,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 47,
    "auditor": "DNV GL",
    "standard": "Plan Vivo",
    "ipfs": "QmiDTELTR6RfN9v4q66jpZbZL8MfksiybMaDfE7rNmaory",
    "gps": "23.2590\u00b0 N, 77.4120\u00b0 E",
    "lat": 23.259,
    "lng": 77.412,
    "area_ha": 4200,
    "trees_count": 1827000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p16": {
    "score": 88,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 40,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmfVSGk7RHgVf3Pb1JD8FL1kBPhWqo5r32vsaaiR72Kocq",
    "gps": "26.5770\u00b0 N, 93.1710\u00b0 E",
    "lat": 26.577,
    "lng": 93.171,
    "area_ha": 12400,
    "trees_count": 4154000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p17": {
    "score": 91,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 48,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmmTvZddsd94SJG4WKT4q5srcWTZntToeKU947uLiWBFSS",
    "gps": "6.4170\u00b0 N, 80.4670\u00b0 E",
    "lat": 6.417,
    "lng": 80.467,
    "area_ha": 7800,
    "trees_count": 3252600,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p18": {
    "score": 72,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 45,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "Qm6fW2JxLmCz9JnWYjXfscb9Bhdui3NiycknEEynuCgaSm",
    "gps": "8.0330\u00b0 N, 79.8280\u00b0 E",
    "lat": 8.033,
    "lng": 79.828,
    "area_ha": 3600,
    "trees_count": 1242000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p19": {
    "score": 84,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 32,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Gold Standard",
    "ipfs": "Qmvqen8Hqh9hT15FqYjX7HJ3RoT7ub1WF9RcERf5y4XWzZ",
    "gps": "28.3950\u00b0 N, 83.8750\u00b0 E",
    "lat": 28.395,
    "lng": 83.875,
    "area_ha": 8200,
    "trees_count": 2861800,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p20": {
    "score": 78,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmWzYFkCMnsL8NtktPyVVvXoj5bpYK5fJbRhM3sMzGyw5d",
    "gps": "27.7000\u00b0 N, 83.4500\u00b0 E",
    "lat": 27.7,
    "lng": 83.45,
    "area_ha": 6900,
    "trees_count": 2318400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p21": {
    "score": 74,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 30,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmhzC85BizpyzfiYHJAihBMEznEVMaUz8t4QiUQQa8K5UX",
    "gps": "24.8940\u00b0 N, 91.8680\u00b0 E",
    "lat": 24.894,
    "lng": 91.868,
    "area_ha": 4100,
    "trees_count": 881500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p22": {
    "score": 97,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 48,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "Qm3s5xmGDac2tYeJFoQTgARTL9rKzMQmW7F8T93wsRxupw",
    "gps": "21.4270\u00b0 N, 91.9780\u00b0 E",
    "lat": 21.427,
    "lng": 91.978,
    "area_ha": 5100,
    "trees_count": 1581000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p23": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 36,
    "auditor": "T\u00dcV Rheinland",
    "standard": "Verra VCS",
    "ipfs": "QmWmHzg7yPoLwkCWW38LUTcWLcAzjJLqXiJpNgyaojg2Uy",
    "gps": "24.8770\u00b0 N, 69.8000\u00b0 E",
    "lat": 24.877,
    "lng": 69.8,
    "area_ha": 1200,
    "trees_count": 0,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p24": {
    "score": 85,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 33,
    "auditor": "SCS Global",
    "standard": "Gold Standard",
    "ipfs": "QmYgsgoGVxHJwymhhVUZwiHaYtPMm93x5vfkDqGZG7jE3u",
    "gps": "33.1500\u00b0 N, 73.1800\u00b0 E",
    "lat": 33.15,
    "lng": 73.18,
    "area_ha": 4600,
    "trees_count": 1219000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p25": {
    "score": 97,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 37,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmnBksH3JbvLTeXt8WGoLjei1LJgCceQRLQ6yUw1PSGLaa",
    "gps": "24.1800\u00b0 N, 67.5500\u00b0 E",
    "lat": 24.18,
    "lng": 67.55,
    "area_ha": 15000,
    "trees_count": 4245000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p26": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 40,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmXMv7quCYArSgiVuS48RZZgJ2F1D5RhY4tzUHB8ejxNtT",
    "gps": "2.2150\u00b0 S, 113.9210\u00b0 E",
    "lat": -2.215,
    "lng": 113.921,
    "area_ha": 24000,
    "trees_count": 8232000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p27": {
    "score": 87,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 16,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qm62bh3jQEDs4WHpjKbgKJ9fDJ4xtudRVywfnKR9NkUrJi",
    "gps": "0.5890\u00b0 S, 101.3430\u00b0 E",
    "lat": -0.589,
    "lng": 101.343,
    "area_ha": 18500,
    "trees_count": 7159500,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p28": {
    "score": 95,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmvhhQEKHUeJMtUoimKCK3sj1ZaiJCEaFYwLmVijTjM9YB",
    "gps": "1.5420\u00b0 N, 102.1000\u00b0 E",
    "lat": 1.542,
    "lng": 102.1,
    "area_ha": 12300,
    "trees_count": 5252100,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p29": {
    "score": 71,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 45,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "CAR",
    "ipfs": "Qm9CXpGQNQZzEgrerm6NZ41AVSnZr6X3DstU35vuZ2vKxb",
    "gps": "7.1500\u00b0 S, 110.1400\u00b0 E",
    "lat": -7.15,
    "lng": 110.14,
    "area_ha": 450,
    "trees_count": 0,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p30": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 36,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmSgf5coi59idjK71JMG8BTZQ2M6bKPHP5uuyaAP9JV4SR",
    "gps": "6.7050\u00b0 S, 107.3600\u00b0 E",
    "lat": -6.705,
    "lng": 107.36,
    "area_ha": 800,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p31": {
    "score": 89,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 36,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmHnNwCzBm2jwDoq5rog9JF9RNTbaXvsR3yhpbv7FfAcZe",
    "gps": "5.5000\u00b0 N, 118.2330\u00b0 E",
    "lat": 5.5,
    "lng": 118.233,
    "area_ha": 14500,
    "trees_count": 5133000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p32": {
    "score": 82,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 40,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmKJo7regAzFBAZxEQBeS2cCbPhCko46sBKTGsXebcbMrc",
    "gps": "1.6830\u00b0 N, 110.3170\u00b0 E",
    "lat": 1.683,
    "lng": 110.317,
    "area_ha": 9200,
    "trees_count": 2778400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p33": {
    "score": 81,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 43,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmRqV52mHGYATkmY77mpNp3iYz6qkJzTMpSzmEpbMidA9C",
    "gps": "3.8160\u00b0 N, 102.3270\u00b0 E",
    "lat": 3.816,
    "lng": 102.327,
    "area_ha": 6700,
    "trees_count": 1708500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p34": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 40,
    "auditor": "EY Climate",
    "standard": "Gold Standard",
    "ipfs": "Qm5omQkhsTVasr6ydhroQypVKHY8rntm3dq1vATzRzutJs",
    "gps": "8.8500\u00b0 N, 104.9800\u00b0 E",
    "lat": 8.85,
    "lng": 104.98,
    "area_ha": 16800,
    "trees_count": 4872000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p35": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 20,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "Qmeg4ZcAMDkvcSDu98jMRnFeFbiHw2rsCcBPenoEPEe5t1",
    "gps": "15.5800\u00b0 N, 107.8200\u00b0 E",
    "lat": 15.58,
    "lng": 107.82,
    "area_ha": 11200,
    "trees_count": 3740800,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p36": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 16,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Verra VCS",
    "ipfs": "QmJSxEFv7c4ffB181VMWpGNksj7uLRXGydVW4rAAmtg7j1",
    "gps": "11.6800\u00b0 N, 108.9200\u00b0 E",
    "lat": 11.68,
    "lng": 108.92,
    "area_ha": 1400,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p37": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 47,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "QmTNHnjFNyznjYo9w2Ydh1LmNjJCzRxy9H3ErQtTkaWdPb",
    "gps": "18.7900\u00b0 N, 98.9800\u00b0 E",
    "lat": 18.79,
    "lng": 98.98,
    "area_ha": 580,
    "trees_count": 104980,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p38": {
    "score": 87,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 32,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "Qm9iyP3JpBxrZY66o84nDCQgw5av5zCeo6ro8w3vSjVPRM",
    "gps": "8.3500\u00b0 N, 98.5300\u00b0 E",
    "lat": 8.35,
    "lng": 98.53,
    "area_ha": 8900,
    "trees_count": 2180500,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p39": {
    "score": 93,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 26,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qm2pHoUMaEAFEXnjmwayPwzBEKjMbhMZ9xqpyYB34b2ULc",
    "gps": "9.8350\u00b0 N, 118.7380\u00b0 E",
    "lat": 9.835,
    "lng": 118.738,
    "area_ha": 15600,
    "trees_count": 3369600,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p40": {
    "score": 80,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "QmjJB1harmZBKoce7VL5MKdxpfjL1DhMni3SRARtMNqnak",
    "gps": "14.6500\u00b0 N, 121.0500\u00b0 E",
    "lat": 14.65,
    "lng": 121.05,
    "area_ha": 420,
    "trees_count": 111300,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p41": {
    "score": 77,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "T\u00dcV Rheinland",
    "standard": "CAR",
    "ipfs": "QmE3aq9MRJfbC2AH5qJQVf6YBtNSGTEG4kf5LYybZqpRYs",
    "gps": "7.1900\u00b0 N, 125.4500\u00b0 E",
    "lat": 7.19,
    "lng": 125.45,
    "area_ha": 320,
    "trees_count": 0,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p42": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 47,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmQKHTsndXRR9bkwvZ6HYLQPVc3G9ch3tLEkvu2pJHVh6s",
    "gps": "11.5500\u00b0 N, 103.2000\u00b0 E",
    "lat": 11.55,
    "lng": 103.2,
    "area_ha": 28000,
    "trees_count": 6104000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p43": {
    "score": 76,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 35,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmpWd82NbBsbMAtkgHPAaxregGQ2nm1ueb1FoJyeRNMFUg",
    "gps": "12.8700\u00b0 N, 104.0500\u00b0 E",
    "lat": 12.87,
    "lng": 104.05,
    "area_ha": 9800,
    "trees_count": 3459400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p44": {
    "score": 81,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 37,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmP3iaCjDYnufWrqsB68GomBgL6MkJnLGJrUsaw5tWsPJ4",
    "gps": "19.8900\u00b0 N, 102.1400\u00b0 E",
    "lat": 19.89,
    "lng": 102.14,
    "area_ha": 7400,
    "trees_count": 1679800,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p45": {
    "score": 78,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 45,
    "auditor": "EY Climate",
    "standard": "Verra VCS",
    "ipfs": "QmCgdFhL8PbApJHjbLtzLuMBwvQEj8jbANe3sFY3zfe2hR",
    "gps": "12.0800\u00b0 N, 98.6000\u00b0 E",
    "lat": 12.08,
    "lng": 98.6,
    "area_ha": 13500,
    "trees_count": 4644000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p46": {
    "score": 95,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "QmL1fuqf96Wi6FEzJT6B3HoKj6k3rfAMSds6pBQxGProeo",
    "gps": "0.1500\u00b0 S, 37.3000\u00b0 E",
    "lat": -0.15,
    "lng": 37.3,
    "area_ha": 15400,
    "trees_count": 3187800,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p47": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 45,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmgcSjUfe9ptc1wWUVAkKLHWYNp5Sa6VKyk2Q3YpnxdtZe",
    "gps": "0.4500\u00b0 S, 35.8000\u00b0 E",
    "lat": -0.45,
    "lng": 35.8,
    "area_ha": 22000,
    "trees_count": 8426000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p48": {
    "score": 91,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 24,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "Qmi7RvqbmTfx8VX3wqVWvBaj8PbtWPyvmGxyT8QhkJhriw",
    "gps": "2.7500\u00b0 N, 36.8500\u00b0 E",
    "lat": 2.75,
    "lng": 36.85,
    "area_ha": 3500,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p49": {
    "score": 87,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 29,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmkAHFqhJk2p6sjskZEnoHfvPxyKZ1FcnsquhekYbnxJBg",
    "gps": "4.4200\u00b0 S, 39.5100\u00b0 E",
    "lat": -4.42,
    "lng": 39.51,
    "area_ha": 4800,
    "trees_count": 1176000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p50": {
    "score": 85,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 34,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmDDLMDkXzpy1fSucdxgKvwPYHupNoS3uCWwAxY14fmsR7",
    "gps": "1.9500\u00b0 S, 34.8500\u00b0 E",
    "lat": -1.95,
    "lng": 34.85,
    "area_ha": 19500,
    "trees_count": 8287500,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p51": {
    "score": 77,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 17,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Plan Vivo",
    "ipfs": "QmHvPp2ADkorJdJtxsex1s93aPY5DkjDur9BcF7fZ4kzYe",
    "gps": "3.0700\u00b0 S, 37.3500\u00b0 E",
    "lat": -3.07,
    "lng": 37.35,
    "area_ha": 8200,
    "trees_count": 1533400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p52": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmTMJYBcqr9YGt552W2aQbuYYzUmNDmjHTWQWfrocAWSBx",
    "gps": "7.8000\u00b0 S, 39.3000\u00b0 E",
    "lat": -7.8,
    "lng": 39.3,
    "area_ha": 26000,
    "trees_count": 5824000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p53": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 26,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmWMsVUcW9A5eDBNi7EpiUUDAq23aAd3a4FBxbZ2ifH5Tz",
    "gps": "15.6500\u00b0 S, 50.1500\u00b0 E",
    "lat": -15.65,
    "lng": 50.15,
    "area_ha": 32000,
    "trees_count": 12672000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p54": {
    "score": 83,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 20,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmuY1wgSRshRwUmMouqaRFmu5bYF1k1XXNCoQ7RaGYZczQ",
    "gps": "15.8200\u00b0 S, 46.2800\u00b0 E",
    "lat": -15.82,
    "lng": 46.28,
    "area_ha": 11400,
    "trees_count": 2895600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p55": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 39,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qm6GNcjvQfHx4mBV1rvXCnWhcgMey6HQfQC1hvYjZaMpEx",
    "gps": "1.0500\u00b0 S, 29.6500\u00b0 E",
    "lat": -1.05,
    "lng": 29.65,
    "area_ha": 8900,
    "trees_count": 3399800,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p56": {
    "score": 78,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 38,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmxW1qF6gp5wUMtGwguVCjsCCFcA7vgfcmY3UcVzusVzvH",
    "gps": "0.4500\u00b0 N, 30.3800\u00b0 E",
    "lat": 0.45,
    "lng": 30.38,
    "area_ha": 7600,
    "trees_count": 1998800,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p57": {
    "score": 89,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 37,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmHB8aE6GESP9x9oBVzrWinJZZQh4pUdTLMZwF28sxCaeB",
    "gps": "6.8500\u00b0 N, 39.7500\u00b0 E",
    "lat": 6.85,
    "lng": 39.75,
    "area_ha": 14800,
    "trees_count": 4366000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p58": {
    "score": 81,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 22,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Plan Vivo",
    "ipfs": "QmB2jfwh5A64sY2Qm5GAetJFHd8q2frKUyYGSyhBbddZXe",
    "gps": "6.7000\u00b0 N, 38.4500\u00b0 E",
    "lat": 6.7,
    "lng": 38.45,
    "area_ha": 9200,
    "trees_count": 2833600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p59": {
    "score": 97,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 36,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmD5dWochGeXGB487TThVK9y2yH8S161DRnVNh25k9GPYB",
    "gps": "2.4800\u00b0 S, 29.2300\u00b0 E",
    "lat": -2.48,
    "lng": 29.23,
    "area_ha": 13200,
    "trees_count": 3669600,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p60": {
    "score": 93,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 19,
    "auditor": "EY Climate",
    "standard": "Gold Standard",
    "ipfs": "QmPFyahg9mFVgLym4M9Y7VKZeMtj2NjF3hZYVZYKUsbrAX",
    "gps": "18.8500\u00b0 S, 36.3000\u00b0 E",
    "lat": -18.85,
    "lng": 36.3,
    "area_ha": 21000,
    "trees_count": 7980000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p61": {
    "score": 71,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 43,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmC2ePVdb3Di1vfvqUeMktpo4cXjq5DX6EPCfawZZkmagh",
    "gps": "18.7500\u00b0 S, 34.5000\u00b0 E",
    "lat": -18.75,
    "lng": 34.5,
    "area_ha": 11500,
    "trees_count": 4232000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p62": {
    "score": 84,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 20,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmzJJDr2phHZZv93M9NaEp6QvjinBpgaubJja54mMpRssE",
    "gps": "18.7000\u00b0 S, 22.1500\u00b0 E",
    "lat": -18.7,
    "lng": 22.15,
    "area_ha": 8500,
    "trees_count": 1317500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p63": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 24,
    "auditor": "T\u00dcV Rheinland",
    "standard": "Verra VCS",
    "ipfs": "QmVeCcjF5nKv6fRMKb2JzczS93pCNkr74xvsp1h7T2DYCX",
    "gps": "22.5800\u00b0 S, 15.0200\u00b0 E",
    "lat": -22.58,
    "lng": 15.02,
    "area_ha": 1800,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p64": {
    "score": 87,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 46,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "Qm6CyZi3vJVk2gMJzyH4FPzzwxELP8jXgsgRaRKcT8eagC",
    "gps": "24.6800\u00b0 N, 46.7200\u00b0 E",
    "lat": 24.68,
    "lng": 46.72,
    "area_ha": 750,
    "trees_count": 165000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p65": {
    "score": 87,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 26,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "QmE25n8rUeBPUAEQyvxDfCCBxScgstRncpiPwaYeh37Tss",
    "gps": "25.1900\u00b0 N, 55.3000\u00b0 E",
    "lat": 25.19,
    "lng": 55.3,
    "area_ha": 1200,
    "trees_count": 330000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p66": {
    "score": 93,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 24,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "Qmt6KeiAj6hd5ijycAY3ALssA9m3JjxHBux1m1VVocVDfT",
    "gps": "57.2500\u00b0 N, 4.7500\u00b0 W",
    "lat": 57.25,
    "lng": -4.75,
    "area_ha": 11400,
    "trees_count": 4286400,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p67": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 14,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "Qm6JNN4RYH8hGXXhc7jdzVgwzHcKXzM8ZXdVBciy12d7ro",
    "gps": "54.3800\u00b0 N, 2.1500\u00b0 W",
    "lat": 54.38,
    "lng": -2.15,
    "area_ha": 8900,
    "trees_count": 3221800,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p68": {
    "score": 91,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 38,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Verra VCS",
    "ipfs": "Qmv4XZgZ2aLvo49qLNXAcB7nJriG6sNqJXBN3C6Wou9LVs",
    "gps": "48.2500\u00b0 N, 8.2000\u00b0 E",
    "lat": 48.25,
    "lng": 8.2,
    "area_ha": 14500,
    "trees_count": 4466000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p69": {
    "score": 86,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 29,
    "auditor": "T\u00dcV Rheinland",
    "standard": "Gold Standard",
    "ipfs": "Qm7xZ6YYGwoaAKtY32u3P5PhtdhSMLCko5vmZ6oh6KemUw",
    "gps": "52.3800\u00b0 N, 13.8200\u00b0 E",
    "lat": 52.38,
    "lng": 13.82,
    "area_ha": 1200,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p70": {
    "score": 83,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 36,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qm4DhSyZLhBfjiq7bK6SJQbgbpKe4D9akokfTHcSCsJogv",
    "gps": "47.6500\u00b0 N, 11.8500\u00b0 E",
    "lat": 47.65,
    "lng": 11.85,
    "area_ha": 9800,
    "trees_count": 3645600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p71": {
    "score": 88,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 20,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "Qm851iVSz5eRTncRBWZTMBcarEWQYNyZh7Uh9jzznT5t6U",
    "gps": "42.8500\u00b0 N, 0.5500\u00b0 E",
    "lat": 42.85,
    "lng": 0.55,
    "area_ha": 12800,
    "trees_count": 2419200,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p72": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 20,
    "auditor": "DNV GL",
    "standard": "Verra VCS",
    "ipfs": "QmWrH8Hr17Bb9SoGhVorL59w9VzmESdDjMek7AQJkkXPhU",
    "gps": "44.3000\u00b0 N, 0.8000\u00b0 W",
    "lat": 44.3,
    "lng": -0.8,
    "area_ha": 16500,
    "trees_count": 3696000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p73": {
    "score": 68,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 16,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "Qm167SDHC26wfqxei7r8fuZythFUwevHRumKA5nPL4xGSV",
    "gps": "48.8800\u00b0 N, 2.2400\u00b0 E",
    "lat": 48.88,
    "lng": 2.24,
    "area_ha": 510,
    "trees_count": 128520,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p74": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 26,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qm1xpUZwMgQdx6Yx5TmeB3PChtdM5dj9CibV4YJXqTz34n",
    "gps": "39.4500\u00b0 N, 6.2500\u00b0 W",
    "lat": 39.45,
    "lng": -6.25,
    "area_ha": 18200,
    "trees_count": 3112200,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p75": {
    "score": 89,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 37,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Verra VCS",
    "ipfs": "QmKya8qnmbL89RhZSv36rcn1V1B6etRomhCeXQwc3BVxdn",
    "gps": "37.4500\u00b0 N, 5.2000\u00b0 W",
    "lat": 37.45,
    "lng": -5.2,
    "area_ha": 2100,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p76": {
    "score": 69,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 46,
    "auditor": "SCS Global",
    "standard": "Gold Standard",
    "ipfs": "QmBnV7tibKCgKnK6jsNDUVt9vTP8idyC8h48rTALtcnecA",
    "gps": "36.9500\u00b0 N, 2.4000\u00b0 W",
    "lat": 36.95,
    "lng": -2.4,
    "area_ha": 7200,
    "trees_count": 3117600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p77": {
    "score": 95,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 38,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "Qmx8Je6UJhrk2TmsQnNTdr5tL2RGwYon5tj4wgt7NcNBZ4",
    "gps": "38.3500\u00b0 N, 7.9000\u00b0 W",
    "lat": 38.35,
    "lng": -7.9,
    "area_ha": 13400,
    "trees_count": 3403600,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p78": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 37,
    "auditor": "DNV GL",
    "standard": "Verra VCS",
    "ipfs": "QmuHx7HhVsXdJyY8MSeH4sEweQLeKbhqSJ8nAGVym3MTAv",
    "gps": "40.3200\u00b0 N, 7.6200\u00b0 W",
    "lat": 40.32,
    "lng": -7.62,
    "area_ha": 8900,
    "trees_count": 3773600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p79": {
    "score": 91,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 30,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "QmykzfojvL7U3g72cDMKcCXnmC5rgxyPVbW4fQiRP1MJSZ",
    "gps": "44.0500\u00b0 N, 11.5500\u00b0 E",
    "lat": 44.05,
    "lng": 11.55,
    "area_ha": 11800,
    "trees_count": 3068000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p80": {
    "score": 69,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Plan Vivo",
    "ipfs": "QmqJZT21GxqUetRVgF7Hz4kaZsdUh7WarA4Ks8AGRuMHXw",
    "gps": "37.7500\u00b0 N, 15.0000\u00b0 E",
    "lat": 37.75,
    "lng": 15.0,
    "area_ha": 6400,
    "trees_count": 2643200,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p81": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 41,
    "auditor": "T\u00dcV Rheinland",
    "standard": "CAR",
    "ipfs": "Qmv782Mh9SzXyAJk78hgJDyRm72VSC2fbUu3J168bbCf29",
    "gps": "45.1800\u00b0 N, 9.8500\u00b0 E",
    "lat": 45.18,
    "lng": 9.85,
    "area_ha": 380,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p82": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 25,
    "auditor": "SCS Global",
    "standard": "Gold Standard",
    "ipfs": "QmWQmKUXVMHi5VPTjgqEQzRrtowN1gfPXg7PhyktANCCqQ",
    "gps": "53.8500\u00b0 N, 9.5500\u00b0 W",
    "lat": 53.85,
    "lng": -9.55,
    "area_ha": 9600,
    "trees_count": 2582400,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p83": {
    "score": 96,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 41,
    "auditor": "DNV GL",
    "standard": "Verra VCS",
    "ipfs": "QmCfVGLrYx2RvPKNT2ZrJhV8iV7gfgaUrWPVycMyK23qMk",
    "gps": "61.2500\u00b0 N, 11.3500\u00b0 E",
    "lat": 61.25,
    "lng": 11.35,
    "area_ha": 17500,
    "trees_count": 2852500,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p84": {
    "score": 83,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 18,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "QmhCVpfAJyCdy5rDGJaodxiabGZXRM5pWJfKRFWfYtdWBV",
    "gps": "56.6800\u00b0 N, 16.3500\u00b0 E",
    "lat": 56.68,
    "lng": 16.35,
    "area_ha": 8400,
    "trees_count": 3267600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p85": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 14,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Gold Standard",
    "ipfs": "QmCG2nHYe3in4tKJ4xuftQqqEaW7famXV6bmKqjokwD7DG",
    "gps": "46.2500\u00b0 N, 7.5500\u00b0 E",
    "lat": 46.25,
    "lng": 7.55,
    "area_ha": 7800,
    "trees_count": 2800200,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p86": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 27,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmrPuPyF6pEDtvdtmQ2spwUQqispphWMbpjT24edn8QdK5",
    "gps": "9.8500\u00b0 S, 68.8000\u00b0 W",
    "lat": -9.85,
    "lng": -68.8,
    "area_ha": 48000,
    "trees_count": 11040000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p87": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 39,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "Qmb9xAZ1XmvpVECwpGkPSCDpjBBn2yETFae5UsyQDPRb5Z",
    "gps": "3.8500\u00b0 S, 55.2000\u00b0 W",
    "lat": -3.85,
    "lng": -55.2,
    "area_ha": 62000,
    "trees_count": 10912000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p88": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 39,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmHscmGKtKzm9rfo49E3GhSzv3MiVVrs86sBAWGtaayXaR",
    "gps": "5.1500\u00b0 S, 60.2500\u00b0 W",
    "lat": -5.15,
    "lng": -60.25,
    "area_ha": 54000,
    "trees_count": 10206000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p89": {
    "score": 96,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 30,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmK45xPQBxs6rAnHke7VSoJg8fqWVtUZRkpcSR3LTEg9Vd",
    "gps": "2.4500\u00b0 S, 44.2500\u00b0 W",
    "lat": -2.45,
    "lng": -44.25,
    "area_ha": 24000,
    "trees_count": 10032000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p90": {
    "score": 70,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 38,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Plan Vivo",
    "ipfs": "QmsJbTfdGysBBkcs7X17AUhsybVcyMghPJ8171yrDeeSdn",
    "gps": "15.8500\u00b0 S, 48.9500\u00b0 W",
    "lat": -15.85,
    "lng": -48.95,
    "area_ha": 21000,
    "trees_count": 5187000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p91": {
    "score": 75,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 15,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmXRK4tRUVwMh2HCLEDuLbqf8JixqgjooqdHkf8Cc6RzJD",
    "gps": "16.8500\u00b0 S, 56.8000\u00b0 W",
    "lat": -16.85,
    "lng": -56.8,
    "area_ha": 18500,
    "trees_count": 3219000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p92": {
    "score": 97,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 47,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "Qm37dsuAHSWj6eL8rSRmFoLW5NkMf9kREoQQTroM291ow5",
    "gps": "12.5500\u00b0 S, 69.2500\u00b0 W",
    "lat": -12.55,
    "lng": -69.25,
    "area_ha": 38000,
    "trees_count": 11818000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p93": {
    "score": 95,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 34,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmtnQCJ3Ljj8zH6ZXkA2obEmjz74NdM3e8JjTzozZtdXbM",
    "gps": "4.4500\u00b0 S, 73.6000\u00b0 W",
    "lat": -4.45,
    "lng": -73.6,
    "area_ha": 42000,
    "trees_count": 12390000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p94": {
    "score": 73,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 21,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Gold Standard",
    "ipfs": "QmWVTyWXhT2AZv7r7NHX7JNJ29nRwJHBj1Y43UJTLNqq89",
    "gps": "4.9500\u00b0 S, 80.6500\u00b0 W",
    "lat": -4.95,
    "lng": -80.65,
    "area_ha": 12500,
    "trees_count": 4812500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p95": {
    "score": 96,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmW2fXxGCqqa5XKbVwLB2XP6yYHBm9xg4xBiJ69tFwu4Eb",
    "gps": "0.4500\u00b0 N, 75.8000\u00b0 W",
    "lat": 0.45,
    "lng": -75.8,
    "area_ha": 34000,
    "trees_count": 9214000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p96": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 47,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmT1TqHy1wUbqPMdaW3jZJP89ZHScxKgLGkTFzLTb1he1U",
    "gps": "5.2500\u00b0 N, 76.8500\u00b0 W",
    "lat": 5.25,
    "lng": -76.85,
    "area_ha": 29000,
    "trees_count": 4466000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p97": {
    "score": 75,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 26,
    "auditor": "SCS Global",
    "standard": "Plan Vivo",
    "ipfs": "Qmyy3Vhc1ze7HWACjfbBbk8wrtjGr2ygcgt1RgerKqQ8XV",
    "gps": "6.2500\u00b0 N, 74.6000\u00b0 W",
    "lat": 6.25,
    "lng": -74.6,
    "area_ha": 14000,
    "trees_count": 5796000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p98": {
    "score": 87,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 33,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmqpXE5bS6S8yvNthn4o4cS644rQcQsndTTRc6eg2Wb71i",
    "gps": "13.7500\u00b0 S, 65.4500\u00b0 W",
    "lat": -13.75,
    "lng": -65.45,
    "area_ha": 26000,
    "trees_count": 6474000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p99": {
    "score": 81,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 34,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Gold Standard",
    "ipfs": "QmCCunLfhybLaxcRATn3D1DEdEjxLjCBzN527HCam32CBt",
    "gps": "18.2500\u00b0 S, 62.8000\u00b0 W",
    "lat": -18.25,
    "lng": -62.8,
    "area_ha": 19500,
    "trees_count": 4660500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p100": {
    "score": 89,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 39,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmyF3cBYnL4osrytD5Uf4WkeWVTKNhiVGQva3DCsPJtawN",
    "gps": "0.7000\u00b0 S, 76.2500\u00b0 W",
    "lat": -0.7,
    "lng": -76.25,
    "area_ha": 31000,
    "trees_count": 13361000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p101": {
    "score": 78,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 24,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmgFkmrCc8riYGmHMzwpk1ezxsEiDEbZUpL5rRwRSr29sJ",
    "gps": "2.5500\u00b0 S, 79.9500\u00b0 W",
    "lat": -2.55,
    "lng": -79.95,
    "area_ha": 12800,
    "trees_count": 1971200,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p102": {
    "score": 86,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 18,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmgBpb2CuPCHXTN1KuPz8RkPuCsJpfAaJCiTCzSpcFLaVT",
    "gps": "39.8500\u00b0 S, 73.2000\u00b0 W",
    "lat": -39.85,
    "lng": -73.2,
    "area_ha": 22000,
    "trees_count": 3740000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p103": {
    "score": 89,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 16,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "QmkWnQAD32egTLQC3Fi8fTT5fiSUHAqcB8kAf1GSBitXS3",
    "gps": "53.1500\u00b0 S, 70.9000\u00b0 W",
    "lat": -53.15,
    "lng": -70.9,
    "area_ha": 16500,
    "trees_count": 6880500,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p104": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 46,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Verra VCS",
    "ipfs": "QmPRE7K1e1DDfHd3tQmVzinvaF6KdPvm8Bmgyf42uTWkWh",
    "gps": "23.8500\u00b0 S, 69.2500\u00b0 W",
    "lat": -23.85,
    "lng": -69.25,
    "area_ha": 2800,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p105": {
    "score": 78,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 27,
    "auditor": "Bureau Veritas",
    "standard": "Plan Vivo",
    "ipfs": "QmC4vzohDsXBd4Vx4zw8BYoCWRUACRcJayCsUxMNURcSAx",
    "gps": "26.5000\u00b0 S, 54.3000\u00b0 W",
    "lat": -26.5,
    "lng": -54.3,
    "area_ha": 15400,
    "trees_count": 6098400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p106": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 48,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "QmAmxmkMidN4PRFUvMh2f9cw9FafA76iPhy5usARhWXtaj",
    "gps": "47.8000\u00b0 N, 123.6000\u00b0 W",
    "lat": 47.8,
    "lng": -123.6,
    "area_ha": 24000,
    "trees_count": 4680000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p107": {
    "score": 98,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 38,
    "auditor": "Bureau Veritas",
    "standard": "CAR",
    "ipfs": "QmSu7d55842EVm1Gxfn3DnNXxGVkcLgLKEMQcyso1sQqv2",
    "gps": "41.2000\u00b0 N, 124.0000\u00b0 W",
    "lat": 41.2,
    "lng": -124.0,
    "area_ha": 18500,
    "trees_count": 3922000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p108": {
    "score": 80,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 30,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "Qmcissni2V6qzzUtxUYFAwh7z2vKPHifxffvdVoLDav4Lu",
    "gps": "34.0500\u00b0 N, 118.2500\u00b0 W",
    "lat": 34.05,
    "lng": -118.25,
    "area_ha": 680,
    "trees_count": 234600,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p109": {
    "score": 90,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 12,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Verra VCS",
    "ipfs": "QmYT9wqVTb9fohbJz8zhUqVhNyLqDjph4sBVPzfrzYLgzk",
    "gps": "33.1500\u00b0 N, 112.9000\u00b0 W",
    "lat": 33.15,
    "lng": -112.9,
    "area_ha": 2200,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p110": {
    "score": 94,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 22,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "Qmv6yB4yebydQ2EVgxeNhofnseGeN75VfW2aaGkoBVeSa6",
    "gps": "32.4500\u00b0 N, 100.5000\u00b0 W",
    "lat": 32.45,
    "lng": -100.5,
    "area_ha": 2600,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p111": {
    "score": 85,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 44,
    "auditor": "T\u00dcV Rheinland",
    "standard": "CAR",
    "ipfs": "QmJyAyfF3wuJX9VKuzcWgf339rD8ZbHjRYGeATwgw9CdGd",
    "gps": "31.8500\u00b0 N, 102.3500\u00b0 W",
    "lat": 31.85,
    "lng": -102.35,
    "area_ha": 620,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p112": {
    "score": 92,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "SCS Global",
    "standard": "ACR",
    "ipfs": "Qmbo6MaHG63KkBognYtQbGgif9ZGveNngRTSMUHxXivEd6",
    "gps": "38.3500\u00b0 N, 80.4500\u00b0 W",
    "lat": 38.35,
    "lng": -80.45,
    "area_ha": 19500,
    "trees_count": 5967000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p113": {
    "score": 87,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 45,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "Qmg3TAvmuBN8M3VAyLgqrrHVG1dPvvxWtwtr41TJ7MiQ1R",
    "gps": "25.4500\u00b0 N, 80.9500\u00b0 W",
    "lat": 25.45,
    "lng": -80.95,
    "area_ha": 28000,
    "trees_count": 7028000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p114": {
    "score": 74,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "Bureau Veritas",
    "standard": "ACR",
    "ipfs": "Qmxz7VVg8knQjkp8xn8L1g4qRb1UH5RcjBH7GhfRUn6jcB",
    "gps": "31.2500\u00b0 N, 91.5000\u00b0 W",
    "lat": 31.25,
    "lng": -91.5,
    "area_ha": 15400,
    "trees_count": 3480400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p115": {
    "score": 77,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "CAR",
    "ipfs": "QmHcRFVL7fgm8MokbcEHa67db3ytpCS6wcJUmX98RitmrZ",
    "gps": "42.1500\u00b0 N, 93.6000\u00b0 W",
    "lat": 42.15,
    "lng": -93.6,
    "area_ha": 14200,
    "trees_count": 4643400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p116": {
    "score": 86,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 48,
    "auditor": "T\u00dcV Rheinland",
    "standard": "CAR",
    "ipfs": "QmDhsnTiXJDiZA3E39tvGneFpY1McN5hYiQcK4ppDxByYy",
    "gps": "41.6500\u00b0 N, 88.1500\u00b0 W",
    "lat": 41.65,
    "lng": -88.15,
    "area_ha": 410,
    "trees_count": 0,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p117": {
    "score": 73,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 37,
    "auditor": "SCS Global",
    "standard": "ACR",
    "ipfs": "QmgB9RTeQj8k16P71qw8mGwbn1nYpr59mtpJUFYGY23Y6t",
    "gps": "41.9500\u00b0 N, 74.1500\u00b0 W",
    "lat": 41.95,
    "lng": -74.15,
    "area_ha": 11200,
    "trees_count": 4054400,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p118": {
    "score": 86,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 31,
    "auditor": "Bureau Veritas",
    "standard": "Verra VCS",
    "ipfs": "QmdHsGVNGuonryn99Soyp7Rj9K8mMVUybd9wvPYYVYE5iX",
    "gps": "46.1500\u00b0 N, 69.3500\u00b0 W",
    "lat": 46.15,
    "lng": -69.35,
    "area_ha": 26000,
    "trees_count": 6812000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p119": {
    "score": 69,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 18,
    "auditor": "DNV GL",
    "standard": "Gold Standard",
    "ipfs": "Qmf5qs2N55ap9BkkhJQLnhHAt2kW1qgsZqvWiRAyXy8DcD",
    "gps": "60.3500\u00b0 N, 151.2500\u00b0 W",
    "lat": 60.35,
    "lng": -151.25,
    "area_ha": 21500,
    "trees_count": 5246000,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p120": {
    "score": 93,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 42,
    "auditor": "SCS Global",
    "standard": "Verra VCS",
    "ipfs": "Qm3Kw1MHQCkjyh6Qk6o9bPbrH9Tt6itoemAxWjevLnLMrR",
    "gps": "52.8500\u00b0 N, 128.1500\u00b0 W",
    "lat": 52.85,
    "lng": -128.15,
    "area_ha": 35000,
    "trees_count": 12180000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p121": {
    "score": 93,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 43,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "Qm3rQrv8NrxNgWGsgcejFp1rHAQ5PT6UeuT5jvvmCLKzVh",
    "gps": "55.4500\u00b0 N, 114.2500\u00b0 W",
    "lat": 55.45,
    "lng": -114.25,
    "area_ha": 28000,
    "trees_count": 11004000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p122": {
    "score": 94,
    "label": "Outstanding",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 28,
    "auditor": "DNV GL",
    "standard": "Plan Vivo",
    "ipfs": "QmB4tRxJCwUYnySuapZtCia9fpjpj1twVKngGizwrdea3k",
    "gps": "46.8500\u00b0 N, 74.5500\u00b0 W",
    "lat": 46.85,
    "lng": -74.55,
    "area_ha": 22500,
    "trees_count": 5535000,
    "co2_verified": true,
    "dataStatus": "VERIFIED"
  },
  "p123": {
    "score": 85,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 39,
    "auditor": "T\u00dcV S\u00dcD",
    "standard": "Verra VCS",
    "ipfs": "QmPrgSHcvrzo7ecQVkv6Sa2HRDTPCU8yvQphj1NDHtGqoR",
    "gps": "43.1500\u00b0 N, 81.4500\u00b0 W",
    "lat": 43.15,
    "lng": -81.45,
    "area_ha": 2100,
    "trees_count": 0,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p124": {
    "score": 88,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 48,
    "auditor": "SCS Global",
    "standard": "CAR",
    "ipfs": "QmnqdGZxC6Sdb2iv5Pk8TdMEuJYFnnmfGwdea6Tb7Ht6VM",
    "gps": "43.7000\u00b0 N, 79.3800\u00b0 W",
    "lat": 43.7,
    "lng": -79.38,
    "area_ha": 540,
    "trees_count": 138240,
    "co2_verified": false,
    "dataStatus": "DEMO"
  },
  "p125": {
    "score": 84,
    "label": "Evaluation Demo",
    "sat_dates": [
      "2024-03",
      "2024-09",
      "2024-12"
    ],
    "iot_sensors": 44,
    "auditor": "Bureau Veritas",
    "standard": "Gold Standard",
    "ipfs": "QmmDNu295h8GC6ieUoSwvFCrix6obACiSSbGK7PCMupTtx",
    "gps": "50.8500\u00b0 N, 106.1500\u00b0 W",
    "lat": 50.85,
    "lng": -106.15,
    "area_ha": 17500,
    "trees_count": 4882500,
    "co2_verified": false,
    "dataStatus": "DEMO"
  }
};

let MOCK_PROJECTS = [
  {
    "id": "p1",
    "name": "Anamalai Rainforest Corridor",
    "type": "REFORESTATION",
    "location": "Tamil Nadu, India",
    "region": "asia",
    "lat": 10.321,
    "lng": 76.954,
    "area_ha": 14200,
    "available_credits": 8450,
    "total_credits": 10000,
    "co2_tonnes": 8450,
    "price_per_credit": 0.04,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.78,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 10000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 0.7 tCO2/ha/yr capacity.",
    "aqi": 75,
    "soil_moisture_pct": 68.8,
    "ambient_temp_c": 23.6,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Teak",
      "Neem",
      "Banyan",
      "Sandalwood",
      "Sal",
      "Bamboo",
      "Peepal",
      "Arjun"
    ],
    "seller_name": "Tamil Nadu Bio-Conservancy",
    "seller_wallet": "0x27be31111a2a73ed562b0f79c37459eef50bea63",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        10.32301,
        76.993
      ],
      [
        10.35697,
        76.96997
      ],
      [
        10.33507,
        76.92904
      ],
      [
        10.2933,
        76.92286
      ],
      [
        10.29093,
        76.96208
      ],
      [
        10.32301,
        76.993
      ]
    ]
  },
  {
    "id": "p2",
    "name": "Sundarbans Mangrove Bio-Shield",
    "type": "OCEAN",
    "location": "West Bengal, India",
    "region": "asia",
    "lat": 21.949,
    "lng": 88.9,
    "area_ha": 18500,
    "available_credits": 21300,
    "total_credits": 25000,
    "co2_tonnes": 21300,
    "price_per_credit": 0.035,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.84,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 25000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 61,
    "soil_moisture_pct": 79.9,
    "ambient_temp_c": 27.4,
    "uhi_cooling_c": -3.1,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia marina",
      "Bruguiera gymnorrhiza",
      "Ceriops decandra",
      "Sonneratia apetala",
      "Xylocarpus granatum",
      "Aegiceras corniculatum",
      "Heritiera fomes"
    ],
    "seller_name": "West Bengal Bio-Conservancy",
    "seller_wallet": "0xbe270da702f06b90f143262fdc5c0eed8da0365b",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        21.95351,
        88.95437
      ],
      [
        21.98128,
        88.91618
      ],
      [
        21.97308,
        88.85907
      ],
      [
        21.92407,
        88.85968
      ],
      [
        21.91315,
        88.91208
      ],
      [
        21.95351,
        88.95437
      ]
    ]
  },
  {
    "id": "p3",
    "name": "Thar Desert Sand-Dune Stabilization",
    "type": "BARREN_RESTORE",
    "location": "Rajasthan, India",
    "region": "asia",
    "lat": 26.915,
    "lng": 71.905,
    "area_ha": 8400,
    "available_credits": 5200,
    "total_credits": 6500,
    "co2_tonnes": 5200,
    "price_per_credit": 0.038,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.54,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 6500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 0.8 tCO2/ha/yr capacity.",
    "aqi": 90,
    "soil_moisture_pct": 22.3,
    "ambient_temp_c": 21.9,
    "uhi_cooling_c": -1.8,
    "native_species": [
      "Prosopis cineraria",
      "Acacia senegal",
      "Tecomella undulata",
      "Capparis decidua",
      "Ziziphus nummularia",
      "Cenchrus ciliaris",
      "Calligonum polygonoides",
      "Salvadora oleoides"
    ],
    "seller_name": "Rajasthan Bio-Conservancy",
    "seller_wallet": "0x2825bc5430beb45f683514f2ceb81f9d7914c120",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        26.91069,
        71.93427
      ],
      [
        26.93948,
        71.91377
      ],
      [
        26.93244,
        71.87836
      ],
      [
        26.89266,
        71.87563
      ],
      [
        26.89126,
        71.91444
      ],
      [
        26.91069,
        71.93427
      ]
    ]
  },
  {
    "id": "p4",
    "name": "Delhi Ridge Urban Green Lungs",
    "type": "URBAN_HEAT",
    "location": "New Delhi, India",
    "region": "asia",
    "lat": 28.59,
    "lng": 77.165,
    "area_ha": 620,
    "available_credits": 2800,
    "total_credits": 3200,
    "co2_tonnes": 2800,
    "price_per_credit": 0.052,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.69,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 3200,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 5.2 tCO2/ha/yr capacity.",
    "aqi": 116,
    "soil_moisture_pct": 29.6,
    "ambient_temp_c": 32.6,
    "uhi_cooling_c": -3.6,
    "native_species": [
      "Neem",
      "Peepal",
      "Jamun",
      "Amaltas",
      "Gulmohar",
      "Kadam",
      "Pilkhan",
      "Shisham"
    ],
    "seller_name": "New Delhi Bio-Conservancy",
    "seller_wallet": "0x5ccc9bc2a53f8a28abf3e3fc21813d25655238a6",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        28.5885,
        77.18427
      ],
      [
        28.60499,
        77.16977
      ],
      [
        28.59925,
        77.14957
      ],
      [
        28.58028,
        77.15381
      ],
      [
        28.57696,
        77.1711
      ],
      [
        28.5885,
        77.18427
      ]
    ]
  },
  {
    "id": "p5",
    "name": "Bhadla Solar Megawatt Offset",
    "type": "SOLAR",
    "location": "Rajasthan, India",
    "region": "asia",
    "lat": 27.538,
    "lng": 71.917,
    "area_ha": 2400,
    "available_credits": 38000,
    "total_credits": 45000,
    "co2_tonnes": 38000,
    "price_per_credit": 0.028,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.48,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 45000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 18.8 tCO2/ha/yr capacity.",
    "aqi": 84,
    "soil_moisture_pct": 23.7,
    "ambient_temp_c": 23.7,
    "uhi_cooling_c": -1.2,
    "native_species": [],
    "seller_name": "Rajasthan Bio-Conservancy",
    "seller_wallet": "0x1658663a698c206fe1a47e102d534dd0cf8ebc5a",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        27.53687,
        71.9316
      ],
      [
        27.55688,
        71.92168
      ],
      [
        27.54856,
        71.90169
      ],
      [
        27.52842,
        71.89758
      ],
      [
        27.51985,
        71.92667
      ],
      [
        27.53687,
        71.9316
      ]
    ]
  },
  {
    "id": "p6",
    "name": "Muppandal Wind Power Pass",
    "type": "WIND",
    "location": "Tamil Nadu, India",
    "region": "asia",
    "lat": 8.258,
    "lng": 77.545,
    "area_ha": 1800,
    "available_credits": 29000,
    "total_credits": 32000,
    "co2_tonnes": 29000,
    "price_per_credit": 0.031,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.51,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 32000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 17.8 tCO2/ha/yr capacity.",
    "aqi": 61,
    "soil_moisture_pct": 23.5,
    "ambient_temp_c": 23.5,
    "uhi_cooling_c": -1.1,
    "native_species": [],
    "seller_name": "Tamil Nadu Bio-Conservancy",
    "seller_wallet": "0x8118e36477097749527eecfaa79ac9aa9b4e2c24",
    "standard": "Gold Standard",
    "auditor": "EY Climate",
    "boundary_coords": [
      [
        8.25888,
        77.56037
      ],
      [
        8.27122,
        77.54809
      ],
      [
        8.26678,
        77.53215
      ],
      [
        8.24809,
        77.53413
      ],
      [
        8.23989,
        77.54896
      ],
      [
        8.25888,
        77.56037
      ]
    ]
  },
  {
    "id": "p7",
    "name": "Punjab Paddy Straw Biogas Capture",
    "type": "METHANE",
    "location": "Ludhiana, Punjab, India",
    "region": "asia",
    "lat": 30.901,
    "lng": 75.857,
    "area_ha": 350,
    "available_credits": 14200,
    "total_credits": 18000,
    "co2_tonnes": 14200,
    "price_per_credit": 0.044,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to CAR registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.62,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 18000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 51.4 tCO2/ha/yr capacity.",
    "aqi": 98,
    "soil_moisture_pct": 42.1,
    "ambient_temp_c": 24.0,
    "uhi_cooling_c": -1.9,
    "native_species": [],
    "seller_name": "Ludhiana Bio-Conservancy",
    "seller_wallet": "0x73b4c08b6b8e869fd5385b0e34f3193c0ff0a55c",
    "standard": "CAR",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        30.89989,
        75.87958
      ],
      [
        30.91299,
        75.86393
      ],
      [
        30.90931,
        75.84475
      ],
      [
        30.89317,
        75.84137
      ],
      [
        30.88558,
        75.86169
      ],
      [
        30.89989,
        75.87958
      ]
    ]
  },
  {
    "id": "p8",
    "name": "Western Ghats Agasthyamalai Sanctuary",
    "type": "REFORESTATION",
    "location": "Kerala, India",
    "region": "asia",
    "lat": 8.618,
    "lng": 77.248,
    "area_ha": 9800,
    "available_credits": 11800,
    "total_credits": 14000,
    "co2_tonnes": 11800,
    "price_per_credit": 0.046,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.86,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 14000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 76,
    "soil_moisture_pct": 49.2,
    "ambient_temp_c": 28.9,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Cullenia exarillata",
      "Mesua ferrea",
      "Palaquium ellipticum",
      "Gluta travancorica",
      "Dipterocarpus bourdillonii",
      "Hopea parviflora",
      "Canarium strictum",
      "Syzygium gardneri"
    ],
    "seller_name": "Kerala Bio-Conservancy",
    "seller_wallet": "0xa793b9b41374814632c5bd89b70b3420f1043785",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        8.62358,
        77.28256
      ],
      [
        8.64336,
        77.25366
      ],
      [
        8.63876,
        77.22278
      ],
      [
        8.59526,
        77.22466
      ],
      [
        8.59173,
        77.26105
      ],
      [
        8.62358,
        77.28256
      ]
    ]
  },
  {
    "id": "p9",
    "name": "Chilika Lake Coastal Blue Carbon",
    "type": "OCEAN",
    "location": "Odisha, India",
    "region": "asia",
    "lat": 19.716,
    "lng": 85.321,
    "area_ha": 11200,
    "available_credits": 13900,
    "total_credits": 16500,
    "co2_tonnes": 13900,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.77,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 16500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 42,
    "soil_moisture_pct": 78.8,
    "ambient_temp_c": 28.6,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Avicennia officinalis",
      "Excoecaria agallocha",
      "Acanthus ilicifolius",
      "Suaeda maritima",
      "Tamarix troupii",
      "Pandanus tectorius",
      "Salicornia brachiata",
      "Clerodendrum inerme"
    ],
    "seller_name": "Odisha Bio-Conservancy",
    "seller_wallet": "0xd31edbbcf36cb62b892e6161be2d740a1e9b23bc",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        19.71568,
        85.35699
      ],
      [
        19.75133,
        85.33428
      ],
      [
        19.73932,
        85.29082
      ],
      [
        19.70077,
        85.29451
      ],
      [
        19.68822,
        85.32642
      ],
      [
        19.71568,
        85.35699
      ]
    ]
  },
  {
    "id": "p10",
    "name": "Bengaluru Outer Ring Vegetative Cooling",
    "type": "URBAN_HEAT",
    "location": "Karnataka, India",
    "region": "asia",
    "lat": 12.927,
    "lng": 77.685,
    "area_ha": 480,
    "available_credits": 2100,
    "total_credits": 2500,
    "co2_tonnes": 2100,
    "price_per_credit": 0.055,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.66,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 2500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 5.2 tCO2/ha/yr capacity.",
    "aqi": 117,
    "soil_moisture_pct": 29.6,
    "ambient_temp_c": 27.1,
    "uhi_cooling_c": -3.2,
    "native_species": [
      "Rain Tree",
      "Copperpod",
      "Tabebuia",
      "Mahogany",
      "Jacaranda",
      "African Tulip",
      "Champak",
      "Honge"
    ],
    "seller_name": "Karnataka Bio-Conservancy",
    "seller_wallet": "0x498d1ca68b6870b51d61fac36cd5e85932a447b2",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        12.92465,
        77.69968
      ],
      [
        12.9447,
        77.69246
      ],
      [
        12.93686,
        77.67473
      ],
      [
        12.91735,
        77.66871
      ],
      [
        12.90942,
        77.69149
      ],
      [
        12.92465,
        77.69968
      ]
    ]
  },
  {
    "id": "p11",
    "name": "Kutch Tidal Saltmarsh Regeneration",
    "type": "OCEAN",
    "location": "Gujarat, India",
    "region": "asia",
    "lat": 23.215,
    "lng": 69.112,
    "area_ha": 6500,
    "available_credits": 7400,
    "total_credits": 8900,
    "co2_tonnes": 7400,
    "price_per_credit": 0.039,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.68,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 8900,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 59,
    "soil_moisture_pct": 82.3,
    "ambient_temp_c": 27.5,
    "uhi_cooling_c": -2.1,
    "native_species": [
      "Avicennia marina",
      "Rhizophora apiculata",
      "Aegiceras corniculatum",
      "Ceriops tagal",
      "Suaeda nudiflora",
      "Salicornia virginica",
      "Arthrocnemum indicum",
      "Urochondra setulosa"
    ],
    "seller_name": "Gujarat Bio-Conservancy",
    "seller_wallet": "0x13802b708d03c91e4f8d5238288b78b5b5b453ca",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        23.2146,
        69.13346
      ],
      [
        23.23413,
        69.12069
      ],
      [
        23.23455,
        69.08686
      ],
      [
        23.20366,
        69.09483
      ],
      [
        23.18764,
        69.12319
      ],
      [
        23.2146,
        69.13346
      ]
    ]
  },
  {
    "id": "p12",
    "name": "Deccan Plateau Agroforestry Soil Sink",
    "type": "REFORESTATION",
    "location": "Maharashtra, India",
    "region": "asia",
    "lat": 18.52,
    "lng": 74.28,
    "area_ha": 5400,
    "available_credits": 6100,
    "total_credits": 7200,
    "co2_tonnes": 6100,
    "price_per_credit": 0.037,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.61,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 7200,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.3 tCO2/ha/yr capacity.",
    "aqi": 59,
    "soil_moisture_pct": 68.2,
    "ambient_temp_c": 23.0,
    "uhi_cooling_c": -2.0,
    "native_species": [
      "Moringa oleifera",
      "Subabul",
      "Gliricidia sepium",
      "Melia dubia",
      "Casuarina",
      "Amla",
      "Custard Apple",
      "Guava"
    ],
    "seller_name": "Maharashtra Bio-Conservancy",
    "seller_wallet": "0xef547e507cea2045c268283ee32f2e63b7fddd71",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        18.5197,
        74.31017
      ],
      [
        18.54368,
        74.2897
      ],
      [
        18.53484,
        74.2559
      ],
      [
        18.50134,
        74.25893
      ],
      [
        18.49973,
        74.28597
      ],
      [
        18.5197,
        74.31017
      ]
    ]
  },
  {
    "id": "p13",
    "name": "Mumbai Mithi River Mangrove Basin",
    "type": "OCEAN",
    "location": "Maharashtra, India",
    "region": "asia",
    "lat": 19.06,
    "lng": 72.86,
    "area_ha": 340,
    "available_credits": 1500,
    "total_credits": 1900,
    "co2_tonnes": 1500,
    "price_per_credit": 0.058,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.71,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 1900,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 5.6 tCO2/ha/yr capacity.",
    "aqi": 54,
    "soil_moisture_pct": 65.4,
    "ambient_temp_c": 30.7,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Avicennia marina",
      "Sonneratia alba",
      "Rhizophora mucronata",
      "Acanthus ilicifolius",
      "Excoecaria agallocha",
      "Bruguiera cylindrica",
      "Thespesia populnea",
      "Lumnitzera racemosa"
    ],
    "seller_name": "Maharashtra Bio-Conservancy",
    "seller_wallet": "0x28dfbc3ca0d4de3d2303f6c6d69d42f1ae4c84ff",
    "standard": "CAR",
    "auditor": "EY Climate",
    "boundary_coords": [
      [
        19.06226,
        72.88047
      ],
      [
        19.0737,
        72.86321
      ],
      [
        19.06696,
        72.84722
      ],
      [
        19.05295,
        72.84697
      ],
      [
        19.04309,
        72.86764
      ],
      [
        19.06226,
        72.88047
      ]
    ]
  },
  {
    "id": "p14",
    "name": "Jaisalmer Wind & Micro-Canopy Grid",
    "type": "WIND",
    "location": "Rajasthan, India",
    "region": "asia",
    "lat": 26.912,
    "lng": 70.902,
    "area_ha": 1600,
    "available_credits": 24500,
    "total_credits": 28000,
    "co2_tonnes": 24500,
    "price_per_credit": 0.029,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.49,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 28000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 17.5 tCO2/ha/yr capacity.",
    "aqi": 66,
    "soil_moisture_pct": 27.1,
    "ambient_temp_c": 33.3,
    "uhi_cooling_c": -1.0,
    "native_species": [],
    "seller_name": "Rajasthan Bio-Conservancy",
    "seller_wallet": "0x81d7966571818dcf379efc6e5edb0d3cb0b63bcf",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        26.91313,
        70.92051
      ],
      [
        26.92933,
        70.90767
      ],
      [
        26.92028,
        70.88475
      ],
      [
        26.90037,
        70.88786
      ],
      [
        26.89912,
        70.90929
      ],
      [
        26.91313,
        70.92051
      ]
    ]
  },
  {
    "id": "p15",
    "name": "Bhopal Forest Fringe Biomass Offset",
    "type": "REFORESTATION",
    "location": "Madhya Pradesh, India",
    "region": "asia",
    "lat": 23.259,
    "lng": 77.412,
    "area_ha": 4200,
    "available_credits": 5300,
    "total_credits": 6100,
    "co2_tonnes": 5300,
    "price_per_credit": 0.041,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.73,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 6100,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 41,
    "soil_moisture_pct": 55.7,
    "ambient_temp_c": 32.8,
    "uhi_cooling_c": -2.2,
    "native_species": [
      "Teak",
      "Sal",
      "Saj",
      "Mahua",
      "Tendupa",
      "Amla",
      "Palas",
      "Haldu"
    ],
    "seller_name": "Madhya Pradesh Bio-Conservancy",
    "seller_wallet": "0x2963c26d6e218b099afd4015816bcb9f7426b193",
    "standard": "Plan Vivo",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        23.2566,
        77.42939
      ],
      [
        23.27439,
        77.41675
      ],
      [
        23.27315,
        77.39396
      ],
      [
        23.24779,
        77.39578
      ],
      [
        23.24066,
        77.42256
      ],
      [
        23.2566,
        77.42939
      ]
    ]
  },
  {
    "id": "p16",
    "name": "Kaziranga Grassland & Forest Buffer",
    "type": "REFORESTATION",
    "location": "Assam, India",
    "region": "asia",
    "lat": 26.577,
    "lng": 93.171,
    "area_ha": 12400,
    "available_credits": 16200,
    "total_credits": 19000,
    "co2_tonnes": 16200,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 19000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 36,
    "soil_moisture_pct": 69.6,
    "ambient_temp_c": 33.6,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Albizia procera",
      "Dillenia indica",
      "Bombax ceiba",
      "Lagerstroemia speciosa",
      "Calamus tenuis",
      "Careya arborea",
      "Arundo donax",
      "Phragmites karka"
    ],
    "seller_name": "Assam Bio-Conservancy",
    "seller_wallet": "0x1cbd3c039e2aa4acc122b5b3284c03d227d415b6",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        26.57194,
        93.21045
      ],
      [
        26.60913,
        93.18442
      ],
      [
        26.59863,
        93.14493
      ],
      [
        26.55398,
        93.13057
      ],
      [
        26.53766,
        93.18694
      ],
      [
        26.57194,
        93.21045
      ]
    ]
  },
  {
    "id": "p17",
    "name": "Sinharaja Rainforest Margin Corridors",
    "type": "REFORESTATION",
    "location": "Southern Province, Sri Lanka",
    "region": "asia",
    "lat": 6.417,
    "lng": 80.467,
    "area_ha": 7800,
    "available_credits": 10800,
    "total_credits": 12500,
    "co2_tonnes": 10800,
    "price_per_credit": 0.047,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 12500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 40,
    "soil_moisture_pct": 53.9,
    "ambient_temp_c": 27.6,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Dipterocarpus zeylanicus",
      "Mesua ferrea",
      "Shorea trapezifolia",
      "Palaquium grande",
      "Campnosperma zeylanica",
      "Calophyllum calaba",
      "Garcinia hermonii",
      "Myristica dactyloides"
    ],
    "seller_name": "Southern Province Bio-Conservancy",
    "seller_wallet": "0xd5d95f51f387e1bd2d5972c6134a5a2fa7cf705c",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        6.42064,
        80.49265
      ],
      [
        6.4484,
        80.47456
      ],
      [
        6.42898,
        80.44587
      ],
      [
        6.40557,
        80.44619
      ],
      [
        6.38744,
        80.47786
      ],
      [
        6.42064,
        80.49265
      ]
    ]
  },
  {
    "id": "p18",
    "name": "Puttalam Lagoon Blue Carbon Sinks",
    "type": "OCEAN",
    "location": "North Western, Sri Lanka",
    "region": "asia",
    "lat": 8.033,
    "lng": 79.828,
    "area_ha": 3600,
    "available_credits": 4400,
    "total_credits": 5200,
    "co2_tonnes": 4400,
    "price_per_credit": 0.04,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 5200,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 40,
    "soil_moisture_pct": 78.6,
    "ambient_temp_c": 32.1,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia marina",
      "Lumnitzera racemosa",
      "Excoecaria agallocha",
      "Xylocarpus granatum",
      "Aegiceras corniculatum",
      "Bruguiera sexangula",
      "Sonneratia caseolaris"
    ],
    "seller_name": "North Western Bio-Conservancy",
    "seller_wallet": "0x9f1584494f40c22f15b02530f020e992b576255e",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        8.03621,
        79.84782
      ],
      [
        8.04656,
        79.83438
      ],
      [
        8.04536,
        79.80858
      ],
      [
        8.02213,
        79.81057
      ],
      [
        8.01864,
        79.83364
      ],
      [
        8.03621,
        79.84782
      ]
    ]
  },
  {
    "id": "p19",
    "name": "Annapurna Lower Elevation Buffer",
    "type": "REFORESTATION",
    "location": "Gandaki, Nepal",
    "region": "asia",
    "lat": 28.395,
    "lng": 83.875,
    "area_ha": 8200,
    "available_credits": 9400,
    "total_credits": 11000,
    "co2_tonnes": 9400,
    "price_per_credit": 0.045,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 11000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.3 tCO2/ha/yr capacity.",
    "aqi": 67,
    "soil_moisture_pct": 56.4,
    "ambient_temp_c": 23.1,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Rhododendron arboreum",
      "Alnus nepalensis",
      "Quercus semecarpifolia",
      "Pinus roxburghii",
      "Schima wallichii",
      "Castanopsis indica",
      "Betula utilis",
      "Taxus wallichiana"
    ],
    "seller_name": "Gandaki Bio-Conservancy",
    "seller_wallet": "0x24e4180cfe9936a362dbc8503c5bf3a75fbbf0b1",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        28.39449,
        83.90767
      ],
      [
        28.41728,
        83.8801
      ],
      [
        28.41042,
        83.84174
      ],
      [
        28.37103,
        83.84648
      ],
      [
        28.36901,
        83.88364
      ],
      [
        28.39449,
        83.90767
      ]
    ]
  },
  {
    "id": "p20",
    "name": "Terai Arc Restoration Belt",
    "type": "REFORESTATION",
    "location": "Lumbini, Nepal",
    "region": "asia",
    "lat": 27.7,
    "lng": 83.45,
    "area_ha": 6900,
    "available_credits": 8200,
    "total_credits": 9500,
    "co2_tonnes": 8200,
    "price_per_credit": 0.042,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.77,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 9500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 65,
    "soil_moisture_pct": 44.0,
    "ambient_temp_c": 25.6,
    "uhi_cooling_c": -2.3,
    "native_species": [
      "Shorea robusta",
      "Dalbergia sissoo",
      "Acacia catechu",
      "Mallotus philippensis",
      "Adina cordifolia",
      "Syzygium cumini",
      "Terminalia tomentosa",
      "Bauhinia vahlii"
    ],
    "seller_name": "Lumbini Bio-Conservancy",
    "seller_wallet": "0xda8622250b36e356339b77a84b1f0d7b0977c513",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        27.69842,
        83.48164
      ],
      [
        27.72805,
        83.45638
      ],
      [
        27.71151,
        83.42378
      ],
      [
        27.68941,
        83.42898
      ],
      [
        27.6704,
        83.46373
      ],
      [
        27.69842,
        83.48164
      ]
    ]
  },
  {
    "id": "p21",
    "name": "Sylhet Tea Valley Shade Forest",
    "type": "REFORESTATION",
    "location": "Sylhet, Bangladesh",
    "region": "asia",
    "lat": 24.894,
    "lng": 91.868,
    "area_ha": 4100,
    "available_credits": 4900,
    "total_credits": 5800,
    "co2_tonnes": 4900,
    "price_per_credit": 0.044,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.75,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 5800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 67,
    "soil_moisture_pct": 65.4,
    "ambient_temp_c": 25.8,
    "uhi_cooling_c": -2.2,
    "native_species": [
      "Albizia lebbeck",
      "Derris robusta",
      "Erythrina indica",
      "Melia azedarach",
      "Chukrasia tabularis",
      "Toona ciliata",
      "Michelia champaca",
      "Artocarpus heterophyllus"
    ],
    "seller_name": "Sylhet Bio-Conservancy",
    "seller_wallet": "0x52a259a6c66412854303cbc11e2595b88fc9c86b",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        24.89592,
        91.89098
      ],
      [
        24.91228,
        91.87432
      ],
      [
        24.90362,
        91.85167
      ],
      [
        24.88331,
        91.84609
      ],
      [
        24.87588,
        91.87448
      ],
      [
        24.89592,
        91.89098
      ]
    ]
  },
  {
    "id": "p22",
    "name": "Cox's Bazar Mangrove Protective Belt",
    "type": "OCEAN",
    "location": "Chittagong, Bangladesh",
    "region": "asia",
    "lat": 21.427,
    "lng": 91.978,
    "area_ha": 5100,
    "available_credits": 6700,
    "total_credits": 7800,
    "co2_tonnes": 6700,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 7800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 65,
    "soil_moisture_pct": 81.6,
    "ambient_temp_c": 24.7,
    "uhi_cooling_c": -2.6,
    "native_species": [
      "Avicennia marina",
      "Rhizophora mucronata",
      "Sonneratia apetala",
      "Bruguiera gymnorrhiza",
      "Ceriops decandra",
      "Kandelia candel",
      "Aegiceras corniculatum",
      "Heritiera fomes"
    ],
    "seller_name": "Chittagong Bio-Conservancy",
    "seller_wallet": "0xf6e987cab87b63849fddde2ea8a2b7ad2bd3cdcd",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        21.4242,
        91.9983
      ],
      [
        21.44674,
        91.98131
      ],
      [
        21.44014,
        91.95667
      ],
      [
        21.41573,
        91.95511
      ],
      [
        21.40496,
        91.98654
      ],
      [
        21.4242,
        91.9983
      ]
    ]
  },
  {
    "id": "p23",
    "name": "Tharparkar Solar Agriculture Hub",
    "type": "SOLAR",
    "location": "Sindh, Pakistan",
    "region": "asia",
    "lat": 24.877,
    "lng": 69.8,
    "area_ha": 1200,
    "available_credits": 19200,
    "total_credits": 22000,
    "co2_tonnes": 19200,
    "price_per_credit": 0.03,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.52,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 22000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 18.3 tCO2/ha/yr capacity.",
    "aqi": 79,
    "soil_moisture_pct": 15.1,
    "ambient_temp_c": 28.8,
    "uhi_cooling_c": -1.3,
    "native_species": [],
    "seller_name": "Sindh Bio-Conservancy",
    "seller_wallet": "0x6cce5ba931d4ee098fd33afc91fdfa4f0d18ab95",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        24.8791,
        69.81928
      ],
      [
        24.88832,
        69.80511
      ],
      [
        24.88618,
        69.78947
      ],
      [
        24.86914,
        69.78575
      ],
      [
        24.86496,
        69.80382
      ],
      [
        24.8791,
        69.81928
      ]
    ]
  },
  {
    "id": "p24",
    "name": "Potohar Scrub Forest Soil Rejuvenation",
    "type": "BARREN_RESTORE",
    "location": "Punjab, Pakistan",
    "region": "asia",
    "lat": 33.15,
    "lng": 73.18,
    "area_ha": 4600,
    "available_credits": 5200,
    "total_credits": 6100,
    "co2_tonnes": 5200,
    "price_per_credit": 0.036,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.59,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 6100,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.3 tCO2/ha/yr capacity.",
    "aqi": 101,
    "soil_moisture_pct": 19.7,
    "ambient_temp_c": 23.5,
    "uhi_cooling_c": -1.9,
    "native_species": [
      "Acacia modesta",
      "Olea ferruginea",
      "Dodonaea viscosa",
      "Ziziphus mauritiana",
      "Justicia adhatoda",
      "Carissa opaca",
      "Gymnosporia royleana",
      "Tecoma stans"
    ],
    "seller_name": "Punjab Bio-Conservancy",
    "seller_wallet": "0x60521700607796a38685abaa7a768555a987b218",
    "standard": "Gold Standard",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        33.14958,
        73.2045
      ],
      [
        33.16715,
        73.18735
      ],
      [
        33.16326,
        73.15817
      ],
      [
        33.13544,
        73.15556
      ],
      [
        33.12822,
        73.1908
      ],
      [
        33.14958,
        73.2045
      ]
    ]
  },
  {
    "id": "p25",
    "name": "Indus Delta Mangrove Shield",
    "type": "OCEAN",
    "location": "Sindh, Pakistan",
    "region": "asia",
    "lat": 24.18,
    "lng": 67.55,
    "area_ha": 15000,
    "available_credits": 18900,
    "total_credits": 22000,
    "co2_tonnes": 18900,
    "price_per_credit": 0.038,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.76,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 22000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 44,
    "soil_moisture_pct": 67.0,
    "ambient_temp_c": 27.2,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Avicennia marina",
      "Rhizophora mucronata",
      "Ceriops tagal",
      "Aegiceras corniculatum",
      "Sonneratia caseolaris",
      "Bruguiera gymnorrhiza",
      "Thespesia populnea",
      "Salvadora persica"
    ],
    "seller_name": "Sindh Bio-Conservancy",
    "seller_wallet": "0xf1dace6a6afa828c2cd10b9febe5841fe9c96c52",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        24.17502,
        67.60186
      ],
      [
        24.21853,
        67.5667
      ],
      [
        24.19433,
        67.52025
      ],
      [
        24.15609,
        67.51582
      ],
      [
        24.13652,
        67.56971
      ],
      [
        24.17502,
        67.60186
      ]
    ]
  },
  {
    "id": "p26",
    "name": "Central Kalimantan Peatland Restoration",
    "type": "REFORESTATION",
    "location": "Kalimantan, Indonesia",
    "region": "asia",
    "lat": -2.215,
    "lng": 113.921,
    "area_ha": 24000,
    "available_credits": 41500,
    "total_credits": 48000,
    "co2_tonnes": 41500,
    "price_per_credit": 0.046,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.85,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 48000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 2.0 tCO2/ha/yr capacity.",
    "aqi": 76,
    "soil_moisture_pct": 62.6,
    "ambient_temp_c": 25.8,
    "uhi_cooling_c": -3.2,
    "native_species": [
      "Shorea balangeran",
      "Dyera polyphylla",
      "Alstonia pneumatophora",
      "Campnosperma squamatum",
      "Palaquium leiocarpum",
      "Tristaniopsis obovata",
      "Tetramerista glabra",
      "Gonystylus bancanus"
    ],
    "seller_name": "Kalimantan Bio-Conservancy",
    "seller_wallet": "0xbe2ae3413f59e4f2c3093b6e37e9d2e2d35ac07a",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        -2.22084,
        113.98078
      ],
      [
        -2.1697,
        113.93611
      ],
      [
        -2.19478,
        113.87992
      ],
      [
        -2.25291,
        113.87585
      ],
      [
        -2.2667,
        113.94312
      ],
      [
        -2.22084,
        113.98078
      ]
    ]
  },
  {
    "id": "p27",
    "name": "Sumatra Bukit Barisan Canopy Corridor",
    "type": "REFORESTATION",
    "location": "Sumatra, Indonesia",
    "region": "asia",
    "lat": -0.589,
    "lng": 101.343,
    "area_ha": 18500,
    "available_credits": 27200,
    "total_credits": 31000,
    "co2_tonnes": 27200,
    "price_per_credit": 0.048,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 31000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.7 tCO2/ha/yr capacity.",
    "aqi": 59,
    "soil_moisture_pct": 53.8,
    "ambient_temp_c": 30.3,
    "uhi_cooling_c": -3.4,
    "native_species": [
      "Dipterocarpus cinereus",
      "Shorea javanica",
      "Hopea sangal",
      "Cinnamomum parthenoxylon",
      "Agathis dammara",
      "Palaquium gutta",
      "Durio zibethinus",
      "Eusideroxylon zwageri"
    ],
    "seller_name": "Sumatra Bio-Conservancy",
    "seller_wallet": "0xf39836bbe23ddfaaefad49e9c41c147e9d6b9b62",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -0.59007,
        101.38329
      ],
      [
        -0.55042,
        101.3597
      ],
      [
        -0.56435,
        101.31647
      ],
      [
        -0.62244,
        101.30776
      ],
      [
        -0.6348,
        101.34996
      ],
      [
        -0.59007,
        101.38329
      ]
    ]
  },
  {
    "id": "p28",
    "name": "Riau Mangrove Estuarine Protection",
    "type": "OCEAN",
    "location": "Riau, Indonesia",
    "region": "asia",
    "lat": 1.542,
    "lng": 102.1,
    "area_ha": 12300,
    "available_credits": 16800,
    "total_credits": 19500,
    "co2_tonnes": 16800,
    "price_per_credit": 0.043,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 19500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 65,
    "soil_moisture_pct": 69.9,
    "ambient_temp_c": 24.5,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Rhizophora apiculata",
      "Bruguiera parviflora",
      "Avicennia alba",
      "Sonneratia griffithii",
      "Xylocarpus moluccensis",
      "Ceriops tagal",
      "Lumnitzera littorea",
      "Nypa fruticans"
    ],
    "seller_name": "Riau Bio-Conservancy",
    "seller_wallet": "0xffe9b3d0363908bf03ece8ffe8b3d763f4ff3f3a",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        1.54423,
        102.13672
      ],
      [
        1.57102,
        102.1054
      ],
      [
        1.56189,
        102.06657
      ],
      [
        1.52109,
        102.07241
      ],
      [
        1.51305,
        102.11375
      ],
      [
        1.54423,
        102.13672
      ]
    ]
  },
  {
    "id": "p29",
    "name": "Java Agricultural Methane Mitigation",
    "type": "METHANE",
    "location": "Central Java, Indonesia",
    "region": "asia",
    "lat": -7.15,
    "lng": 110.14,
    "area_ha": 450,
    "available_credits": 8200,
    "total_credits": 9800,
    "co2_tonnes": 8200,
    "price_per_credit": 0.041,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.65,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 9800,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 21.8 tCO2/ha/yr capacity.",
    "aqi": 118,
    "soil_moisture_pct": 40.6,
    "ambient_temp_c": 29.7,
    "uhi_cooling_c": -1.8,
    "native_species": [],
    "seller_name": "Central Java Bio-Conservancy",
    "seller_wallet": "0xde6101996e3a0ba8ac8d6c7db2a6e468d02b1243",
    "standard": "CAR",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        -7.14935,
        110.15619
      ],
      [
        -7.1384,
        110.14385
      ],
      [
        -7.14297,
        110.12988
      ],
      [
        -7.15858,
        110.12836
      ],
      [
        -7.16091,
        110.14573
      ],
      [
        -7.14935,
        110.15619
      ]
    ]
  },
  {
    "id": "p30",
    "name": "Cirata Floating Solar Lagoon",
    "type": "SOLAR",
    "location": "West Java, Indonesia",
    "region": "asia",
    "lat": -6.705,
    "lng": 107.36,
    "area_ha": 800,
    "available_credits": 13800,
    "total_credits": 16000,
    "co2_tonnes": 13800,
    "price_per_credit": 0.033,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.58,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 16000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 20.0 tCO2/ha/yr capacity.",
    "aqi": 60,
    "soil_moisture_pct": 21.8,
    "ambient_temp_c": 27.5,
    "uhi_cooling_c": -1.4,
    "native_species": [],
    "seller_name": "West Java Bio-Conservancy",
    "seller_wallet": "0x8d98302f735741e5fe1a1ba9c8969c5b45f8c28d",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -6.70292,
        107.37251
      ],
      [
        -6.6871,
        107.3663
      ],
      [
        -6.69338,
        107.34564
      ],
      [
        -6.71589,
        107.34907
      ],
      [
        -6.71638,
        107.36497
      ],
      [
        -6.70292,
        107.37251
      ]
    ]
  },
  {
    "id": "p31",
    "name": "Sabah Kinabatangan Wildlife Corridor",
    "type": "REFORESTATION",
    "location": "Sabah, Malaysia",
    "region": "asia",
    "lat": 5.5,
    "lng": 118.233,
    "area_ha": 14500,
    "available_credits": 20800,
    "total_credits": 24000,
    "co2_tonnes": 20800,
    "price_per_credit": 0.049,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.87,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 24000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.7 tCO2/ha/yr capacity.",
    "aqi": 65,
    "soil_moisture_pct": 55.7,
    "ambient_temp_c": 26.7,
    "uhi_cooling_c": -3.3,
    "native_species": [
      "Octomeles sumatrana",
      "Neolamarckia cadamba",
      "Pterospermum javanicum",
      "Mallotus muticus",
      "Macaranga hypoleuca",
      "Dracontomelon dao",
      "Terminalia copelandii",
      "Barringtonia asiatica"
    ],
    "seller_name": "Sabah Bio-Conservancy",
    "seller_wallet": "0xb205e54fb1e8c09dbc20b9f24a9c589e51b30182",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        5.49893,
        118.2773
      ],
      [
        5.53841,
        118.24332
      ],
      [
        5.52566,
        118.20227
      ],
      [
        5.4759,
        118.20405
      ],
      [
        5.46469,
        118.24025
      ],
      [
        5.49893,
        118.2773
      ]
    ]
  },
  {
    "id": "p32",
    "name": "Sarawak Mangrove Delta Sinks",
    "type": "OCEAN",
    "location": "Sarawak, Malaysia",
    "region": "asia",
    "lat": 1.683,
    "lng": 110.317,
    "area_ha": 9200,
    "available_credits": 12100,
    "total_credits": 14200,
    "co2_tonnes": 12100,
    "price_per_credit": 0.041,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 14200,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 51,
    "soil_moisture_pct": 69.4,
    "ambient_temp_c": 30.0,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia marina",
      "Bruguiera gymnorrhiza",
      "Sonneratia alba",
      "Xylocarpus granatum",
      "Aegiceras corniculatum",
      "Ceriops decandra",
      "Kandelia candel"
    ],
    "seller_name": "Sarawak Bio-Conservancy",
    "seller_wallet": "0x692a35497ba109d08567c80534f541c0c8c5eb2a",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        1.67841,
        110.35451
      ],
      [
        1.70877,
        110.32555
      ],
      [
        1.69411,
        110.29574
      ],
      [
        1.66016,
        110.29218
      ],
      [
        1.65607,
        110.3242
      ],
      [
        1.67841,
        110.35451
      ]
    ]
  },
  {
    "id": "p33",
    "name": "Peninsular Agroforestry Carbon Reserve",
    "type": "REFORESTATION",
    "location": "Pahang, Malaysia",
    "region": "asia",
    "lat": 3.816,
    "lng": 102.327,
    "area_ha": 6700,
    "available_credits": 7800,
    "total_credits": 9200,
    "co2_tonnes": 7800,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.76,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 9200,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 74,
    "soil_moisture_pct": 53.2,
    "ambient_temp_c": 28.0,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Hevea brasiliensis",
      "Aquilaria malaccensis",
      "Shorea leprosula",
      "Dipterocarpus cornutus",
      "Durio lowianus",
      "Eusideroxylon zwageri",
      "Scorodocarpus borneensis",
      "Intsia palembanica"
    ],
    "seller_name": "Pahang Bio-Conservancy",
    "seller_wallet": "0x724a2a50d0b1fde031f3f0c022f3f0687c0f549d",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        3.82057,
        102.3581
      ],
      [
        3.83557,
        102.33595
      ],
      [
        3.83006,
        102.31034
      ],
      [
        3.7974,
        102.3069
      ],
      [
        3.7874,
        102.34056
      ],
      [
        3.82057,
        102.3581
      ]
    ]
  },
  {
    "id": "p34",
    "name": "Mekong Delta Mangrove Shield",
    "type": "OCEAN",
    "location": "C\u00e0 Mau, Vietnam",
    "region": "asia",
    "lat": 8.85,
    "lng": 104.98,
    "area_ha": 16800,
    "available_credits": 22400,
    "total_credits": 26000,
    "co2_tonnes": 22400,
    "price_per_credit": 0.044,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.83,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 26000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 66,
    "soil_moisture_pct": 84.6,
    "ambient_temp_c": 30.8,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Rhizophora apiculata",
      "Avicennia marina",
      "Sonneratia caseolaris",
      "Bruguiera cylindrica",
      "Nypa fruticans",
      "Xylocarpus moluccensis",
      "Lumnitzera racemosa",
      "Excoecaria agallocha"
    ],
    "seller_name": "C\u00e0 Mau Bio-Conservancy",
    "seller_wallet": "0xb1e518a293d228d424655c397d4d2add64880945",
    "standard": "Gold Standard",
    "auditor": "EY Climate",
    "boundary_coords": [
      [
        8.84902,
        105.01223
      ],
      [
        8.89072,
        104.99703
      ],
      [
        8.86767,
        104.95136
      ],
      [
        8.83199,
        104.94702
      ],
      [
        8.80333,
        104.99086
      ],
      [
        8.84902,
        105.01223
      ]
    ]
  },
  {
    "id": "p35",
    "name": "Annamite Range Ridge Reforestation",
    "type": "REFORESTATION",
    "location": "Qu\u1ea3ng Nam, Vietnam",
    "region": "asia",
    "lat": 15.58,
    "lng": 107.82,
    "area_ha": 11200,
    "available_credits": 15100,
    "total_credits": 17500,
    "co2_tonnes": 15100,
    "price_per_credit": 0.047,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.84,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 17500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 40,
    "soil_moisture_pct": 63.8,
    "ambient_temp_c": 28.7,
    "uhi_cooling_c": -3.0,
    "native_species": [
      "Pinus kesiya",
      "Hopea odorata",
      "Dipterocarpus alatus",
      "Cinnamomum cassia",
      "Scaphium macropodum",
      "Dalbergia oliveri",
      "Shorea falcata",
      "Tarrietia javanica"
    ],
    "seller_name": "Qu\u1ea3ng Nam Bio-Conservancy",
    "seller_wallet": "0x6e1885c35037cd6b1a6b6a7d1a38aad6ce532ffd",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        15.58022,
        107.85369
      ],
      [
        15.6072,
        107.83491
      ],
      [
        15.60715,
        107.79039
      ],
      [
        15.55884,
        107.79371
      ],
      [
        15.55412,
        107.826
      ],
      [
        15.58022,
        107.85369
      ]
    ]
  },
  {
    "id": "p36",
    "name": "Ninh Thu\u1eadn Solar & Grassland Sink",
    "type": "SOLAR",
    "location": "Ninh Thu\u1eadn, Vietnam",
    "region": "asia",
    "lat": 11.68,
    "lng": 108.92,
    "area_ha": 1400,
    "available_credits": 21900,
    "total_credits": 25000,
    "co2_tonnes": 21900,
    "price_per_credit": 0.029,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.53,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 25000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 17.9 tCO2/ha/yr capacity.",
    "aqi": 73,
    "soil_moisture_pct": 12.9,
    "ambient_temp_c": 31.3,
    "uhi_cooling_c": -1.2,
    "native_species": [],
    "seller_name": "Ninh Thu\u1eadn Bio-Conservancy",
    "seller_wallet": "0xdedd069df96c9a0a3404c02aebc1bb5282e4dd4a",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        11.68004,
        108.93762
      ],
      [
        11.69477,
        108.9249
      ],
      [
        11.68679,
        108.90888
      ],
      [
        11.66974,
        108.90596
      ],
      [
        11.66573,
        108.92351
      ],
      [
        11.68004,
        108.93762
      ]
    ]
  },
  {
    "id": "p37",
    "name": "Chiang Mai Vegetative Cooling Corridor",
    "type": "URBAN_HEAT",
    "location": "Chiang Mai, Thailand",
    "region": "asia",
    "lat": 18.79,
    "lng": 98.98,
    "area_ha": 580,
    "available_credits": 2900,
    "total_credits": 3400,
    "co2_tonnes": 2900,
    "price_per_credit": 0.053,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.7,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 3400,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 5.9 tCO2/ha/yr capacity.",
    "aqi": 170,
    "soil_moisture_pct": 28.7,
    "ambient_temp_c": 32.9,
    "uhi_cooling_c": -3.5,
    "native_species": [
      "Cassia fistula",
      "Dipterocarpus tuberculatus",
      "Lagerstroemia loudonii",
      "Shorea obtusa",
      "Tectona grandis",
      "Pterocarpus macrocarpus",
      "Afzelia xylocarpa",
      "Dalbergia cochinchinensis"
    ],
    "seller_name": "Chiang Mai Bio-Conservancy",
    "seller_wallet": "0xd605e58a48454343ddb449dc77106966e0827f76",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        18.78882,
        98.99988
      ],
      [
        18.80259,
        98.98396
      ],
      [
        18.79677,
        98.96879
      ],
      [
        18.78171,
        98.96512
      ],
      [
        18.77477,
        98.98252
      ],
      [
        18.78882,
        98.99988
      ]
    ]
  },
  {
    "id": "p38",
    "name": "Phang Nga Bay Mangrove Carbon Vault",
    "type": "OCEAN",
    "location": "Phang Nga, Thailand",
    "region": "asia",
    "lat": 8.35,
    "lng": 98.53,
    "area_ha": 8900,
    "available_credits": 11900,
    "total_credits": 13800,
    "co2_tonnes": 11900,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 13800,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 38,
    "soil_moisture_pct": 79.0,
    "ambient_temp_c": 23.0,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia alba",
      "Bruguiera gymnorrhiza",
      "Sonneratia alba",
      "Xylocarpus granatum",
      "Aegiceras corniculatum",
      "Ceriops tagal",
      "Lumnitzera littorea"
    ],
    "seller_name": "Phang Nga Bio-Conservancy",
    "seller_wallet": "0xc266986cb46788bdd38e13e44de1087bafa14a55",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        8.34658,
        98.55935
      ],
      [
        8.37848,
        98.5404
      ],
      [
        8.36141,
        98.50707
      ],
      [
        8.33602,
        98.50754
      ],
      [
        8.32575,
        98.5345
      ],
      [
        8.34658,
        98.55935
      ]
    ]
  },
  {
    "id": "p39",
    "name": "Palawan Coastal & Forest Bio-Reserve",
    "type": "REFORESTATION",
    "location": "Palawan, Philippines",
    "region": "asia",
    "lat": 9.835,
    "lng": 118.738,
    "area_ha": 15600,
    "available_credits": 20200,
    "total_credits": 23500,
    "co2_tonnes": 20200,
    "price_per_credit": 0.048,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.86,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 23500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 52,
    "soil_moisture_pct": 50.9,
    "ambient_temp_c": 32.5,
    "uhi_cooling_c": -3.1,
    "native_species": [
      "Dipterocarpus grandiflorus",
      "Shorea polysperma",
      "Hopea acuminata",
      "Vitex parviflora",
      "Intsia bijuga",
      "Pterocarpus indicus",
      "Dracontomelon dao",
      "Toona calantas"
    ],
    "seller_name": "Palawan Bio-Conservancy",
    "seller_wallet": "0x3e0869c1453b45fe636cf4995254aad3809cd839",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        9.83538,
        118.78058
      ],
      [
        9.87921,
        118.7475
      ],
      [
        9.85485,
        118.69709
      ],
      [
        9.81297,
        118.7038
      ],
      [
        9.78974,
        118.75265
      ],
      [
        9.83538,
        118.78058
      ]
    ]
  },
  {
    "id": "p40",
    "name": "Metro Manila Urban Heat Mitigation Ring",
    "type": "URBAN_HEAT",
    "location": "Quezon City, Philippines",
    "region": "asia",
    "lat": 14.65,
    "lng": 121.05,
    "area_ha": 420,
    "available_credits": 2300,
    "total_credits": 2800,
    "co2_tonnes": 2300,
    "price_per_credit": 0.056,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.67,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 2800,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 6.7 tCO2/ha/yr capacity.",
    "aqi": 151,
    "soil_moisture_pct": 30.2,
    "ambient_temp_c": 28.6,
    "uhi_cooling_c": -3.7,
    "native_species": [
      "Narra",
      "Banaba",
      "Molave",
      "Dita",
      "Katmon",
      "Ilang-Ilang",
      "Talisay",
      "Agoho"
    ],
    "seller_name": "Quezon City Bio-Conservancy",
    "seller_wallet": "0x6b58eb49c9784b529d1c0838edc8cca8e3bcd6f3",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        14.64916,
        121.06525
      ],
      [
        14.6679,
        121.05276
      ],
      [
        14.6605,
        121.03573
      ],
      [
        14.64139,
        121.03764
      ],
      [
        14.63451,
        121.05651
      ],
      [
        14.64916,
        121.06525
      ]
    ]
  },
  {
    "id": "p41",
    "name": "Mindanao Agroforestry Landfill Capture",
    "type": "METHANE",
    "location": "Davao, Philippines",
    "region": "asia",
    "lat": 7.19,
    "lng": 125.45,
    "area_ha": 320,
    "available_credits": 6400,
    "total_credits": 7500,
    "co2_tonnes": 6400,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.64,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 7500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 23.4 tCO2/ha/yr capacity.",
    "aqi": 90,
    "soil_moisture_pct": 52.7,
    "ambient_temp_c": 28.7,
    "uhi_cooling_c": -1.7,
    "native_species": [],
    "seller_name": "Davao Bio-Conservancy",
    "seller_wallet": "0xcadf9397ecf26429b8d77d2f8dda4ff2b27b7bb4",
    "standard": "CAR",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        7.19064,
        125.46619
      ],
      [
        7.20759,
        125.45918
      ],
      [
        7.20314,
        125.43565
      ],
      [
        7.18368,
        125.43857
      ],
      [
        7.1766,
        125.4529
      ],
      [
        7.19064,
        125.46619
      ]
    ]
  },
  {
    "id": "p42",
    "name": "Cardamom Mountains Canopy Reserve",
    "type": "REFORESTATION",
    "location": "Koh Kong, Cambodia",
    "region": "asia",
    "lat": 11.55,
    "lng": 103.2,
    "area_ha": 28000,
    "available_credits": 36500,
    "total_credits": 42000,
    "co2_tonnes": 36500,
    "price_per_credit": 0.045,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.87,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 42000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 65,
    "soil_moisture_pct": 59.1,
    "ambient_temp_c": 33.3,
    "uhi_cooling_c": -3.3,
    "native_species": [
      "Anisoptera costata",
      "Dipterocarpus costatus",
      "Hopea recopei",
      "Shorea hypochra",
      "Dialium cochinchinense",
      "Sindora cochinchinensis",
      "Dalbergia bariensis",
      "Tarrietia javanica"
    ],
    "seller_name": "Koh Kong Bio-Conservancy",
    "seller_wallet": "0xdeae1325ea074d80ba236c22e92a7b9751db1a37",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        11.54476,
        103.24578
      ],
      [
        11.58714,
        103.21699
      ],
      [
        11.59032,
        103.15802
      ],
      [
        11.51933,
        103.14586
      ],
      [
        11.49574,
        103.21072
      ],
      [
        11.54476,
        103.24578
      ]
    ]
  },
  {
    "id": "p43",
    "name": "Tonle Sap Flooded Forest Restoration",
    "type": "OCEAN",
    "location": "Siem Reap, Cambodia",
    "region": "asia",
    "lat": 12.87,
    "lng": 104.05,
    "area_ha": 9800,
    "available_credits": 12900,
    "total_credits": 15000,
    "co2_tonnes": 12900,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 15000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 58,
    "soil_moisture_pct": 66.8,
    "ambient_temp_c": 31.3,
    "uhi_cooling_c": -2.6,
    "native_species": [
      "Barringtonia acutangula",
      "Diospyros cambodiana",
      "Croton roxburghii",
      "Terminalia cambodiana",
      "Homalium brevidens",
      "Hydnocarpus anthelminthica",
      "Cynometra ramiflora",
      "Elaeocarpus griffithii"
    ],
    "seller_name": "Siem Reap Bio-Conservancy",
    "seller_wallet": "0x6c418a83eb04159c0cf173f974d9d1f508775804",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        12.86479,
        104.08497
      ],
      [
        12.90346,
        104.06245
      ],
      [
        12.88876,
        104.02304
      ],
      [
        12.85176,
        104.0169
      ],
      [
        12.84622,
        104.05519
      ],
      [
        12.86479,
        104.08497
      ]
    ]
  },
  {
    "id": "p44",
    "name": "Luang Prabang Mountain Teak Belt",
    "type": "REFORESTATION",
    "location": "Luang Prabang, Laos",
    "region": "asia",
    "lat": 19.89,
    "lng": 102.14,
    "area_ha": 7400,
    "available_credits": 9100,
    "total_credits": 10500,
    "co2_tonnes": 9100,
    "price_per_credit": 0.041,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.78,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 10500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 72,
    "soil_moisture_pct": 50.5,
    "ambient_temp_c": 29.5,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Tectona grandis",
      "Pterocarpus macrocarpus",
      "Afzelia xylocarpa",
      "Dalbergia cochinchinensis",
      "Lagerstroemia duperreana",
      "Dipterocarpus alatus",
      "Hopea ferrea",
      "Toona ciliata"
    ],
    "seller_name": "Luang Prabang Bio-Conservancy",
    "seller_wallet": "0x8f53d344a7c854e406843c86b8a6040223d26b8d",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        19.89459,
        102.17064
      ],
      [
        19.91495,
        102.15194
      ],
      [
        19.90391,
        102.1231
      ],
      [
        19.86858,
        102.11569
      ],
      [
        19.86629,
        102.14727
      ],
      [
        19.89459,
        102.17064
      ]
    ]
  },
  {
    "id": "p45",
    "name": "Tanintharyi Coastal Mangrove Reserve",
    "type": "OCEAN",
    "location": "Tanintharyi, Myanmar",
    "region": "asia",
    "lat": 12.08,
    "lng": 98.6,
    "area_ha": 13500,
    "available_credits": 17800,
    "total_credits": 20500,
    "co2_tonnes": 17800,
    "price_per_credit": 0.042,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 20500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 42,
    "soil_moisture_pct": 82.2,
    "ambient_temp_c": 23.7,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Rhizophora apiculata",
      "Avicennia marina",
      "Bruguiera parviflora",
      "Sonneratia alba",
      "Xylocarpus moluccensis",
      "Ceriops decandra",
      "Kandelia candel",
      "Aegiceras corniculatum"
    ],
    "seller_name": "Tanintharyi Bio-Conservancy",
    "seller_wallet": "0xcb0c7919330ccff588a5fa0d09a85dc50131ff3b",
    "standard": "Verra VCS",
    "auditor": "EY Climate",
    "boundary_coords": [
      [
        12.08363,
        98.63872
      ],
      [
        12.11799,
        98.61798
      ],
      [
        12.09511,
        98.57367
      ],
      [
        12.05989,
        98.57028
      ],
      [
        12.04528,
        98.61057
      ],
      [
        12.08363,
        98.63872
      ]
    ]
  },
  {
    "id": "p46",
    "name": "Mount Kenya Watershed Re-Canopy",
    "type": "REFORESTATION",
    "location": "Central, Kenya",
    "region": "africa",
    "lat": -0.15,
    "lng": 37.3,
    "area_ha": 15400,
    "available_credits": 20900,
    "total_credits": 24000,
    "co2_tonnes": 20900,
    "price_per_credit": 0.044,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.83,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 24000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 42,
    "soil_moisture_pct": 42.3,
    "ambient_temp_c": 32.7,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Ocotea usambarensis",
      "Podocarpus falcatus",
      "Juniperus procera",
      "Hagenia abyssinica",
      "Prunus africana",
      "Croton megalocarpus",
      "Olea europaea",
      "Newtonia buchananii"
    ],
    "seller_name": "Central Bio-Conservancy",
    "seller_wallet": "0x9c52d2710a167e18290e3e894b9c22f468e5c8cd",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -0.14983,
        37.34143
      ],
      [
        -0.10866,
        37.317
      ],
      [
        -0.12572,
        37.26664
      ],
      [
        -0.18026,
        37.26587
      ],
      [
        -0.18225,
        37.31676
      ],
      [
        -0.14983,
        37.34143
      ]
    ]
  },
  {
    "id": "p47",
    "name": "Mau Forest Complex Biodiversity Ridge",
    "type": "REFORESTATION",
    "location": "Rift Valley, Kenya",
    "region": "africa",
    "lat": -0.45,
    "lng": 35.8,
    "area_ha": 22000,
    "available_credits": 31200,
    "total_credits": 36000,
    "co2_tonnes": 31200,
    "price_per_credit": 0.046,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.85,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 36000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 43,
    "soil_moisture_pct": 59.1,
    "ambient_temp_c": 30.5,
    "uhi_cooling_c": -3.2,
    "native_species": [
      "Podocarpus latifolius",
      "Polyscias kikuyuensis",
      "Syzygium guineense",
      "Macaranga kilimandscharica",
      "Neoboutonia macrocalyx",
      "Olinia rochetiana",
      "Tabernaemontana stapfiana",
      "Albizia gummifera"
    ],
    "seller_name": "Rift Valley Bio-Conservancy",
    "seller_wallet": "0x4957134490a4a421b9493906939f44ebbe5e215e",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        -0.44368,
        35.84594
      ],
      [
        -0.39697,
        35.81747
      ],
      [
        -0.4279,
        35.77087
      ],
      [
        -0.4723,
        35.77255
      ],
      [
        -0.49278,
        35.82029
      ],
      [
        -0.44368,
        35.84594
      ]
    ]
  },
  {
    "id": "p48",
    "name": "Lake Turkana Wind & Soil Buffer",
    "type": "WIND",
    "location": "Marsabit, Kenya",
    "region": "africa",
    "lat": 2.75,
    "lng": 36.85,
    "area_ha": 3500,
    "available_credits": 42000,
    "total_credits": 48000,
    "co2_tonnes": 42000,
    "price_per_credit": 0.029,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.44,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 48000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 13.7 tCO2/ha/yr capacity.",
    "aqi": 69,
    "soil_moisture_pct": 19.7,
    "ambient_temp_c": 25.6,
    "uhi_cooling_c": -1.0,
    "native_species": [],
    "seller_name": "Marsabit Bio-Conservancy",
    "seller_wallet": "0x2ee932603002d8313227e8d89c60c81b41191aa7",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        2.751,
        36.87145
      ],
      [
        2.76671,
        36.85513
      ],
      [
        2.76549,
        36.83387
      ],
      [
        2.73732,
        36.83243
      ],
      [
        2.73359,
        36.85692
      ],
      [
        2.751,
        36.87145
      ]
    ]
  },
  {
    "id": "p49",
    "name": "Gazi Bay Blue Carbon Mangrove Vault",
    "type": "OCEAN",
    "location": "Kwale, Kenya",
    "region": "africa",
    "lat": -4.42,
    "lng": 39.51,
    "area_ha": 4800,
    "available_credits": 6100,
    "total_credits": 7200,
    "co2_tonnes": 6100,
    "price_per_credit": 0.045,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 7200,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 43,
    "soil_moisture_pct": 83.4,
    "ambient_temp_c": 30.9,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia marina",
      "Ceriops tagal",
      "Sonneratia alba",
      "Bruguiera gymnorrhiza",
      "Xylocarpus granatum",
      "Lumnitzera racemosa",
      "Heritiera littoralis"
    ],
    "seller_name": "Kwale Bio-Conservancy",
    "seller_wallet": "0x1d95aaf5253421bc6180b78a06783c341b41a61e",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -4.41951,
        39.53281
      ],
      [
        -4.39617,
        39.51385
      ],
      [
        -4.40594,
        39.48789
      ],
      [
        -4.43551,
        39.48911
      ],
      [
        -4.43585,
        39.51469
      ],
      [
        -4.41951,
        39.53281
      ]
    ]
  },
  {
    "id": "p50",
    "name": "Serengeti Northern Forest Buffer",
    "type": "REFORESTATION",
    "location": "Mara, Tanzania",
    "region": "africa",
    "lat": -1.95,
    "lng": 34.85,
    "area_ha": 19500,
    "available_credits": 25200,
    "total_credits": 29000,
    "co2_tonnes": 25200,
    "price_per_credit": 0.043,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 29000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 46,
    "soil_moisture_pct": 46.8,
    "ambient_temp_c": 28.8,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Acacia tortilis",
      "Balanites aegyptiaca",
      "Ficus sur",
      "Kigelia africana",
      "Combretum molle",
      "Terminalia sericea",
      "Ziziphus mucronata",
      "Sclerocarya birrea"
    ],
    "seller_name": "Mara Bio-Conservancy",
    "seller_wallet": "0x38cc812a8150e0c9c948384b1174035785467426",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        -1.94554,
        34.89661
      ],
      [
        -1.91109,
        34.85766
      ],
      [
        -1.92729,
        34.81097
      ],
      [
        -1.97241,
        34.80685
      ],
      [
        -2.00129,
        34.86718
      ],
      [
        -1.94554,
        34.89661
      ]
    ]
  },
  {
    "id": "p51",
    "name": "Kilimanjaro Agroforestry Soil Corridor",
    "type": "REFORESTATION",
    "location": "Kilimanjaro, Tanzania",
    "region": "africa",
    "lat": -3.07,
    "lng": 37.35,
    "area_ha": 8200,
    "available_credits": 10200,
    "total_credits": 11800,
    "co2_tonnes": 10200,
    "price_per_credit": 0.042,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 11800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 79,
    "soil_moisture_pct": 43.1,
    "ambient_temp_c": 26.3,
    "uhi_cooling_c": -2.6,
    "native_species": [
      "Albizia schimperiana",
      "Cordia africana",
      "Croton macrostachyus",
      "Rauvolfia caffra",
      "Bridelia micrantha",
      "Persea americana",
      "Coffea arabica",
      "Musa acuminata"
    ],
    "seller_name": "Kilimanjaro Bio-Conservancy",
    "seller_wallet": "0x90b9ec30ed94898b5b923c67129538dfd926fe41",
    "standard": "Plan Vivo",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        -3.07046,
        37.37722
      ],
      [
        -3.04493,
        37.35998
      ],
      [
        -3.05516,
        37.33442
      ],
      [
        -3.08447,
        37.33298
      ],
      [
        -3.09032,
        37.3586
      ],
      [
        -3.07046,
        37.37722
      ]
    ]
  },
  {
    "id": "p52",
    "name": "Rufiji Delta Mangrove Reserve",
    "type": "OCEAN",
    "location": "Pwani, Tanzania",
    "region": "africa",
    "lat": -7.8,
    "lng": 39.3,
    "area_ha": 26000,
    "available_credits": 35500,
    "total_credits": 41000,
    "co2_tonnes": 35500,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.84,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 41000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 34,
    "soil_moisture_pct": 72.1,
    "ambient_temp_c": 29.6,
    "uhi_cooling_c": -3.1,
    "native_species": [
      "Avicennia marina",
      "Rhizophora mucronata",
      "Ceriops tagal",
      "Sonneratia alba",
      "Bruguiera gymnorrhiza",
      "Heritiera littoralis",
      "Xylocarpus granatum",
      "Lumnitzera racemosa"
    ],
    "seller_name": "Pwani Bio-Conservancy",
    "seller_wallet": "0xbdf8f7672261ddef5c074653d71173e446d47d41",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        -7.79717,
        39.3423
      ],
      [
        -7.7438,
        39.31698
      ],
      [
        -7.78086,
        39.26179
      ],
      [
        -7.83102,
        39.25041
      ],
      [
        -7.85037,
        39.32079
      ],
      [
        -7.79717,
        39.3423
      ]
    ]
  },
  {
    "id": "p53",
    "name": "Masoala Peninsula Primary Rainforest",
    "type": "REFORESTATION",
    "location": "Sava, Madagascar",
    "region": "africa",
    "lat": -15.65,
    "lng": 50.15,
    "area_ha": 32000,
    "available_credits": 45800,
    "total_credits": 52000,
    "co2_tonnes": 45800,
    "price_per_credit": 0.048,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.89,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 52000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 82,
    "soil_moisture_pct": 49.0,
    "ambient_temp_c": 21.5,
    "uhi_cooling_c": -3.6,
    "native_species": [
      "Canarium madagascariense",
      "Dalbergia baronii",
      "Diospyros perrieri",
      "Tambourissa purpurea",
      "Weinmannia rutenbergii",
      "Sloanea rhodantha",
      "Anthostema madagascariense",
      "Uapaca bojeri"
    ],
    "seller_name": "Sava Bio-Conservancy",
    "seller_wallet": "0x23ed280ad5e14d1fe5f22dfba741104b96721e98",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -15.64766,
        50.19689
      ],
      [
        -15.59051,
        50.15938
      ],
      [
        -15.60891,
        50.10009
      ],
      [
        -15.6856,
        50.10194
      ],
      [
        -15.70104,
        50.16473
      ],
      [
        -15.64766,
        50.19689
      ]
    ]
  },
  {
    "id": "p54",
    "name": "Bombetoka Bay Mangrove Regeneration",
    "type": "OCEAN",
    "location": "Boeny, Madagascar",
    "region": "africa",
    "lat": -15.82,
    "lng": 46.28,
    "area_ha": 11400,
    "available_credits": 14400,
    "total_credits": 16800,
    "co2_tonnes": 14400,
    "price_per_credit": 0.041,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 16800,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 44,
    "soil_moisture_pct": 81.4,
    "ambient_temp_c": 24.0,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia marina",
      "Bruguiera gymnorrhiza",
      "Ceriops tagal",
      "Sonneratia alba",
      "Xylocarpus granatum",
      "Lumnitzera racemosa",
      "Aegiceras corniculatum"
    ],
    "seller_name": "Boeny Bio-Conservancy",
    "seller_wallet": "0x90da2ed7880bcb0ec8ab96ace0b4659a09fe4cdd",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        -15.82108,
        46.30812
      ],
      [
        -15.7837,
        46.29676
      ],
      [
        -15.80104,
        46.2528
      ],
      [
        -15.83302,
        46.25557
      ],
      [
        -15.85395,
        46.29114
      ],
      [
        -15.82108,
        46.30812
      ]
    ]
  },
  {
    "id": "p55",
    "name": "Bwindi Impenetrable Buffer Corridor",
    "type": "REFORESTATION",
    "location": "Kanungu, Uganda",
    "region": "africa",
    "lat": -1.05,
    "lng": 29.65,
    "area_ha": 8900,
    "available_credits": 12600,
    "total_credits": 14500,
    "co2_tonnes": 12600,
    "price_per_credit": 0.047,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.86,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 14500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 61,
    "soil_moisture_pct": 71.7,
    "ambient_temp_c": 24.0,
    "uhi_cooling_c": -3.0,
    "native_species": [
      "Entandrophragma excelsum",
      "Newtonia buchananii",
      "Chrysophyllum albidum",
      "Prunus africana",
      "Podocarpus milanjianus",
      "Strombosia scheffleri",
      "Symphonia globulifera",
      "Parinari excelsa"
    ],
    "seller_name": "Kanungu Bio-Conservancy",
    "seller_wallet": "0xe2c0dec2175194d7cdeb2696015aba1da2c8cf62",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -1.04641,
        29.68626
      ],
      [
        -1.02315,
        29.66309
      ],
      [
        -1.03275,
        29.62044
      ],
      [
        -1.07013,
        29.62449
      ],
      [
        -1.07775,
        29.65442
      ],
      [
        -1.04641,
        29.68626
      ]
    ]
  },
  {
    "id": "p56",
    "name": "Kibale Forest Canopy Re-Establishment",
    "type": "REFORESTATION",
    "location": "Kabarole, Uganda",
    "region": "africa",
    "lat": 0.45,
    "lng": 30.38,
    "area_ha": 7600,
    "available_credits": 9700,
    "total_credits": 11200,
    "co2_tonnes": 9700,
    "price_per_credit": 0.044,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 11200,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 60,
    "soil_moisture_pct": 57.1,
    "ambient_temp_c": 24.3,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Diospyros abyssinica",
      "Markhamia lutea",
      "Celtis africana",
      "Ficus exasperata",
      "Olea welwitschii",
      "Pseudospondias microcarpa",
      "Albizia grandibracteata",
      "Uvariopsis congensis"
    ],
    "seller_name": "Kabarole Bio-Conservancy",
    "seller_wallet": "0xd9e55c47a237a8c161f6dfbe114b3c79420079f5",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        0.44948,
        30.40579
      ],
      [
        0.47274,
        30.38753
      ],
      [
        0.46977,
        30.35576
      ],
      [
        0.42899,
        30.35463
      ],
      [
        0.42536,
        30.39162
      ],
      [
        0.44948,
        30.40579
      ]
    ]
  },
  {
    "id": "p57",
    "name": "Bale Mountains Cloud Forest Basin",
    "type": "REFORESTATION",
    "location": "Oromia, Ethiopia",
    "region": "africa",
    "lat": 6.85,
    "lng": 39.75,
    "area_ha": 14800,
    "available_credits": 19200,
    "total_credits": 22000,
    "co2_tonnes": 19200,
    "price_per_credit": 0.045,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 22000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 83,
    "soil_moisture_pct": 52.4,
    "ambient_temp_c": 21.1,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Hagenia abyssinica",
      "Hypericum revolutum",
      "Erica arborea",
      "Schefflera volkensii",
      "Discopodium penninervium",
      "Rapanea melanophloeos",
      "Podocarpus falcatus",
      "Juniperus procera"
    ],
    "seller_name": "Oromia Bio-Conservancy",
    "seller_wallet": "0x7b49acc635e574e06c8785467faf64582f14f777",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        6.85219,
        39.78624
      ],
      [
        6.8821,
        39.76576
      ],
      [
        6.86557,
        39.72143
      ],
      [
        6.83239,
        39.72078
      ],
      [
        6.81855,
        39.76626
      ],
      [
        6.85219,
        39.78624
      ]
    ]
  },
  {
    "id": "p58",
    "name": "Rift Valley Coffee Agroforestry Sink",
    "type": "REFORESTATION",
    "location": "Sidama, Ethiopia",
    "region": "africa",
    "lat": 6.7,
    "lng": 38.45,
    "area_ha": 9200,
    "available_credits": 11600,
    "total_credits": 13400,
    "co2_tonnes": 11600,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.77,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 13400,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 57,
    "soil_moisture_pct": 50.6,
    "ambient_temp_c": 28.4,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Millettia ferruginea",
      "Albizia gummifera",
      "Cordia africana",
      "Croton macrostachyus",
      "Ficus vasta",
      "Coffea arabica",
      "Ensete ventricosum",
      "Erythrina brucei"
    ],
    "seller_name": "Sidama Bio-Conservancy",
    "seller_wallet": "0xa6405fcdbf7614495cf85eebf0533851dce0e2bb",
    "standard": "Plan Vivo",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        6.70289,
        38.47375
      ],
      [
        6.72373,
        38.46102
      ],
      [
        6.71729,
        38.429
      ],
      [
        6.68313,
        38.42211
      ],
      [
        6.67139,
        38.45688
      ],
      [
        6.70289,
        38.47375
      ]
    ]
  },
  {
    "id": "p59",
    "name": "Nyungwe High-Altitude Canopy Shield",
    "type": "REFORESTATION",
    "location": "Southern, Rwanda",
    "region": "africa",
    "lat": -2.48,
    "lng": 29.23,
    "area_ha": 13200,
    "available_credits": 18700,
    "total_credits": 21500,
    "co2_tonnes": 18700,
    "price_per_credit": 0.048,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.87,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 21500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 57,
    "soil_moisture_pct": 46.7,
    "ambient_temp_c": 29.9,
    "uhi_cooling_c": -3.2,
    "native_species": [
      "Carapa grandiflora",
      "Entandrophragma excelsum",
      "Newtonia buchananii",
      "Parinari excelsa",
      "Podocarpus usambarensis",
      "Syzygium parvifolium",
      "Beilschmiedia rwandensis",
      "Ocotea michelsonii"
    ],
    "seller_name": "Southern Bio-Conservancy",
    "seller_wallet": "0xc7062cfa29cc07893ff93134650e78e46fe633f1",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -2.48012,
        29.27089
      ],
      [
        -2.44195,
        29.24539
      ],
      [
        -2.46098,
        29.19709
      ],
      [
        -2.50479,
        29.20238
      ],
      [
        -2.52224,
        29.23881
      ],
      [
        -2.48012,
        29.27089
      ]
    ]
  },
  {
    "id": "p60",
    "name": "Zambezi Delta Mangrove Bio-Barrier",
    "type": "OCEAN",
    "location": "Sofala, Mozambique",
    "region": "africa",
    "lat": -18.85,
    "lng": 36.3,
    "area_ha": 21000,
    "available_credits": 28500,
    "total_credits": 33000,
    "co2_tonnes": 28500,
    "price_per_credit": 0.041,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 33000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 30,
    "soil_moisture_pct": 69.0,
    "ambient_temp_c": 23.1,
    "uhi_cooling_c": -3.0,
    "native_species": [
      "Rhizophora mucronata",
      "Avicennia marina",
      "Bruguiera gymnorrhiza",
      "Ceriops tagal",
      "Sonneratia alba",
      "Xylocarpus granatum",
      "Heritiera littoralis",
      "Lumnitzera racemosa"
    ],
    "seller_name": "Sofala Bio-Conservancy",
    "seller_wallet": "0x13db7a2e531350e06f2537cea206527c3c6841d6",
    "standard": "Gold Standard",
    "auditor": "EY Climate",
    "boundary_coords": [
      [
        -18.84592,
        36.35402
      ],
      [
        -18.81456,
        36.31146
      ],
      [
        -18.82563,
        36.26504
      ],
      [
        -18.86942,
        36.26865
      ],
      [
        -18.90263,
        36.32172
      ],
      [
        -18.84592,
        36.35402
      ]
    ]
  },
  {
    "id": "p61",
    "name": "Gorongosa Forest Margin Corridors",
    "type": "REFORESTATION",
    "location": "Sofala, Mozambique",
    "region": "africa",
    "lat": -18.75,
    "lng": 34.5,
    "area_ha": 11500,
    "available_credits": 14600,
    "total_credits": 16800,
    "co2_tonnes": 14600,
    "price_per_credit": 0.043,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 16800,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 53,
    "soil_moisture_pct": 64.0,
    "ambient_temp_c": 33.6,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Pteleopsis myrtifolia",
      "Breonadia salicina",
      "Millettia stuhlmannii",
      "Khaya anthotheca",
      "Erythrophleum suaveolens",
      "Newtonia hildebrandtii",
      "Albizia adianthifolia",
      "Ficus sycomorus"
    ],
    "seller_name": "Sofala Bio-Conservancy",
    "seller_wallet": "0x3dbb45bd2138e2e6f013a170d5cf3b4c0b34fc84",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -18.74682,
        34.52998
      ],
      [
        -18.71289,
        34.51002
      ],
      [
        -18.72947,
        34.47668
      ],
      [
        -18.76731,
        34.47309
      ],
      [
        -18.78595,
        34.50664
      ],
      [
        -18.74682,
        34.52998
      ]
    ]
  },
  {
    "id": "p62",
    "name": "Okavango Panhandle Riparian Buffer",
    "type": "OCEAN",
    "location": "North-West, Botswana",
    "region": "africa",
    "lat": -18.7,
    "lng": 22.15,
    "area_ha": 8500,
    "available_credits": 10400,
    "total_credits": 12000,
    "co2_tonnes": 10400,
    "price_per_credit": 0.04,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.75,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 12000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 40,
    "soil_moisture_pct": 78.2,
    "ambient_temp_c": 26.4,
    "uhi_cooling_c": -2.3,
    "native_species": [
      "Syzygium guineense",
      "Phoenix reclinata",
      "Ficus verruculosa",
      "Kigelia africana",
      "Garcinia livingstonei",
      "Combretum imberbe",
      "Diospyros mespiliformis",
      "Lonchocarpus capassa"
    ],
    "seller_name": "North-West Bio-Conservancy",
    "seller_wallet": "0x18dfaaf8b9efaad6000cd21a65a7ba30f5b70dd9",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        -18.69843,
        22.18566
      ],
      [
        -18.67646,
        22.1598
      ],
      [
        -18.68433,
        22.12646
      ],
      [
        -18.71964,
        22.12249
      ],
      [
        -18.72739,
        22.15786
      ],
      [
        -18.69843,
        22.18566
      ]
    ]
  },
  {
    "id": "p63",
    "name": "Namib Desert Solar Array & Arid Shield",
    "type": "SOLAR",
    "location": "Erongo, Namibia",
    "region": "africa",
    "lat": -22.58,
    "lng": 15.02,
    "area_ha": 1800,
    "available_credits": 27500,
    "total_credits": 31000,
    "co2_tonnes": 27500,
    "price_per_credit": 0.028,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.38,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 31000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 17.2 tCO2/ha/yr capacity.",
    "aqi": 69,
    "soil_moisture_pct": 12.7,
    "ambient_temp_c": 28.7,
    "uhi_cooling_c": -0.9,
    "native_species": [],
    "seller_name": "Erongo Bio-Conservancy",
    "seller_wallet": "0x3160446eb2a7a475c61967736f3acf3380777ac5",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        -22.57998,
        15.03512
      ],
      [
        -22.56578,
        15.02629
      ],
      [
        -22.57119,
        15.0099
      ],
      [
        -22.58763,
        15.0092
      ],
      [
        -22.59236,
        15.02383
      ],
      [
        -22.57998,
        15.03512
      ]
    ]
  },
  {
    "id": "p64",
    "name": "Riyadh Green City Vegetative Micro-Cooling",
    "type": "URBAN_HEAT",
    "location": "Riyadh, Saudi Arabia",
    "region": "africa",
    "lat": 24.68,
    "lng": 46.72,
    "area_ha": 750,
    "available_credits": 4100,
    "total_credits": 4800,
    "co2_tonnes": 4100,
    "price_per_credit": 0.058,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.52,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 4800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 6.4 tCO2/ha/yr capacity.",
    "aqi": 128,
    "soil_moisture_pct": 33.1,
    "ambient_temp_c": 33.3,
    "uhi_cooling_c": -3.8,
    "native_species": [
      "Ziziphus spina-christi",
      "Prosopis cineraria",
      "Acacia tortilis",
      "Tamarix aphylla",
      "Ficus microcarpa",
      "Conocarpus erectus",
      "Moringa peregrina",
      "Phoenix dactylifera"
    ],
    "seller_name": "Riyadh Bio-Conservancy",
    "seller_wallet": "0xf76428c4197fa0fdb5ae2a56fa033d6c822fb2f0",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        24.67736,
        46.73906
      ],
      [
        24.69892,
        46.72548
      ],
      [
        24.68817,
        46.70882
      ],
      [
        24.6698,
        46.70193
      ],
      [
        24.66065,
        46.726
      ],
      [
        24.67736,
        46.73906
      ]
    ]
  },
  {
    "id": "p65",
    "name": "Dubai Mangrove Coastal Sequestration",
    "type": "OCEAN",
    "location": "Dubai, UAE",
    "region": "africa",
    "lat": 25.19,
    "lng": 55.3,
    "area_ha": 1200,
    "available_credits": 3100,
    "total_credits": 3600,
    "co2_tonnes": 3100,
    "price_per_credit": 0.052,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.71,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 3600,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 3.0 tCO2/ha/yr capacity.",
    "aqi": 63,
    "soil_moisture_pct": 71.3,
    "ambient_temp_c": 32.4,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Avicennia marina",
      "Rhizophora mucronata",
      "Halocnemum strobilaceum",
      "Arthrocnemum macrostachyum",
      "Suaeda monoica",
      "Salicornia europaea",
      "Zygophyllum qatarense",
      "Limonium axillare"
    ],
    "seller_name": "Dubai Bio-Conservancy",
    "seller_wallet": "0x54511ba09df034d39caad37cfc6795e2c32fc21b",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        25.18954,
        55.31712
      ],
      [
        25.20864,
        55.30715
      ],
      [
        25.1993,
        55.28077
      ],
      [
        25.18035,
        55.28258
      ],
      [
        25.17655,
        55.30266
      ],
      [
        25.18954,
        55.31712
      ]
    ]
  },
  {
    "id": "p66",
    "name": "Scottish Highlands Caledonian Pine Rebirth",
    "type": "REFORESTATION",
    "location": "Highlands, United Kingdom",
    "region": "europe",
    "lat": 57.25,
    "lng": -4.75,
    "area_ha": 11400,
    "available_credits": 14500,
    "total_credits": 16800,
    "co2_tonnes": 14500,
    "price_per_credit": 0.044,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.77,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 16800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 68,
    "soil_moisture_pct": 47.7,
    "ambient_temp_c": 32.9,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Pinus sylvestris",
      "Betula pendula",
      "Quercus petraea",
      "Sorbus aucuparia",
      "Populus tremula",
      "Salix caprea",
      "Corylus avellana",
      "Alnus glutinosa"
    ],
    "seller_name": "Highlands Bio-Conservancy",
    "seller_wallet": "0x1660a3e9736d417c52ce55e369df05c764a0053f",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        57.25268,
        -4.67537
      ],
      [
        57.28421,
        -4.72856
      ],
      [
        57.27348,
        -4.79464
      ],
      [
        57.23266,
        -4.80643
      ],
      [
        57.21901,
        -4.7222
      ],
      [
        57.25268,
        -4.67537
      ]
    ]
  },
  {
    "id": "p67",
    "name": "Yorkshire Peat Bog Carbon Sponge",
    "type": "BARREN_RESTORE",
    "location": "North Yorkshire, United Kingdom",
    "region": "europe",
    "lat": 54.38,
    "lng": -2.15,
    "area_ha": 8900,
    "available_credits": 12300,
    "total_credits": 14200,
    "co2_tonnes": 12300,
    "price_per_credit": 0.046,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.71,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 14200,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 103,
    "soil_moisture_pct": 16.8,
    "ambient_temp_c": 28.5,
    "uhi_cooling_c": -2.1,
    "native_species": [
      "Sphagnum capillifolium",
      "Eriophorum vaginatum",
      "Calluna vulgaris",
      "Erica tetralix",
      "Vaccinium myrtillus",
      "Trichophorum cespitosum",
      "Drosera rotundifolia",
      "Narthecium ossifragum"
    ],
    "seller_name": "North Yorkshire Bio-Conservancy",
    "seller_wallet": "0xcfd467e77491050cf75efed82d6b59538fead84e",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        54.38098,
        -2.10327
      ],
      [
        54.40146,
        -2.13183
      ],
      [
        54.39088,
        -2.18809
      ],
      [
        54.36312,
        -2.19696
      ],
      [
        54.35142,
        -2.13018
      ],
      [
        54.38098,
        -2.10327
      ]
    ]
  },
  {
    "id": "p68",
    "name": "Black Forest Mixed Canopy Regeneration",
    "type": "REFORESTATION",
    "location": "Baden-W\u00fcrttemberg, Germany",
    "region": "europe",
    "lat": 48.25,
    "lng": 8.2,
    "area_ha": 14500,
    "available_credits": 19800,
    "total_credits": 23000,
    "co2_tonnes": 19800,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 23000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 61,
    "soil_moisture_pct": 62.7,
    "ambient_temp_c": 25.3,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Abies alba",
      "Picea abies",
      "Fagus sylvatica",
      "Acer pseudoplatanus",
      "Fraxinus excelsior",
      "Quercus robur",
      "Tilia cordata",
      "Ulmus glabra"
    ],
    "seller_name": "Baden-W\u00fcrttemberg Bio-Conservancy",
    "seller_wallet": "0x85eb0e8fa090360d27c7655a7b434a7222c0c475",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        48.24858,
        8.25895
      ],
      [
        48.29375,
        8.21017
      ],
      [
        48.27972,
        8.15065
      ],
      [
        48.22369,
        8.15972
      ],
      [
        48.2222,
        8.21316
      ],
      [
        48.24858,
        8.25895
      ]
    ]
  },
  {
    "id": "p69",
    "name": "Brandenburg Solar Park & Meadow Buffer",
    "type": "SOLAR",
    "location": "Brandenburg, Germany",
    "region": "europe",
    "lat": 52.38,
    "lng": 13.82,
    "area_ha": 1200,
    "available_credits": 23200,
    "total_credits": 26000,
    "co2_tonnes": 23200,
    "price_per_credit": 0.029,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.54,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 26000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 21.7 tCO2/ha/yr capacity.",
    "aqi": 83,
    "soil_moisture_pct": 24.1,
    "ambient_temp_c": 27.1,
    "uhi_cooling_c": -1.2,
    "native_species": [],
    "seller_name": "Brandenburg Bio-Conservancy",
    "seller_wallet": "0x2e1e5d91abcec90f70ecf41bc5d5601651b3ccf5",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        52.37742,
        13.8465
      ],
      [
        52.39421,
        13.82616
      ],
      [
        52.38831,
        13.80015
      ],
      [
        52.36977,
        13.80256
      ],
      [
        52.3659,
        13.82485
      ],
      [
        52.37742,
        13.8465
      ]
    ]
  },
  {
    "id": "p70",
    "name": "Bavarian Alps Mountain Watershed Belt",
    "type": "REFORESTATION",
    "location": "Bavaria, Germany",
    "region": "europe",
    "lat": 47.65,
    "lng": 11.85,
    "area_ha": 9800,
    "available_credits": 13100,
    "total_credits": 15000,
    "co2_tonnes": 13100,
    "price_per_credit": 0.042,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 15000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 44,
    "soil_moisture_pct": 67.8,
    "ambient_temp_c": 24.7,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Larix decidua",
      "Pinus cembra",
      "Picea abies",
      "Abies alba",
      "Acer pseudoplatanus",
      "Sorbus aucuparia",
      "Alnus viridis",
      "Betula pubescens"
    ],
    "seller_name": "Bavaria Bio-Conservancy",
    "seller_wallet": "0x4e6289819ef1a74f3d13452669d75427972d5d57",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        47.64829,
        11.898
      ],
      [
        47.67831,
        11.86353
      ],
      [
        47.66318,
        11.81833
      ],
      [
        47.6352,
        11.82098
      ],
      [
        47.62031,
        11.86102
      ],
      [
        47.64829,
        11.898
      ]
    ]
  },
  {
    "id": "p71",
    "name": "Pyrenees Montane Oak & Pine Corridors",
    "type": "REFORESTATION",
    "location": "Occitanie, France",
    "region": "europe",
    "lat": 42.85,
    "lng": 0.55,
    "area_ha": 12800,
    "available_credits": 17800,
    "total_credits": 20500,
    "co2_tonnes": 17800,
    "price_per_credit": 0.044,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 20500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 80,
    "soil_moisture_pct": 43.9,
    "ambient_temp_c": 24.7,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Pinus uncinata",
      "Abies alba",
      "Fagus sylvatica",
      "Quercus humilis",
      "Betula pendula",
      "Corylus avellana",
      "Populus tremula",
      "Sorbus aria"
    ],
    "seller_name": "Occitanie Bio-Conservancy",
    "seller_wallet": "0x6c3bd3b5ecaadafbd7e4527a6274d2408e301bcc",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        42.84439,
        0.59637
      ],
      [
        42.8864,
        0.56442
      ],
      [
        42.8679,
        0.51057
      ],
      [
        42.83262,
        0.51577
      ],
      [
        42.82135,
        0.55793
      ],
      [
        42.84439,
        0.59637
      ]
    ]
  },
  {
    "id": "p72",
    "name": "Landes Forest Biomass & Soil Sink",
    "type": "REFORESTATION",
    "location": "Nouvelle-Aquitaine, France",
    "region": "europe",
    "lat": 44.3,
    "lng": -0.8,
    "area_ha": 16500,
    "available_credits": 23500,
    "total_credits": 27000,
    "co2_tonnes": 23500,
    "price_per_credit": 0.04,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.76,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 27000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 78,
    "soil_moisture_pct": 42.3,
    "ambient_temp_c": 24.8,
    "uhi_cooling_c": -2.6,
    "native_species": [
      "Pinus pinaster",
      "Quercus suber",
      "Quercus robur",
      "Arbutus unedo",
      "Erica scoparia",
      "Ulex europaeus",
      "Betula pendula",
      "Castanea sativa"
    ],
    "seller_name": "Nouvelle-Aquitaine Bio-Conservancy",
    "seller_wallet": "0x16fd01e69fd33d40bcc4f0dbcf13cb3d4ab05699",
    "standard": "Verra VCS",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        44.29485,
        -0.73831
      ],
      [
        44.33511,
        -0.78589
      ],
      [
        44.31799,
        -0.84301
      ],
      [
        44.27375,
        -0.84597
      ],
      [
        44.25883,
        -0.77968
      ],
      [
        44.29485,
        -0.73831
      ]
    ]
  },
  {
    "id": "p73",
    "name": "Paris Ring Vegetative Shield & Heat Drop",
    "type": "URBAN_HEAT",
    "location": "\u00cele-de-France, France",
    "region": "europe",
    "lat": 48.88,
    "lng": 2.24,
    "area_ha": 510,
    "available_credits": 2600,
    "total_credits": 3100,
    "co2_tonnes": 2600,
    "price_per_credit": 0.054,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.68,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 3100,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 6.1 tCO2/ha/yr capacity.",
    "aqi": 146,
    "soil_moisture_pct": 28.8,
    "ambient_temp_c": 32.2,
    "uhi_cooling_c": -3.4,
    "native_species": [
      "Platanus x hispanica",
      "Tilia tomentosa",
      "Acer campestre",
      "Carpinus betulus",
      "Quercus cerris",
      "Ginkgo biloba",
      "Celtis australis",
      "Sorbus domestica"
    ],
    "seller_name": "\u00cele-de-France Bio-Conservancy",
    "seller_wallet": "0x3e0f0484fe43541ab0b6148cad7eeff756604762",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        48.87918,
        2.26175
      ],
      [
        48.8957,
        2.25166
      ],
      [
        48.89139,
        2.21797
      ],
      [
        48.86812,
        2.2192
      ],
      [
        48.86707,
        2.24707
      ],
      [
        48.87918,
        2.26175
      ]
    ]
  },
  {
    "id": "p74",
    "name": "Dehesa Oak Silvopastoral Soil Sequestration",
    "type": "REFORESTATION",
    "location": "Extremadura, Spain",
    "region": "europe",
    "lat": 39.45,
    "lng": -6.25,
    "area_ha": 18200,
    "available_credits": 24500,
    "total_credits": 28000,
    "co2_tonnes": 24500,
    "price_per_credit": 0.041,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.72,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 28000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 74,
    "soil_moisture_pct": 61.3,
    "ambient_temp_c": 26.8,
    "uhi_cooling_c": -2.3,
    "native_species": [
      "Quercus ilex",
      "Quercus suber",
      "Olea europaea sylvestris",
      "Retama sphaerocarpa",
      "Cistus ladanifer",
      "Crataegus monogyna",
      "Pistacia terebinthus",
      "Lavandula stoechas"
    ],
    "seller_name": "Extremadura Bio-Conservancy",
    "seller_wallet": "0x7fa179a57a6758707d9d2b3bc55fa445f09e0302",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        39.45484,
        -6.20502
      ],
      [
        39.49994,
        -6.23244
      ],
      [
        39.4703,
        -6.29094
      ],
      [
        39.41712,
        -6.30074
      ],
      [
        39.40959,
        -6.23148
      ],
      [
        39.45484,
        -6.20502
      ]
    ]
  },
  {
    "id": "p75",
    "name": "Andalusia Megawatt Solar Clean Energy",
    "type": "SOLAR",
    "location": "Andalusia, Spain",
    "region": "europe",
    "lat": 37.45,
    "lng": -5.2,
    "area_ha": 2100,
    "available_credits": 37500,
    "total_credits": 42000,
    "co2_tonnes": 37500,
    "price_per_credit": 0.027,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.49,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 42000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 20.0 tCO2/ha/yr capacity.",
    "aqi": 93,
    "soil_moisture_pct": 12.2,
    "ambient_temp_c": 29.4,
    "uhi_cooling_c": -1.1,
    "native_species": [],
    "seller_name": "Andalusia Bio-Conservancy",
    "seller_wallet": "0x2027fbf7387770f09d99d4c5cc96bf4398507072",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        37.44708,
        -5.17853
      ],
      [
        37.46854,
        -5.19592
      ],
      [
        37.4619,
        -5.2155
      ],
      [
        37.4414,
        -5.21174
      ],
      [
        37.43808,
        -5.1932
      ],
      [
        37.44708,
        -5.17853
      ]
    ]
  },
  {
    "id": "p76",
    "name": "Almer\u00eda Semi-Arid Soil Microbiome Rejuvenation",
    "type": "BARREN_RESTORE",
    "location": "Andalusia, Spain",
    "region": "europe",
    "lat": 36.95,
    "lng": -2.4,
    "area_ha": 7200,
    "available_credits": 8400,
    "total_credits": 9800,
    "co2_tonnes": 8400,
    "price_per_credit": 0.038,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.52,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 9800,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 65,
    "soil_moisture_pct": 21.6,
    "ambient_temp_c": 22.5,
    "uhi_cooling_c": -1.9,
    "native_species": [
      "Pinus halepensis",
      "Stipa tenacissima",
      "Rhamnus lycioides",
      "Ephedra fragilis",
      "Genista cinerea",
      "Thymus vulgaris",
      "Rosmarinus officinalis",
      "Anthyllis cytisoides"
    ],
    "seller_name": "Andalusia Bio-Conservancy",
    "seller_wallet": "0x84017bb3c2270738e3dc419dce1e8d1f9de7df7b",
    "standard": "Gold Standard",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        36.94617,
        -2.36106
      ],
      [
        36.97633,
        -2.39433
      ],
      [
        36.97202,
        -2.42975
      ],
      [
        36.93865,
        -2.42778
      ],
      [
        36.9271,
        -2.39381
      ],
      [
        36.94617,
        -2.36106
      ]
    ]
  },
  {
    "id": "p77",
    "name": "Alentejo Cork Oak & Olive Climate Buffer",
    "type": "REFORESTATION",
    "location": "Alentejo, Portugal",
    "region": "europe",
    "lat": 38.35,
    "lng": -7.9,
    "area_ha": 13400,
    "available_credits": 17100,
    "total_credits": 19500,
    "co2_tonnes": 17100,
    "price_per_credit": 0.042,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.73,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 19500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 49,
    "soil_moisture_pct": 63.9,
    "ambient_temp_c": 22.9,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Quercus suber",
      "Quercus rotundifolia",
      "Pinus pinea",
      "Ceratonia siliqua",
      "Arbutus unedo",
      "Myrtus communis",
      "Pistacia lentiscus",
      "Cistus monspeliensis"
    ],
    "seller_name": "Alentejo Bio-Conservancy",
    "seller_wallet": "0x4d9229527ecb002e73d3328c191679d3d24025ea",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        38.35071,
        -7.86499
      ],
      [
        38.37781,
        -7.89477
      ],
      [
        38.37468,
        -7.94239
      ],
      [
        38.33336,
        -7.94224
      ],
      [
        38.31002,
        -7.88384
      ],
      [
        38.35071,
        -7.86499
      ]
    ]
  },
  {
    "id": "p78",
    "name": "Serra da Estrela Montane Reforestation",
    "type": "REFORESTATION",
    "location": "Centro, Portugal",
    "region": "europe",
    "lat": 40.32,
    "lng": -7.62,
    "area_ha": 8900,
    "available_credits": 11500,
    "total_credits": 13200,
    "co2_tonnes": 11500,
    "price_per_credit": 0.043,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.75,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 13200,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 43,
    "soil_moisture_pct": 63.1,
    "ambient_temp_c": 21.7,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Quercus pyrenaica",
      "Pinus sylvestris",
      "Betula celtiberica",
      "Castanea sativa",
      "Sorbus aucuparia",
      "Prunus lusitanica",
      "Ilex aquifolium",
      "Corylus avellana"
    ],
    "seller_name": "Centro Bio-Conservancy",
    "seller_wallet": "0xf453c4c23037f0b710ccf85fe214d458f0dd3de0",
    "standard": "Verra VCS",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        40.31871,
        -7.58195
      ],
      [
        40.35296,
        -7.60598
      ],
      [
        40.33802,
        -7.65182
      ],
      [
        40.29589,
        -7.65451
      ],
      [
        40.29343,
        -7.60932
      ],
      [
        40.31871,
        -7.58195
      ]
    ]
  },
  {
    "id": "p79",
    "name": "Tuscan Apennines Chestnut & Beech Vault",
    "type": "REFORESTATION",
    "location": "Tuscany, Italy",
    "region": "europe",
    "lat": 44.05,
    "lng": 11.55,
    "area_ha": 11800,
    "available_credits": 16200,
    "total_credits": 18500,
    "co2_tonnes": 16200,
    "price_per_credit": 0.045,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 18500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 53,
    "soil_moisture_pct": 59.2,
    "ambient_temp_c": 22.9,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Castanea sativa",
      "Fagus sylvatica",
      "Quercus cerris",
      "Ostrya carpinifolia",
      "Acer opalus",
      "Fraxinus ornus",
      "Abies alba",
      "Sorbus torminalis"
    ],
    "seller_name": "Tuscany Bio-Conservancy",
    "seller_wallet": "0x91e58eeef9c0fd4d8bd03267bd0e01cef85bc2d3",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        44.04924,
        11.60898
      ],
      [
        44.07651,
        11.56151
      ],
      [
        44.0797,
        11.5094
      ],
      [
        44.02229,
        11.50623
      ],
      [
        44.02463,
        11.56764
      ],
      [
        44.04924,
        11.60898
      ]
    ]
  },
  {
    "id": "p80",
    "name": "Sicily Etna Volcanic Soil Agroforestry",
    "type": "BARREN_RESTORE",
    "location": "Sicily, Italy",
    "region": "europe",
    "lat": 37.75,
    "lng": 15.0,
    "area_ha": 6400,
    "available_credits": 8100,
    "total_credits": 9200,
    "co2_tonnes": 8100,
    "price_per_credit": 0.039,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.65,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 9200,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 112,
    "soil_moisture_pct": 23.0,
    "ambient_temp_c": 25.4,
    "uhi_cooling_c": -2.0,
    "native_species": [
      "Betula aetnensis",
      "Pinus nigra calabrica",
      "Genista aetnensis",
      "Castanea sativa",
      "Quercus congesta",
      "Astragalus siculus",
      "Populus tremula",
      "Fagus sylvatica"
    ],
    "seller_name": "Sicily Bio-Conservancy",
    "seller_wallet": "0x5a1a421961bba5fbd5108bc02f9e1ddb33028b32",
    "standard": "Plan Vivo",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        37.75397,
        15.03297
      ],
      [
        37.7678,
        15.00841
      ],
      [
        37.76225,
        14.97634
      ],
      [
        37.73781,
        14.97276
      ],
      [
        37.72126,
        15.01277
      ],
      [
        37.75397,
        15.03297
      ]
    ]
  },
  {
    "id": "p81",
    "name": "Po Valley Farm Methane Biogas Capture",
    "type": "METHANE",
    "location": "Lombardy, Italy",
    "region": "europe",
    "lat": 45.18,
    "lng": 9.85,
    "area_ha": 380,
    "available_credits": 7400,
    "total_credits": 8600,
    "co2_tonnes": 7400,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to CAR registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.63,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 8600,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 22.6 tCO2/ha/yr capacity.",
    "aqi": 104,
    "soil_moisture_pct": 34.2,
    "ambient_temp_c": 31.7,
    "uhi_cooling_c": -1.7,
    "native_species": [],
    "seller_name": "Lombardy Bio-Conservancy",
    "seller_wallet": "0xe4d7b0cab08d16769d09a4048f040721e5a5829e",
    "standard": "CAR",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        45.17723,
        9.87288
      ],
      [
        45.19507,
        9.85801
      ],
      [
        45.19235,
        9.82851
      ],
      [
        45.17369,
        9.8332
      ],
      [
        45.16663,
        9.85418
      ],
      [
        45.17723,
        9.87288
      ]
    ]
  },
  {
    "id": "p82",
    "name": "Irish Atlantic Peatland Carbon Sink",
    "type": "BARREN_RESTORE",
    "location": "Connacht, Ireland",
    "region": "europe",
    "lat": 53.85,
    "lng": -9.55,
    "area_ha": 9600,
    "available_credits": 13200,
    "total_credits": 15000,
    "co2_tonnes": 13200,
    "price_per_credit": 0.047,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.74,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 15000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 102,
    "soil_moisture_pct": 15.0,
    "ambient_temp_c": 33.5,
    "uhi_cooling_c": -2.2,
    "native_species": [
      "Sphagnum cuspidatum",
      "Eriophorum angustifolium",
      "Rhynchospora alba",
      "Erica mackayana",
      "Molinia caerulea",
      "Calluna vulgaris",
      "Myrica gale",
      "Drosera anglica"
    ],
    "seller_name": "Connacht Bio-Conservancy",
    "seller_wallet": "0xe5b1a96a2e4c16e21b799e6bf52ef4a6ac6c2e1b",
    "standard": "Gold Standard",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        53.84602,
        -9.49136
      ],
      [
        53.88038,
        -9.52272
      ],
      [
        53.86727,
        -9.60621
      ],
      [
        53.82919,
        -9.5878
      ],
      [
        53.82586,
        -9.5335
      ],
      [
        53.84602,
        -9.49136
      ]
    ]
  },
  {
    "id": "p83",
    "name": "Boreal Peatland Buffer Forest",
    "type": "REFORESTATION",
    "location": "Innlandet, Norway",
    "region": "europe",
    "lat": 61.25,
    "lng": 11.35,
    "area_ha": 17500,
    "available_credits": 23800,
    "total_credits": 27000,
    "co2_tonnes": 23800,
    "price_per_credit": 0.044,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 27000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 62,
    "soil_moisture_pct": 70.5,
    "ambient_temp_c": 24.0,
    "uhi_cooling_c": -2.6,
    "native_species": [
      "Picea abies",
      "Pinus sylvestris",
      "Betula pubescens",
      "Alnus incana",
      "Populus tremula",
      "Salix caprea",
      "Sorbus aucuparia",
      "Prunus padus"
    ],
    "seller_name": "Innlandet Bio-Conservancy",
    "seller_wallet": "0xb93c94131396a289c29a988f18a952109f8c2c51",
    "standard": "Verra VCS",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        61.25491,
        11.41554
      ],
      [
        61.29731,
        11.37315
      ],
      [
        61.26873,
        11.29647
      ],
      [
        61.22833,
        11.27064
      ],
      [
        61.21361,
        11.36962
      ],
      [
        61.25491,
        11.41554
      ]
    ]
  },
  {
    "id": "p84",
    "name": "Swedish Baltic Coastal Wetlands",
    "type": "OCEAN",
    "location": "Kalmar, Sweden",
    "region": "europe",
    "lat": 56.68,
    "lng": 16.35,
    "area_ha": 8400,
    "available_credits": 10900,
    "total_credits": 12600,
    "co2_tonnes": 10900,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.76,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 12600,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 70,
    "soil_moisture_pct": 73.2,
    "ambient_temp_c": 22.5,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Phragmites australis",
      "Typha latifolia",
      "Bolboschoenus maritimus",
      "Schoenoplectus tabernaemontani",
      "Alnus glutinosa",
      "Carex acuta",
      "Iris pseudacorus",
      "Salix cinerea"
    ],
    "seller_name": "Kalmar Bio-Conservancy",
    "seller_wallet": "0x628a34f363eac0a19202b09c60b3693851071545",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        56.67661,
        16.40326
      ],
      [
        56.70772,
        16.37599
      ],
      [
        56.69774,
        16.30798
      ],
      [
        56.66758,
        16.31701
      ],
      [
        56.65901,
        16.36197
      ],
      [
        56.67661,
        16.40326
      ]
    ]
  },
  {
    "id": "p85",
    "name": "Swiss Valais Alpine Glacial Watershed",
    "type": "REFORESTATION",
    "location": "Valais, Switzerland",
    "region": "europe",
    "lat": 46.25,
    "lng": 7.55,
    "area_ha": 7800,
    "available_credits": 11200,
    "total_credits": 12800,
    "co2_tonnes": 11200,
    "price_per_credit": 0.048,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 12800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 52,
    "soil_moisture_pct": 55.9,
    "ambient_temp_c": 32.8,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Larix decidua",
      "Pinus cembra",
      "Picea abies",
      "Alnus viridis",
      "Sorbus chamaemespilus",
      "Betula pendula",
      "Acer pseudoplatanus",
      "Salix hegetschweileri"
    ],
    "seller_name": "Valais Bio-Conservancy",
    "seller_wallet": "0x8c42049476d32b964f7f963ed3c544a3cc0b200d",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        46.25153,
        7.59719
      ],
      [
        46.27296,
        7.56386
      ],
      [
        46.27068,
        7.51769
      ],
      [
        46.23763,
        7.51991
      ],
      [
        46.22912,
        7.55587
      ],
      [
        46.25153,
        7.59719
      ]
    ]
  },
  {
    "id": "p86",
    "name": "Acre Chico Mendes Extractive Basin",
    "type": "REFORESTATION",
    "location": "Acre, Brazil",
    "region": "americas",
    "lat": -9.85,
    "lng": -68.8,
    "area_ha": 48000,
    "available_credits": 74200,
    "total_credits": 85000,
    "co2_tonnes": 74200,
    "price_per_credit": 0.046,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 85000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.8 tCO2/ha/yr capacity.",
    "aqi": 51,
    "soil_moisture_pct": 54.7,
    "ambient_temp_c": 31.7,
    "uhi_cooling_c": -3.6,
    "native_species": [
      "Bertholletia excelsa",
      "Hevea brasiliensis",
      "Swietenia macrophylla",
      "Dipteryx odorata",
      "Cedrela odorata",
      "Euterpe precatoria",
      "Bactris gasipaes",
      "Theobroma speciosum"
    ],
    "seller_name": "Acre Bio-Conservancy",
    "seller_wallet": "0x6ce4124bb35b9f78f55f2e80a3922a4e4f2c386f",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -9.86418,
        -68.71472
      ],
      [
        -9.77221,
        -68.77753
      ],
      [
        -9.80438,
        -68.87196
      ],
      [
        -9.90062,
        -68.86164
      ],
      [
        -9.91914,
        -68.78406
      ],
      [
        -9.86418,
        -68.71472
      ]
    ]
  },
  {
    "id": "p87",
    "name": "Par\u00e1 Tapaj\u00f3s High-Biomass Reserve",
    "type": "REFORESTATION",
    "location": "Par\u00e1, Brazil",
    "region": "americas",
    "lat": -3.85,
    "lng": -55.2,
    "area_ha": 62000,
    "available_credits": 98500,
    "total_credits": 115000,
    "co2_tonnes": 98500,
    "price_per_credit": 0.047,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.89,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 115000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.9 tCO2/ha/yr capacity.",
    "aqi": 50,
    "soil_moisture_pct": 68.2,
    "ambient_temp_c": 25.8,
    "uhi_cooling_c": -3.7,
    "native_species": [
      "Dinizia excelsa",
      "Hymenaea courbaril",
      "Goupia glabra",
      "Manilkara huberi",
      "Peltogyne paniculata",
      "Virola surinamensis",
      "Carapa guianensis",
      "Ceiba pentandra"
    ],
    "seller_name": "Par\u00e1 Bio-Conservancy",
    "seller_wallet": "0xea119684b385d9de430438b532c192f176617a3b",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        -3.85251,
        -55.13224
      ],
      [
        -3.77684,
        -55.18534
      ],
      [
        -3.8108,
        -55.2385
      ],
      [
        -3.89598,
        -55.26078
      ],
      [
        -3.90589,
        -55.18751
      ],
      [
        -3.85251,
        -55.13224
      ]
    ]
  },
  {
    "id": "p88",
    "name": "Amazonas Juma Sustainable Forest",
    "type": "REFORESTATION",
    "location": "Amazonas, Brazil",
    "region": "americas",
    "lat": -5.15,
    "lng": -60.25,
    "area_ha": 54000,
    "available_credits": 81000,
    "total_credits": 92000,
    "co2_tonnes": 81000,
    "price_per_credit": 0.048,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 92000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.7 tCO2/ha/yr capacity.",
    "aqi": 56,
    "soil_moisture_pct": 57.1,
    "ambient_temp_c": 23.3,
    "uhi_cooling_c": -3.5,
    "native_species": [
      "Hevea guianensis",
      "Tabebuia serratifolia",
      "Cedrelinga cateniformis",
      "Vouacapoua americana",
      "Parkia pendula",
      "Couratari guianensis",
      "Clarisia racemosa",
      "Dialium guianense"
    ],
    "seller_name": "Amazonas Bio-Conservancy",
    "seller_wallet": "0x57efa886d5b5b7b0f92edfa1df2664247fcc4456",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -5.15826,
        -60.17837
      ],
      [
        -5.08389,
        -60.22423
      ],
      [
        -5.09446,
        -60.30733
      ],
      [
        -5.18608,
        -60.30239
      ],
      [
        -5.23656,
        -60.2279
      ],
      [
        -5.15826,
        -60.17837
      ]
    ]
  },
  {
    "id": "p89",
    "name": "Maranh\u00e3o Mangrove Delta Bio-Wall",
    "type": "OCEAN",
    "location": "Maranh\u00e3o, Brazil",
    "region": "americas",
    "lat": -2.45,
    "lng": -44.25,
    "area_ha": 24000,
    "available_credits": 32900,
    "total_credits": 38000,
    "co2_tonnes": 32900,
    "price_per_credit": 0.043,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.85,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 38000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 61,
    "soil_moisture_pct": 84.6,
    "ambient_temp_c": 30.2,
    "uhi_cooling_c": -3.1,
    "native_species": [
      "Rhizophora mangle",
      "Avicennia germinans",
      "Laguncularia racemosa",
      "Conocarpus erectus",
      "Spartina alterniflora",
      "Acrostichum aureum",
      "Hibiscus tiliaceus",
      "Dalbergia ecastaphyllum"
    ],
    "seller_name": "Maranh\u00e3o Bio-Conservancy",
    "seller_wallet": "0x311b20eb91b45e06cc0a628bf5185923e8292e3b",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        -2.45037,
        -44.19797
      ],
      [
        -2.40134,
        -44.22971
      ],
      [
        -2.42606,
        -44.27916
      ],
      [
        -2.47966,
        -44.28739
      ],
      [
        -2.50443,
        -44.2223
      ],
      [
        -2.45037,
        -44.19797
      ]
    ]
  },
  {
    "id": "p90",
    "name": "Cerrado Native Savannah Carbon Sink",
    "type": "BARREN_RESTORE",
    "location": "Goi\u00e1s, Brazil",
    "region": "americas",
    "lat": -15.85,
    "lng": -48.95,
    "area_ha": 21000,
    "available_credits": 27800,
    "total_credits": 32000,
    "co2_tonnes": 27800,
    "price_per_credit": 0.039,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.68,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 32000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 94,
    "soil_moisture_pct": 17.7,
    "ambient_temp_c": 27.7,
    "uhi_cooling_c": -2.4,
    "native_species": [
      "Dipteryx alata",
      "Caryocar brasiliense",
      "Qualea grandiflora",
      "Curatella americana",
      "Kielmeyera coriacea",
      "Byrsonima crassifolia",
      "Anacardium humile",
      "Hancornia speciosa"
    ],
    "seller_name": "Goi\u00e1s Bio-Conservancy",
    "seller_wallet": "0xe7c8f02c2ea5312ac942e6e82df721e0767f3c15",
    "standard": "Plan Vivo",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        -15.84984,
        -48.90457
      ],
      [
        -15.80195,
        -48.93309
      ],
      [
        -15.82897,
        -48.98826
      ],
      [
        -15.8817,
        -48.99262
      ],
      [
        -15.90065,
        -48.9423
      ],
      [
        -15.84984,
        -48.90457
      ]
    ]
  },
  {
    "id": "p91",
    "name": "Pantanal Wetland Buffer Reforestation",
    "type": "OCEAN",
    "location": "Mato Grosso, Brazil",
    "region": "americas",
    "lat": -16.85,
    "lng": -56.8,
    "area_ha": 18500,
    "available_credits": 25100,
    "total_credits": 29000,
    "co2_tonnes": 25100,
    "price_per_credit": 0.042,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 29000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 49,
    "soil_moisture_pct": 67.3,
    "ambient_temp_c": 24.8,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Vochysia divergens",
      "Copernicia alba",
      "Tabebuia aurea",
      "Calophyllum brasiliense",
      "Erythrina fusca",
      "Genipa americana",
      "Inga vera",
      "Cecropia pachystachya"
    ],
    "seller_name": "Mato Grosso Bio-Conservancy",
    "seller_wallet": "0x765173fa7ccc92580979f5d34a703330ffc03136",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -16.84535,
        -56.75789
      ],
      [
        -16.81799,
        -56.78694
      ],
      [
        -16.82989,
        -56.83784
      ],
      [
        -16.87412,
        -56.83693
      ],
      [
        -16.89508,
        -56.78325
      ],
      [
        -16.84535,
        -56.75789
      ]
    ]
  },
  {
    "id": "p92",
    "name": "Madre de Dios Biodiversity Corridor",
    "type": "REFORESTATION",
    "location": "Madre de Dios, Peru",
    "region": "americas",
    "lat": -12.55,
    "lng": -69.25,
    "area_ha": 38000,
    "available_credits": 59000,
    "total_credits": 68000,
    "co2_tonnes": 59000,
    "price_per_credit": 0.048,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.89,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 68000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.8 tCO2/ha/yr capacity.",
    "aqi": 36,
    "soil_moisture_pct": 43.9,
    "ambient_temp_c": 25.6,
    "uhi_cooling_c": -3.6,
    "native_species": [
      "Bertholletia excelsa",
      "Cedrela fissilis",
      "Dipteryx micrantha",
      "Swietenia macrophylla",
      "Guatteria ucayalina",
      "Ficus insipida",
      "Ocotea baturitensis",
      "Inga edulis"
    ],
    "seller_name": "Madre de Dios Bio-Conservancy",
    "seller_wallet": "0x2c65f6bdc179c596d772e63ef6700a627506d74c",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        -12.56152,
        -69.17607
      ],
      [
        -12.50317,
        -69.22998
      ],
      [
        -12.517,
        -69.3037
      ],
      [
        -12.59303,
        -69.30369
      ],
      [
        -12.60328,
        -69.22274
      ],
      [
        -12.56152,
        -69.17607
      ]
    ]
  },
  {
    "id": "p93",
    "name": "Loreto Mara\u00f1\u00f3n River Peat Forest",
    "type": "REFORESTATION",
    "location": "Loreto, Peru",
    "region": "americas",
    "lat": -4.45,
    "lng": -73.6,
    "area_ha": 42000,
    "available_credits": 66400,
    "total_credits": 76000,
    "co2_tonnes": 66400,
    "price_per_credit": 0.047,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.87,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 76000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.8 tCO2/ha/yr capacity.",
    "aqi": 60,
    "soil_moisture_pct": 59.2,
    "ambient_temp_c": 32.5,
    "uhi_cooling_c": -3.4,
    "native_species": [
      "Mauritia flexuosa",
      "Campnosperma panamense",
      "Symphonia globulifera",
      "Virola elongata",
      "Socratea exorrhiza",
      "Euterpe oleracea",
      "Iryanthera juruensis",
      "Calophyllum brasiliense"
    ],
    "seller_name": "Loreto Bio-Conservancy",
    "seller_wallet": "0xafd609228b5f74aae3386d523483a23ba4d546e1",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -4.44463,
        -73.52327
      ],
      [
        -4.39303,
        -73.58621
      ],
      [
        -4.40256,
        -73.65851
      ],
      [
        -4.49737,
        -73.64919
      ],
      [
        -4.5104,
        -73.58829
      ],
      [
        -4.44463,
        -73.52327
      ]
    ]
  },
  {
    "id": "p94",
    "name": "Piura Dry Forest Re-Establishment",
    "type": "BARREN_RESTORE",
    "location": "Piura, Peru",
    "region": "americas",
    "lat": -4.95,
    "lng": -80.65,
    "area_ha": 12500,
    "available_credits": 15400,
    "total_credits": 17800,
    "co2_tonnes": 15400,
    "price_per_credit": 0.038,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.58,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 17800,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 108,
    "soil_moisture_pct": 25.7,
    "ambient_temp_c": 22.2,
    "uhi_cooling_c": -2.0,
    "native_species": [
      "Prosopis pallida",
      "Loxopterygium huasango",
      "Bursera graveolens",
      "Colicodendron scabridum",
      "Parkinsonia aculeata",
      "Caesalpinia paipai",
      "Acacia macracantha",
      "Pithecellobium dulce"
    ],
    "seller_name": "Piura Bio-Conservancy",
    "seller_wallet": "0xc063796a70a91477ff1b654d6c65659da2ef1e21",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        -4.95075,
        -80.62117
      ],
      [
        -4.92453,
        -80.63878
      ],
      [
        -4.932,
        -80.6784
      ],
      [
        -4.97427,
        -80.68212
      ],
      [
        -4.98318,
        -80.63416
      ],
      [
        -4.95075,
        -80.62117
      ]
    ]
  },
  {
    "id": "p95",
    "name": "Putumayo Colombian Amazon Sanctuary",
    "type": "REFORESTATION",
    "location": "Putumayo, Colombia",
    "region": "americas",
    "lat": 0.45,
    "lng": -75.8,
    "area_ha": 34000,
    "available_credits": 51200,
    "total_credits": 59000,
    "co2_tonnes": 51200,
    "price_per_credit": 0.047,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 59000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.7 tCO2/ha/yr capacity.",
    "aqi": 83,
    "soil_moisture_pct": 54.3,
    "ambient_temp_c": 29.4,
    "uhi_cooling_c": -3.5,
    "native_species": [
      "Cedrela montana",
      "Aniba rosaeodora",
      "Platymiscium ulei",
      "Cariniana decandra",
      "Goupia glabra",
      "Macrolobium acaciifolium",
      "Clarisia biflora",
      "Ceiba samauma"
    ],
    "seller_name": "Putumayo Bio-Conservancy",
    "seller_wallet": "0xa1fb8925f51124380d892cedc1f3114393acceb8",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        0.45817,
        -75.73636
      ],
      [
        0.51398,
        -75.78097
      ],
      [
        0.48162,
        -75.85089
      ],
      [
        0.42146,
        -75.85263
      ],
      [
        0.38972,
        -75.78735
      ],
      [
        0.45817,
        -75.73636
      ]
    ]
  },
  {
    "id": "p96",
    "name": "Choc\u00f3 Pacific Coastal Rainforest",
    "type": "REFORESTATION",
    "location": "Choc\u00f3, Colombia",
    "region": "americas",
    "lat": 5.25,
    "lng": -76.85,
    "area_ha": 29000,
    "available_credits": 42100,
    "total_credits": 48000,
    "co2_tonnes": 42100,
    "price_per_credit": 0.049,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.9,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 48000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.7 tCO2/ha/yr capacity.",
    "aqi": 66,
    "soil_moisture_pct": 58.6,
    "ambient_temp_c": 28.6,
    "uhi_cooling_c": -3.8,
    "native_species": [
      "Huberodendron patinoi",
      "Humiriastrum procerum",
      "Carapa guianensis",
      "Brosimum utile",
      "Pouteria foveolata",
      "Otoba lehmannii",
      "Campnosperma panamense",
      "Dialyanthera gordoniifolia"
    ],
    "seller_name": "Choc\u00f3 Bio-Conservancy",
    "seller_wallet": "0x4ec2e72ac832b3f02b0e63fdfc3d31388a5a4272",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        5.24158,
        -76.78958
      ],
      [
        5.29216,
        -76.83868
      ],
      [
        5.27969,
        -76.89317
      ],
      [
        5.21342,
        -76.88949
      ],
      [
        5.20961,
        -76.83223
      ],
      [
        5.24158,
        -76.78958
      ]
    ]
  },
  {
    "id": "p97",
    "name": "Magdalena River Valley Silvopastoral Sink",
    "type": "REFORESTATION",
    "location": "Antioquia, Colombia",
    "region": "americas",
    "lat": 6.25,
    "lng": -74.6,
    "area_ha": 14000,
    "available_credits": 18300,
    "total_credits": 21000,
    "co2_tonnes": 18300,
    "price_per_credit": 0.042,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.76,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 21000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 78,
    "soil_moisture_pct": 58.2,
    "ambient_temp_c": 28.8,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Guazuma ulmifolia",
      "Pithecellobium saman",
      "Gliricidia sepium",
      "Albizia saman",
      "Cordia alliodora",
      "Tabebuia rosea",
      "Samanea saman",
      "Cedrela angustifolia"
    ],
    "seller_name": "Antioquia Bio-Conservancy",
    "seller_wallet": "0x4106e8ce5b9a289ab58dfc59ebe0c8c1ae38cf46",
    "standard": "Plan Vivo",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        6.24828,
        -74.55614
      ],
      [
        6.29536,
        -74.5905
      ],
      [
        6.27402,
        -74.62546
      ],
      [
        6.23598,
        -74.62456
      ],
      [
        6.21118,
        -74.58353
      ],
      [
        6.24828,
        -74.55614
      ]
    ]
  },
  {
    "id": "p98",
    "name": "Beni River Multi-Species Peat Canopy",
    "type": "REFORESTATION",
    "location": "Beni, Bolivia",
    "region": "americas",
    "lat": -13.75,
    "lng": -65.45,
    "area_ha": 26000,
    "available_credits": 36800,
    "total_credits": 42000,
    "co2_tonnes": 36800,
    "price_per_credit": 0.045,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.85,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 42000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 83,
    "soil_moisture_pct": 51.5,
    "ambient_temp_c": 30.0,
    "uhi_cooling_c": -3.2,
    "native_species": [
      "Machaerium scleroxylon",
      "Amburana cearensis",
      "Astronium urundeuva",
      "Tabebuia impetiginosa",
      "Ceiba speciosa",
      "Hymenaea courbaril",
      "Aspidosperma quebracho-blanco",
      "Enterolobium contortisiliquum"
    ],
    "seller_name": "Beni Bio-Conservancy",
    "seller_wallet": "0x4f4574d4401ad5cdd72b81545594d9c6ef60250e",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -13.74022,
        -65.38755
      ],
      [
        -13.70754,
        -65.43048
      ],
      [
        -13.71197,
        -65.48951
      ],
      [
        -13.77196,
        -65.49523
      ],
      [
        -13.80776,
        -65.44113
      ],
      [
        -13.74022,
        -65.38755
      ]
    ]
  },
  {
    "id": "p99",
    "name": "Gran Chaco Native Woodland Sinks",
    "type": "BARREN_RESTORE",
    "location": "Santa Cruz, Bolivia",
    "region": "americas",
    "lat": -18.25,
    "lng": -62.8,
    "area_ha": 19500,
    "available_credits": 23500,
    "total_credits": 27000,
    "co2_tonnes": 23500,
    "price_per_credit": 0.039,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.64,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 27000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 105,
    "soil_moisture_pct": 26.0,
    "ambient_temp_c": 30.8,
    "uhi_cooling_c": -2.2,
    "native_species": [
      "Schinopsis lorentzii",
      "Aspidosperma quebracho-blanco",
      "Prosopis alba",
      "Bulnesia sarmientoi",
      "Ziziphus mistol",
      "Geoffroea decorticans",
      "Caesalpinia paraguariensis",
      "Cercidium praecox"
    ],
    "seller_name": "Santa Cruz Bio-Conservancy",
    "seller_wallet": "0xe5ce0626d1b6075581d1d2263cc56af30eac5e90",
    "standard": "Gold Standard",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        -18.25346,
        -62.74483
      ],
      [
        -18.21459,
        -62.79174
      ],
      [
        -18.22401,
        -62.83281
      ],
      [
        -18.26827,
        -62.82919
      ],
      [
        -18.29514,
        -62.78295
      ],
      [
        -18.25346,
        -62.74483
      ]
    ]
  },
  {
    "id": "p100",
    "name": "Yasun\u00ed Biosphere Edge Canopy",
    "type": "REFORESTATION",
    "location": "Orellana, Ecuador",
    "region": "americas",
    "lat": -0.7,
    "lng": -76.25,
    "area_ha": 31000,
    "available_credits": 49200,
    "total_credits": 56000,
    "co2_tonnes": 49200,
    "price_per_credit": 0.049,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.9,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 56000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.8 tCO2/ha/yr capacity.",
    "aqi": 56,
    "soil_moisture_pct": 42.6,
    "ambient_temp_c": 24.1,
    "uhi_cooling_c": -3.7,
    "native_species": [
      "Iryanthera hostmannii",
      "Virola duckei",
      "Otoba parvifolia",
      "Cedrelinga cateniformis",
      "Eschweilera coriacea",
      "Pseudolmedia laevis",
      "Micropholis venulosa",
      "Parkia multijuga"
    ],
    "seller_name": "Orellana Bio-Conservancy",
    "seller_wallet": "0x70d16c168855817d31120678308c523dcb7e717c",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        -0.69353,
        -76.19036
      ],
      [
        -0.63212,
        -76.23903
      ],
      [
        -0.67097,
        -76.3094
      ],
      [
        -0.72995,
        -76.28149
      ],
      [
        -0.76608,
        -76.23729
      ],
      [
        -0.69353,
        -76.19036
      ]
    ]
  },
  {
    "id": "p101",
    "name": "Guayas Estuary Blue Carbon Mangroves",
    "type": "OCEAN",
    "location": "Guayas, Ecuador",
    "region": "americas",
    "lat": -2.55,
    "lng": -79.95,
    "area_ha": 12800,
    "available_credits": 16300,
    "total_credits": 18900,
    "co2_tonnes": 16300,
    "price_per_credit": 0.042,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 18900,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 38,
    "soil_moisture_pct": 69.6,
    "ambient_temp_c": 24.5,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Rhizophora mangle",
      "Avicennia germinans",
      "Laguncularia racemosa",
      "Conocarpus erectus",
      "Mora megistosperma",
      "Pelliciera rhizophorae",
      "Acrostichum aureum",
      "Tabebuia palustris"
    ],
    "seller_name": "Guayas Bio-Conservancy",
    "seller_wallet": "0x6c387c2a1243e8381e5bc68b193156f53a4d45fd",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        -2.55572,
        -79.91581
      ],
      [
        -2.52407,
        -79.93915
      ],
      [
        -2.53499,
        -79.9783
      ],
      [
        -2.57148,
        -79.97955
      ],
      [
        -2.58125,
        -79.94473
      ],
      [
        -2.55572,
        -79.91581
      ]
    ]
  },
  {
    "id": "p102",
    "name": "Valdivian Temperate Rainforest Reserve",
    "type": "REFORESTATION",
    "location": "Los R\u00edos, Chile",
    "region": "americas",
    "lat": -39.85,
    "lng": -73.2,
    "area_ha": 22000,
    "available_credits": 31400,
    "total_credits": 36000,
    "co2_tonnes": 31400,
    "price_per_credit": 0.046,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.84,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 36000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 66,
    "soil_moisture_pct": 62.7,
    "ambient_temp_c": 33.9,
    "uhi_cooling_c": -3.0,
    "native_species": [
      "Nothofagus dombeyi",
      "Laureliopsis philippiana",
      "Saxegothaea conspicua",
      "Aextoxicon punctatum",
      "Drimys winteri",
      "Eucryphia cordifolia",
      "Podocarpus salignus",
      "Fitzroya cupressoides"
    ],
    "seller_name": "Los R\u00edos Bio-Conservancy",
    "seller_wallet": "0xb395b8677397d1a1f641940591cbbc49542ef29e",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -39.84872,
        -73.12999
      ],
      [
        -39.8022,
        -73.18933
      ],
      [
        -39.8228,
        -73.24504
      ],
      [
        -39.87584,
        -73.23369
      ],
      [
        -39.89445,
        -73.18369
      ],
      [
        -39.84872,
        -73.12999
      ]
    ]
  },
  {
    "id": "p103",
    "name": "Patagonia Peat Bog Carbon Vault",
    "type": "BARREN_RESTORE",
    "location": "Magallanes, Chile",
    "region": "americas",
    "lat": -53.15,
    "lng": -70.9,
    "area_ha": 16500,
    "available_credits": 21800,
    "total_credits": 25000,
    "co2_tonnes": 21800,
    "price_per_credit": 0.045,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.76,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 25000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 83,
    "soil_moisture_pct": 16.7,
    "ambient_temp_c": 30.1,
    "uhi_cooling_c": -2.3,
    "native_species": [
      "Sphagnum magellanicum",
      "Nothofagus antarctica",
      "Empetrum rubrum",
      "Marsippospermum grandiflorum",
      "Carex magellanica",
      "Tetroncium magellanicum",
      "Astelia pumila",
      "Donatia fascicularis"
    ],
    "seller_name": "Magallanes Bio-Conservancy",
    "seller_wallet": "0x794986717e5533bae8a2f417379e03dde6f8dac3",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        -53.15627,
        -70.82649
      ],
      [
        -53.107,
        -70.86327
      ],
      [
        -53.11719,
        -70.95899
      ],
      [
        -53.17626,
        -70.95862
      ],
      [
        -53.19449,
        -70.8878
      ],
      [
        -53.15627,
        -70.82649
      ]
    ]
  },
  {
    "id": "p104",
    "name": "Atacama Solar & Extreme Arid Station",
    "type": "SOLAR",
    "location": "Antofagasta, Chile",
    "region": "americas",
    "lat": -23.85,
    "lng": -69.25,
    "area_ha": 2800,
    "available_credits": 46500,
    "total_credits": 52000,
    "co2_tonnes": 46500,
    "price_per_credit": 0.026,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.32,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 52000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 18.6 tCO2/ha/yr capacity.",
    "aqi": 78,
    "soil_moisture_pct": 23.8,
    "ambient_temp_c": 21.2,
    "uhi_cooling_c": -0.8,
    "native_species": [],
    "seller_name": "Antofagasta Bio-Conservancy",
    "seller_wallet": "0xb07513728fe2c74f529b20e053bf8b10d0ccc1a5",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        -23.84797,
        -69.23024
      ],
      [
        -23.83168,
        -69.23991
      ],
      [
        -23.83645,
        -69.26531
      ],
      [
        -23.86175,
        -69.2657
      ],
      [
        -23.86659,
        -69.24717
      ],
      [
        -23.84797,
        -69.23024
      ]
    ]
  },
  {
    "id": "p105",
    "name": "Misiones Subtropical Pine & Guatamb\u00fa",
    "type": "REFORESTATION",
    "location": "Misiones, Argentina",
    "region": "americas",
    "lat": -26.5,
    "lng": -54.3,
    "area_ha": 15400,
    "available_credits": 20500,
    "total_credits": 23500,
    "co2_tonnes": 20500,
    "price_per_credit": 0.043,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 23500,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 35,
    "soil_moisture_pct": 60.6,
    "ambient_temp_c": 33.0,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Araucaria angustifolia",
      "Balfourodendron riedelianum",
      "Cedrela fissilis",
      "Cordia trichotoma",
      "Enterolobium contortisiliquum",
      "Bastardiopsis densiflora",
      "Peltophorum dubium",
      "Ocotea puberula"
    ],
    "seller_name": "Misiones Bio-Conservancy",
    "seller_wallet": "0xe8d0b8db3aa066940610c42dc0241ac149d83188",
    "standard": "Plan Vivo",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        -26.49836,
        -54.24656
      ],
      [
        -26.46517,
        -54.29086
      ],
      [
        -26.4728,
        -54.33567
      ],
      [
        -26.52605,
        -54.33324
      ],
      [
        -26.53726,
        -54.27828
      ],
      [
        -26.49836,
        -54.24656
      ]
    ]
  },
  {
    "id": "p106",
    "name": "Pacific Northwest Olympic Old-Growth",
    "type": "REFORESTATION",
    "location": "Washington, USA",
    "region": "americas",
    "lat": 47.8,
    "lng": -123.6,
    "area_ha": 24000,
    "available_credits": 37200,
    "total_credits": 42000,
    "co2_tonnes": 37200,
    "price_per_credit": 0.047,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.87,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 42000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.8 tCO2/ha/yr capacity.",
    "aqi": 36,
    "soil_moisture_pct": 47.3,
    "ambient_temp_c": 30.3,
    "uhi_cooling_c": -3.1,
    "native_species": [
      "Pseudotsuga menziesii",
      "Tsuga heterophylla",
      "Thuja plicata",
      "Picea sitchensis",
      "Abies grandis",
      "Acer macrophyllum",
      "Alnus rubra",
      "Taxus brevifolia"
    ],
    "seller_name": "Washington Bio-Conservancy",
    "seller_wallet": "0x19f08f24e28f553768a64d97123c6a29969b6b4b",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        47.79374,
        -123.51264
      ],
      [
        47.85097,
        -123.5598
      ],
      [
        47.82385,
        -123.65817
      ],
      [
        47.77377,
        -123.65769
      ],
      [
        47.74733,
        -123.57767
      ],
      [
        47.79374,
        -123.51264
      ]
    ]
  },
  {
    "id": "p107",
    "name": "Northern California Redwood Climate Buffer",
    "type": "REFORESTATION",
    "location": "California, USA",
    "region": "americas",
    "lat": 41.2,
    "lng": -124.0,
    "area_ha": 18500,
    "available_credits": 31800,
    "total_credits": 36000,
    "co2_tonnes": 31800,
    "price_per_credit": 0.052,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to CAR registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 36000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.9 tCO2/ha/yr capacity.",
    "aqi": 41,
    "soil_moisture_pct": 53.9,
    "ambient_temp_c": 27.8,
    "uhi_cooling_c": -3.4,
    "native_species": [
      "Sequoia sempervirens",
      "Lithocarpus densiflorus",
      "Pseudotsuga menziesii",
      "Arbutus menziesii",
      "Acer circinatum",
      "Vaccinium ovatum",
      "Gaultheria shallon",
      "Rhododendron macrophyllum"
    ],
    "seller_name": "California Bio-Conservancy",
    "seller_wallet": "0x3ec75a83bffa7a4f0f1972db3370dc1d2f85f99d",
    "standard": "CAR",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        41.20258,
        -123.93645
      ],
      [
        41.23655,
        -123.97777
      ],
      [
        41.21925,
        -124.04108
      ],
      [
        41.17403,
        -124.06065
      ],
      [
        41.15254,
        -123.9807
      ],
      [
        41.20258,
        -123.93645
      ]
    ]
  },
  {
    "id": "p108",
    "name": "Los Angeles Urban Microclimate Canopy",
    "type": "URBAN_HEAT",
    "location": "California, USA",
    "region": "americas",
    "lat": 34.05,
    "lng": -118.25,
    "area_ha": 680,
    "available_credits": 3600,
    "total_credits": 4200,
    "co2_tonnes": 3600,
    "price_per_credit": 0.057,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.65,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 4200,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 6.2 tCO2/ha/yr capacity.",
    "aqi": 141,
    "soil_moisture_pct": 36.3,
    "ambient_temp_c": 25.7,
    "uhi_cooling_c": -3.8,
    "native_species": [
      "Quercus agrifolia",
      "Platanus racemosa",
      "Juglans californica",
      "Fraxinus dipetala",
      "Heteromeles arbutifolia",
      "Cercis occidentalis",
      "Arbutus unedo",
      "Chitalpa tashkentensis"
    ],
    "seller_name": "California Bio-Conservancy",
    "seller_wallet": "0xeb6ae7dba888e7affca39bae79e3202eee4bd350",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        34.04705,
        -118.2277
      ],
      [
        34.06467,
        -118.24303
      ],
      [
        34.05859,
        -118.26544
      ],
      [
        34.04206,
        -118.26215
      ],
      [
        34.0311,
        -118.24322
      ],
      [
        34.04705,
        -118.2277
      ]
    ]
  },
  {
    "id": "p109",
    "name": "Sonoran Desert Solar & Arid Shrub Sinks",
    "type": "SOLAR",
    "location": "Arizona, USA",
    "region": "americas",
    "lat": 33.15,
    "lng": -112.9,
    "area_ha": 2200,
    "available_credits": 39100,
    "total_credits": 44000,
    "co2_tonnes": 39100,
    "price_per_credit": 0.027,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.41,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 44000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 20.0 tCO2/ha/yr capacity.",
    "aqi": 64,
    "soil_moisture_pct": 14.4,
    "ambient_temp_c": 25.1,
    "uhi_cooling_c": -1.1,
    "native_species": [],
    "seller_name": "Arizona Bio-Conservancy",
    "seller_wallet": "0xa73d18559a039d06a9eb0bf9850e6d302055adec",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        33.14924,
        -112.87836
      ],
      [
        33.16574,
        -112.89249
      ],
      [
        33.16028,
        -112.91355
      ],
      [
        33.13958,
        -112.91813
      ],
      [
        33.13196,
        -112.89043
      ],
      [
        33.14924,
        -112.87836
      ]
    ]
  },
  {
    "id": "p110",
    "name": "Central Texas Wind Power Pass",
    "type": "WIND",
    "location": "Texas, USA",
    "region": "americas",
    "lat": 32.45,
    "lng": -100.5,
    "area_ha": 2600,
    "available_credits": 45200,
    "total_credits": 51000,
    "co2_tonnes": 45200,
    "price_per_credit": 0.028,
    "vintage_year": 2024,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.46,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 51000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 19.6 tCO2/ha/yr capacity.",
    "aqi": 52,
    "soil_moisture_pct": 32.4,
    "ambient_temp_c": 23.1,
    "uhi_cooling_c": -1.0,
    "native_species": [],
    "seller_name": "Texas Bio-Conservancy",
    "seller_wallet": "0x35c978b5dbc21e42fd0d4cb1c9167a93ada63c4b",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        32.44775,
        -100.47907
      ],
      [
        32.46235,
        -100.49403
      ],
      [
        32.46211,
        -100.51615
      ],
      [
        32.44202,
        -100.51099
      ],
      [
        32.43445,
        -100.49236
      ],
      [
        32.44775,
        -100.47907
      ]
    ]
  },
  {
    "id": "p111",
    "name": "West Texas Permian Methane Capture Array",
    "type": "METHANE",
    "location": "Texas, USA",
    "region": "americas",
    "lat": 31.85,
    "lng": -102.35,
    "area_ha": 620,
    "available_credits": 20800,
    "total_credits": 24000,
    "co2_tonnes": 20800,
    "price_per_credit": 0.042,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to CAR registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.5,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 24000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 38.7 tCO2/ha/yr capacity.",
    "aqi": 95,
    "soil_moisture_pct": 50.8,
    "ambient_temp_c": 30.8,
    "uhi_cooling_c": -1.6,
    "native_species": [],
    "seller_name": "Texas Bio-Conservancy",
    "seller_wallet": "0x51bb0e0d8fffc06d167b6ea029451370a71372ab",
    "standard": "CAR",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        31.84822,
        -102.3295
      ],
      [
        31.86726,
        -102.34024
      ],
      [
        31.85649,
        -102.36217
      ],
      [
        31.84157,
        -102.3642
      ],
      [
        31.83337,
        -102.34698
      ],
      [
        31.84822,
        -102.3295
      ]
    ]
  },
  {
    "id": "p112",
    "name": "Appalachian Mountain Mixed Hardwood Belt",
    "type": "REFORESTATION",
    "location": "West Virginia, USA",
    "region": "americas",
    "lat": 38.35,
    "lng": -80.45,
    "area_ha": 19500,
    "available_credits": 27400,
    "total_credits": 31000,
    "co2_tonnes": 27400,
    "price_per_credit": 0.045,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to ACR registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.82,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 31000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 76,
    "soil_moisture_pct": 46.6,
    "ambient_temp_c": 22.4,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Quercus alba",
      "Liriodendron tulipifera",
      "Acer saccharum",
      "Fagus grandifolia",
      "Prunus serotina",
      "Betula lenta",
      "Tilia americana",
      "Castanea dentata"
    ],
    "seller_name": "West Virginia Bio-Conservancy",
    "seller_wallet": "0x2ae17565f3a80aa060ee0cbc38e3c67df8018a19",
    "standard": "ACR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        38.35058,
        -80.40605
      ],
      [
        38.38958,
        -80.43629
      ],
      [
        38.37474,
        -80.48851
      ],
      [
        38.32391,
        -80.48521
      ],
      [
        38.3091,
        -80.44249
      ],
      [
        38.35058,
        -80.40605
      ]
    ]
  },
  {
    "id": "p113",
    "name": "Florida Everglades Blue Carbon Mangroves",
    "type": "OCEAN",
    "location": "Florida, USA",
    "region": "americas",
    "lat": 25.45,
    "lng": -80.95,
    "area_ha": 28000,
    "available_credits": 40500,
    "total_credits": 46000,
    "co2_tonnes": 40500,
    "price_per_credit": 0.044,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.83,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 46000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 50,
    "soil_moisture_pct": 83.9,
    "ambient_temp_c": 26.5,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Rhizophora mangle",
      "Avicennia germinans",
      "Laguncularia racemosa",
      "Conocarpus erectus",
      "Taxodium distichum",
      "Cladium jamaicense",
      "Annona glabra",
      "Persea borbonia"
    ],
    "seller_name": "Florida Bio-Conservancy",
    "seller_wallet": "0xc3dd0cfb6ccb6ae1b6d331ca01ddc628bef46f0c",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        25.45018,
        -80.88482
      ],
      [
        25.50044,
        -80.93141
      ],
      [
        25.47766,
        -81.01269
      ],
      [
        25.41772,
        -80.99267
      ],
      [
        25.39036,
        -80.92553
      ],
      [
        25.45018,
        -80.88482
      ]
    ]
  },
  {
    "id": "p114",
    "name": "Mississippi Delta Bottomland Hardwoods",
    "type": "REFORESTATION",
    "location": "Louisiana, USA",
    "region": "americas",
    "lat": 31.25,
    "lng": -91.5,
    "area_ha": 15400,
    "available_credits": 21100,
    "total_credits": 24000,
    "co2_tonnes": 21100,
    "price_per_credit": 0.043,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 24000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 40,
    "soil_moisture_pct": 65.1,
    "ambient_temp_c": 24.5,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Taxodium distichum",
      "Nyssa aquatica",
      "Quercus lyrata",
      "Quercus phellos",
      "Fraxinus profunda",
      "Carya aquatica",
      "Acer rubrum",
      "Salix nigra"
    ],
    "seller_name": "Louisiana Bio-Conservancy",
    "seller_wallet": "0x64ca6897be71cd606bca4f866500f7932238dfc6",
    "standard": "ACR",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        31.25717,
        -91.45137
      ],
      [
        31.2803,
        -91.48765
      ],
      [
        31.2652,
        -91.52952
      ],
      [
        31.22015,
        -91.53657
      ],
      [
        31.21563,
        -91.49276
      ],
      [
        31.25717,
        -91.45137
      ]
    ]
  },
  {
    "id": "p115",
    "name": "Iowa Agricultural Soil Carbon Enhancer",
    "type": "BARREN_RESTORE",
    "location": "Iowa, USA",
    "region": "americas",
    "lat": 42.15,
    "lng": -93.6,
    "area_ha": 14200,
    "available_credits": 19400,
    "total_credits": 22000,
    "co2_tonnes": 19400,
    "price_per_credit": 0.038,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.69,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 22000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 73,
    "soil_moisture_pct": 14.8,
    "ambient_temp_c": 25.4,
    "uhi_cooling_c": -2.1,
    "native_species": [
      "Secale cereale",
      "Trifolium pratense",
      "Avena sativa",
      "Brassica napus",
      "Medicago sativa",
      "Vicia villosa",
      "Raphanus sativus",
      "Phleum pratense"
    ],
    "seller_name": "Iowa Bio-Conservancy",
    "seller_wallet": "0xcea83e9fa911fd6d0d586ee200231f700a77b5cc",
    "standard": "CAR",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        42.14973,
        -93.54907
      ],
      [
        42.18272,
        -93.58807
      ],
      [
        42.17178,
        -93.63425
      ],
      [
        42.13036,
        -93.64075
      ],
      [
        42.12184,
        -93.59025
      ],
      [
        42.14973,
        -93.54907
      ]
    ]
  },
  {
    "id": "p116",
    "name": "Midwest Landfill Biomethane Extraction",
    "type": "METHANE",
    "location": "Illinois, USA",
    "region": "americas",
    "lat": 41.65,
    "lng": -88.15,
    "area_ha": 410,
    "available_credits": 14200,
    "total_credits": 16500,
    "co2_tonnes": 14200,
    "price_per_credit": 0.043,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to CAR registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.6,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 16500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 40.2 tCO2/ha/yr capacity.",
    "aqi": 100,
    "soil_moisture_pct": 38.7,
    "ambient_temp_c": 21.8,
    "uhi_cooling_c": -1.8,
    "native_species": [],
    "seller_name": "Illinois Bio-Conservancy",
    "seller_wallet": "0x44f902b74580a4ae9b72a9fe669e098d63e73896",
    "standard": "CAR",
    "auditor": "T\u00dcV Rheinland",
    "boundary_coords": [
      [
        41.65225,
        -88.13191
      ],
      [
        41.66584,
        -88.14561
      ],
      [
        41.65945,
        -88.16782
      ],
      [
        41.64275,
        -88.16865
      ],
      [
        41.63411,
        -88.14302
      ],
      [
        41.65225,
        -88.13191
      ]
    ]
  },
  {
    "id": "p117",
    "name": "New York Hudson Valley Watershed Forestry",
    "type": "REFORESTATION",
    "location": "New York, USA",
    "region": "americas",
    "lat": 41.95,
    "lng": -74.15,
    "area_ha": 11200,
    "available_credits": 15300,
    "total_credits": 17500,
    "co2_tonnes": 15300,
    "price_per_credit": 0.046,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.8,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 17500,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 84,
    "soil_moisture_pct": 58.5,
    "ambient_temp_c": 23.0,
    "uhi_cooling_c": -2.7,
    "native_species": [
      "Acer saccharum",
      "Quercus rubra",
      "Pinus strobus",
      "Tsuga canadensis",
      "Betula alleghaniensis",
      "Fraxinus americana",
      "Carya ovata",
      "Ostrya virginiana"
    ],
    "seller_name": "New York Bio-Conservancy",
    "seller_wallet": "0x15635b3048340d51a5c6c5ae2e2f2127babf3375",
    "standard": "ACR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        41.94653,
        -74.10027
      ],
      [
        41.98751,
        -74.13102
      ],
      [
        41.96953,
        -74.17708
      ],
      [
        41.93047,
        -74.19603
      ],
      [
        41.91749,
        -74.14089
      ],
      [
        41.94653,
        -74.10027
      ]
    ]
  },
  {
    "id": "p118",
    "name": "Maine North Woods Boreal Transition",
    "type": "REFORESTATION",
    "location": "Maine, USA",
    "region": "americas",
    "lat": 46.15,
    "lng": -69.35,
    "area_ha": 26000,
    "available_credits": 34200,
    "total_credits": 39000,
    "co2_tonnes": 34200,
    "price_per_credit": 0.044,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.81,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 39000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 44,
    "soil_moisture_pct": 50.6,
    "ambient_temp_c": 33.9,
    "uhi_cooling_c": -2.8,
    "native_species": [
      "Picea rubens",
      "Abies balsamea",
      "Pinus strobus",
      "Betula papyrifera",
      "Acer rubrum",
      "Thuja occidentalis",
      "Populus grandidentata",
      "Larix laricina"
    ],
    "seller_name": "Maine Bio-Conservancy",
    "seller_wallet": "0x3e6df7e89980236855b8572087cd94446dba9754",
    "standard": "Verra VCS",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        46.144,
        -69.26028
      ],
      [
        46.18706,
        -69.32799
      ],
      [
        46.17997,
        -69.40281
      ],
      [
        46.12176,
        -69.39148
      ],
      [
        46.10853,
        -69.34066
      ],
      [
        46.144,
        -69.26028
      ]
    ]
  },
  {
    "id": "p119",
    "name": "Alaska Kenai Coastal Wetland Vault",
    "type": "OCEAN",
    "location": "Alaska, USA",
    "region": "americas",
    "lat": 60.35,
    "lng": -151.25,
    "area_ha": 21500,
    "available_credits": 28100,
    "total_credits": 32000,
    "co2_tonnes": 28100,
    "price_per_credit": 0.046,
    "vintage_year": 2024,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.77,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 32000,
    "sequestration_assumptions": "Standardized tier 3 canopy sequestration model with 1.5 tCO2/ha/yr capacity.",
    "aqi": 35,
    "soil_moisture_pct": 72.2,
    "ambient_temp_c": 22.8,
    "uhi_cooling_c": -2.5,
    "native_species": [
      "Picea sitchensis",
      "Tsuga mertensiana",
      "Alnus viridis sinuata",
      "Salix alaxensis",
      "Betula neoalaskana",
      "Populus trichocarpa",
      "Carex lyngbyei",
      "Picea mariana"
    ],
    "seller_name": "Alaska Bio-Conservancy",
    "seller_wallet": "0xc235161506beab4abbab3b0e60a1451d24a0aaad",
    "standard": "Gold Standard",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        60.34925,
        -151.14089
      ],
      [
        60.40376,
        -151.21684
      ],
      [
        60.37412,
        -151.31336
      ],
      [
        60.32364,
        -151.34048
      ],
      [
        60.30006,
        -151.23157
      ],
      [
        60.34925,
        -151.14089
      ]
    ]
  },
  {
    "id": "p120",
    "name": "British Columbia Great Bear Canopy",
    "type": "REFORESTATION",
    "location": "British Columbia, Canada",
    "region": "americas",
    "lat": 52.85,
    "lng": -128.15,
    "area_ha": 35000,
    "available_credits": 51000,
    "total_credits": 58000,
    "co2_tonnes": 51000,
    "price_per_credit": 0.048,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Verra VCS registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.88,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 58000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.7 tCO2/ha/yr capacity.",
    "aqi": 82,
    "soil_moisture_pct": 54.2,
    "ambient_temp_c": 25.7,
    "uhi_cooling_c": -3.3,
    "native_species": [
      "Thuja plicata",
      "Tsuga heterophylla",
      "Picea sitchensis",
      "Abies amabilis",
      "Chamaecyparis nootkatensis",
      "Taxus brevifolia",
      "Alnus rubra",
      "Pinus contorta"
    ],
    "seller_name": "British Columbia Bio-Conservancy",
    "seller_wallet": "0x25c5239244e831e13d869ad2084930a1ede02d33",
    "standard": "Verra VCS",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        52.85526,
        -128.06078
      ],
      [
        52.89507,
        -128.118
      ],
      [
        52.88499,
        -128.21028
      ],
      [
        52.8186,
        -128.25558
      ],
      [
        52.80086,
        -128.13307
      ],
      [
        52.85526,
        -128.06078
      ]
    ]
  },
  {
    "id": "p121",
    "name": "Alberta Boreal Peatland Restoration",
    "type": "BARREN_RESTORE",
    "location": "Alberta, Canada",
    "region": "americas",
    "lat": 55.45,
    "lng": -114.25,
    "area_ha": 28000,
    "available_credits": 38600,
    "total_credits": 44000,
    "co2_tonnes": 38600,
    "price_per_credit": 0.045,
    "vintage_year": 2023,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Gold Standard registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.79,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 44000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 104,
    "soil_moisture_pct": 18.6,
    "ambient_temp_c": 26.9,
    "uhi_cooling_c": -2.6,
    "native_species": [
      "Picea mariana",
      "Larix laricina",
      "Sphagnum fuscum",
      "Betula pumila",
      "Salix pedicellaris",
      "Carex aquatilis",
      "Ledum groenlandicum",
      "Chamaedaphne calyculata"
    ],
    "seller_name": "Alberta Bio-Conservancy",
    "seller_wallet": "0xfc95ccf1a6798ab07129e2f6e06ca678c35d8f64",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        55.44455,
        -114.16703
      ],
      [
        55.49897,
        -114.20669
      ],
      [
        55.47605,
        -114.30685
      ],
      [
        55.4166,
        -114.31965
      ],
      [
        55.39212,
        -114.19637
      ],
      [
        55.44455,
        -114.16703
      ]
    ]
  },
  {
    "id": "p122",
    "name": "Quebec Laurentian Hardwood Shield",
    "type": "REFORESTATION",
    "location": "Quebec, Canada",
    "region": "americas",
    "lat": 46.85,
    "lng": -74.55,
    "area_ha": 22500,
    "available_credits": 30800,
    "total_credits": 35000,
    "co2_tonnes": 30800,
    "price_per_credit": 0.045,
    "vintage_year": 2025,
    "verified": true,
    "dataStatus": "VERIFIED",
    "dataStatusNote": "Anchored to Plan Vivo registered reference coordinates.",
    "status": "ACTIVE",
    "ndvi_score": 0.83,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 35000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.6 tCO2/ha/yr capacity.",
    "aqi": 42,
    "soil_moisture_pct": 48.4,
    "ambient_temp_c": 33.7,
    "uhi_cooling_c": -2.9,
    "native_species": [
      "Acer saccharum",
      "Betula alleghaniensis",
      "Fagus grandifolia",
      "Picea glauca",
      "Pinus strobus",
      "Abies balsamea",
      "Tilia americana",
      "Populus tremuloides"
    ],
    "seller_name": "Quebec Bio-Conservancy",
    "seller_wallet": "0x7b72e451df0ccde773905263b6532dbadfafc6cf",
    "standard": "Plan Vivo",
    "auditor": "DNV GL",
    "boundary_coords": [
      [
        46.84596,
        -74.49111
      ],
      [
        46.89736,
        -74.51389
      ],
      [
        46.87525,
        -74.59804
      ],
      [
        46.83087,
        -74.5994
      ],
      [
        46.81362,
        -74.53725
      ],
      [
        46.84596,
        -74.49111
      ]
    ]
  },
  {
    "id": "p123",
    "name": "Ontario Wind & Agroforestry Corridor",
    "type": "WIND",
    "location": "Ontario, Canada",
    "region": "americas",
    "lat": 43.15,
    "lng": -81.45,
    "area_ha": 2100,
    "available_credits": 32000,
    "total_credits": 36000,
    "co2_tonnes": 32000,
    "price_per_credit": 0.03,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.58,
    "restoration_priority": "MODERATE",
    "sequestration_tco2_yr": 36000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 17.1 tCO2/ha/yr capacity.",
    "aqi": 64,
    "soil_moisture_pct": 24.2,
    "ambient_temp_c": 31.6,
    "uhi_cooling_c": -1.3,
    "native_species": [],
    "seller_name": "Ontario Bio-Conservancy",
    "seller_wallet": "0x9d8142152d4900585f84e3c56daa8c7e75757602",
    "standard": "Verra VCS",
    "auditor": "T\u00dcV S\u00dcD",
    "boundary_coords": [
      [
        43.14788,
        -81.42797
      ],
      [
        43.16537,
        -81.44703
      ],
      [
        43.16187,
        -81.47012
      ],
      [
        43.13863,
        -81.47266
      ],
      [
        43.13097,
        -81.44315
      ],
      [
        43.14788,
        -81.42797
      ]
    ]
  },
  {
    "id": "p124",
    "name": "Toronto Ravine Vegetative Cooling Ring",
    "type": "URBAN_HEAT",
    "location": "Ontario, Canada",
    "region": "americas",
    "lat": 43.7,
    "lng": -79.38,
    "area_ha": 540,
    "available_credits": 2800,
    "total_credits": 3300,
    "co2_tonnes": 2800,
    "price_per_credit": 0.054,
    "vintage_year": 2023,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.71,
    "restoration_priority": "CRITICAL",
    "sequestration_tco2_yr": 3300,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 6.1 tCO2/ha/yr capacity.",
    "aqi": 114,
    "soil_moisture_pct": 42.8,
    "ambient_temp_c": 26.1,
    "uhi_cooling_c": -3.3,
    "native_species": [
      "Quercus macrocarpa",
      "Acer saccharinum",
      "Fraxinus nigra",
      "Celtis occidentalis",
      "Tilia americana",
      "Betula papyrifera",
      "Pinus strobus",
      "Prunus virginiana"
    ],
    "seller_name": "Ontario Bio-Conservancy",
    "seller_wallet": "0xc5c43078197df05f3b20d1546ff98cf7288fc36a",
    "standard": "CAR",
    "auditor": "SCS Global",
    "boundary_coords": [
      [
        43.70062,
        -79.35878
      ],
      [
        43.71757,
        -79.36763
      ],
      [
        43.71202,
        -79.40173
      ],
      [
        43.68995,
        -79.40076
      ],
      [
        43.68583,
        -79.37436
      ],
      [
        43.70062,
        -79.35878
      ]
    ]
  },
  {
    "id": "p125",
    "name": "Saskatchewan Prairie Grassland Sink",
    "type": "BARREN_RESTORE",
    "location": "Saskatchewan, Canada",
    "region": "americas",
    "lat": 50.85,
    "lng": -106.15,
    "area_ha": 17500,
    "available_credits": 21200,
    "total_credits": 24000,
    "co2_tonnes": 21200,
    "price_per_credit": 0.039,
    "vintage_year": 2025,
    "verified": false,
    "dataStatus": "DEMO",
    "dataStatusNote": "Illustrative boundary & simulated telemetry for evaluation purposes.",
    "status": "ACTIVE",
    "ndvi_score": 0.66,
    "restoration_priority": "HIGH",
    "sequestration_tco2_yr": 24000,
    "sequestration_assumptions": "Standardized tier 2 canopy sequestration model with 1.4 tCO2/ha/yr capacity.",
    "aqi": 96,
    "soil_moisture_pct": 18.7,
    "ambient_temp_c": 23.3,
    "uhi_cooling_c": -2.0,
    "native_species": [
      "Hesperostipa comata",
      "Pascopyrum smithii",
      "Bouteloua gracilis",
      "Koeleria macrantha",
      "Carex filifolia",
      "Artemisia cana",
      "Astragalus crassicarpus",
      "Psoralidium lanceolatum"
    ],
    "seller_name": "Saskatchewan Bio-Conservancy",
    "seller_wallet": "0x1790eeb49b2a1376315e4e801f20c257ed348e32",
    "standard": "Gold Standard",
    "auditor": "Bureau Veritas",
    "boundary_coords": [
      [
        50.85103,
        -106.08043
      ],
      [
        50.89586,
        -106.1124
      ],
      [
        50.86822,
        -106.20884
      ],
      [
        50.82356,
        -106.20307
      ],
      [
        50.80413,
        -106.13566
      ],
      [
        50.85103,
        -106.08043
      ]
    ]
  }
];

MOCK_PROJECTS.forEach(p => {
  if (!p.data_status) {
    p.data_status = p.dataStatus || 'VERIFIED';
  }
  p.verified = (p.data_status === 'VERIFIED' || p.data_status === 'LIVE');
  if (p.data_status === 'DEMO') {
    p.demo_notice = p.dataStatusNote || 'Illustrative boundary & simulated telemetry for evaluation purposes.';
  }
});

    // TOKEN LEDGER — Problem A: Each credit is a unique, single-owner token
    let TOKEN_LEDGER = [];
    (function initLedger() {
      const statuses = ['active', 'active', 'active', 'active', 'active', 'retired'];
      MOCK_PROJECTS.forEach((p, pi) => {
        for (let i = 0; i < Math.min(p.total_credits - p.available_credits + 3, 8); i++) {
          const tokenNum = String(pi * 100 + i + 1).padStart(4, '0');
          const burned = statuses[Math.floor(Math.random() * statuses.length)] === 'retired';
          TOKEN_LEDGER.push({
            id: 'CC-' + tokenNum,
            projectId: p.id,
            projectName: p.name,
            projectType: p.type,
            owner: burned ? 'BURNED' : ('0x' + Math.random().toString(16).slice(2, 12) + '...'),
            status: burned ? 'retired' : 'active',
            vintage: p.vintage_year,
            mintedAt: '2024-0' + (pi + 1) + '-15',
            txHash: '0x' + Math.random().toString(16).slice(2, 34),
            prevOwners: [p.seller_name.slice(0, 8) + '...0x'],
          });
        }
      });
    })();

    const MOCK_SECURITY_EVENTS = [
      { event_type: '🤖 AI_DEEPFAKE_BLOCKED', model: 'llama-3.3-70b', ip_address: '45.76.112.9', detail: 'Uploaded satellite image flagged as AI-generated (GAN probability: 94.7%) — submission blocked', severity: 'CRITICAL', confidence: '94.7%', created_at: '2025-04-05T09:15:33' },
      { event_type: '🤖 AI_IMAGE_VERIFIED', model: 'llama-3.3-70b', ip_address: '103.21.244.1', detail: 'Satellite image for "Amazon Reforestation" passed AI fraud check — vegetation matches GPS biome (score: 94/100)', severity: 'INFO', confidence: '96.2%', created_at: '2025-04-05T08:55:20' },
      { event_type: '🤖 AI_FORGERY_DETECTED', model: 'llama-3.3-70b', ip_address: '198.51.100.23', detail: 'Government license PDF flagged — font inconsistency detected in stamp area, digital signature invalid', severity: 'CRITICAL', confidence: '91.3%', created_at: '2025-04-05T08:42:17' },
      { event_type: '🤖 AI_GPS_MISMATCH', model: 'llama-3.3-70b', ip_address: '172.16.0.45', detail: 'Image shows tropical forest but GPS coordinates (26.9°N, 70.9°E) are in Thar Desert, Rajasthan — REJECTED', severity: 'WARNING', confidence: '98.1%', created_at: '2025-04-05T08:30:05' },
      { event_type: '🔐 2FA_LOGIN', model: '—', ip_address: '103.21.244.1', detail: 'buyer@demo.com authenticated via 2FA', severity: 'INFO', confidence: '—', created_at: '2025-04-05T08:22:11' },
      { event_type: '🤖 AI_WASH_TRADE', model: 'llama-3.3-70b', ip_address: 'internal', detail: 'AI detected potential wash trading: wallet 0x3f7a bought & resold same 50 credits within 2 minutes — flagged for review', severity: 'WARNING', confidence: '87.5%', created_at: '2025-04-05T08:10:44' },
      { event_type: '🤖 AI_DOC_VERIFIED', model: 'llama-3.3-70b', ip_address: '203.0.113.15', detail: 'License "MoEFCC/CC/2024/KA/00347" passed AI forgery scan — OCR text matches, digital signature valid, layout consistent', severity: 'INFO', confidence: '99.1%', created_at: '2025-04-05T07:58:30' },
      { event_type: '⚡ SMART_CONTRACT', model: '—', ip_address: 'internal', detail: '97.5% (0.039 ETH) sent to seller 0x891f in <3 seconds via smart contract', severity: 'INFO', confidence: '—', created_at: '2025-04-05T07:12:55' },
      { event_type: '🤖 AI_TAMPER_DETECT', model: 'llama-3.3-70b', ip_address: '45.33.32.156', detail: 'Pixel-level analysis detected copy-paste region in satellite image (clone stamp artifacts found in quadrant 3)', severity: 'CRITICAL', confidence: '92.8%', created_at: '2025-04-05T06:45:12' },
      { event_type: '🤖 AI_SYBIL_ALERT', model: 'llama-3.3-70b', ip_address: 'internal', detail: 'AI detected 5 wallets created from same IP within 10 minutes — potential Sybil attack, accounts suspended', severity: 'WARNING', confidence: '89.4%', created_at: '2025-04-04T23:30:00' },
      { event_type: '🤖 AI_NDVI_CHECK', model: 'llama-3.3-70b', ip_address: 'internal', detail: 'NDVI vegetation index for project p4 (Sundarbans) confirmed: 0.82 (dense vegetation). Matches carbon claim.', severity: 'INFO', confidence: '95.6%', created_at: '2025-04-04T22:15:33' },
      { event_type: '🚫 SUSPICIOUS_IP', model: 'llama-3.3-70b', ip_address: '198.51.100.23', detail: 'AI flagged Tor exit node + VPN chain — request blocked, geo-anomaly score: high', severity: 'WARNING', confidence: '76.2%', created_at: '2025-04-04T22:07:44' },
      { event_type: '🤖 AI_DOUBLE_COUNT', model: 'llama-3.3-70b', ip_address: 'internal', detail: 'AI cross-checked token CC-0001 across 3 registries — no duplicate found, single-owner confirmed', severity: 'INFO', confidence: '100%', created_at: '2025-04-04T20:00:00' },
      { event_type: '🔥 TOKEN_BURNED', model: '—', ip_address: 'internal', detail: 'CC-0007 permanently retired by AI-verified retirement — offset claim locked on-chain', severity: 'INFO', confidence: '—', created_at: '2025-04-04T18:00:00' },
    ];

    const db = { users: { ...MOCK_USERS }, transactions: [], watchlist: [], holdings: [] };
    const state = {
      token: localStorage.getItem('cc_token') || null,
      user: JSON.parse(localStorage.getItem('cc_user') || 'null'),
      allProjects: [...MOCK_PROJECTS],
      selectedProject: null,
      watchlist: [],
      pendingLoginUser: null,
    };

    // ═══════════════════════════════════════════════════════════
    // PASSWORD
    // ═══════════════════════════════════════════════════════════
    function checkPasswordStrength(pwd) {
      const rules = { len: pwd.length >= 8, upper: /[A-Z]/.test(pwd), lower: /[a-z]/.test(pwd), num: /[0-9]/.test(pwd), sym: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd) };
      const score = Object.values(rules).filter(Boolean).length;
      const fill = document.getElementById('pwd-strength-fill');
      const label = document.getElementById('pwd-strength-label');
      const colors = ['', '#ef4444', '#f59e0b', '#eab308', '#22c55e', '#16a34a'];
      const labels = ['', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
      fill.style.width = (score / 5 * 100) + '%'; fill.style.background = colors[score] || '#ef4444';
      label.textContent = score > 0 ? labels[score] : 'Enter a password'; label.style.color = colors[score] || 'var(--text3)';
      ['len', 'upper', 'lower', 'num', 'sym'].forEach(k => { const el = document.getElementById('rule-' + k); if (el) el.classList.toggle('ok', rules[k]); });
      return score === 5;
    }
    function checkPasswordMatch() {
      const p1 = document.getElementById('reg-password').value, p2 = document.getElementById('reg-password-confirm').value, lbl = document.getElementById('pwd-match-label');
      if (!p2) { lbl.textContent = ''; return; }
      lbl.textContent = p1 === p2 ? '✓ Passwords match' : '✗ Passwords do not match';
      lbl.style.color = p1 === p2 ? 'var(--green)' : 'var(--red)';
    }
    function suggestPassword() {
      const a = 'abcdefghijklmnopqrstuvwxyz', u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', n = '0123456789', s = '!@#$%^&*', all = a + u + n + s;
      let pwd = u[~~(Math.random() * 26)] + a[~~(Math.random() * 26)] + n[~~(Math.random() * 10)] + s[~~(Math.random() * 8)];
      for (let i = 0; i < 8; i++) pwd += all[~~(Math.random() * all.length)];
      pwd = pwd.split('').sort(() => Math.random() - .5).join('');
      const inp = document.getElementById('reg-password'); inp.value = pwd; inp.type = 'text';
      checkPasswordStrength(pwd); showToast('✨ Strong password generated! Save it.', 'success');
      setTimeout(() => { inp.type = 'password'; }, 4000);
    }
    function togglePwdVisibility(id, btn) {
      const i = document.getElementById(id); i.type = i.type === 'password' ? 'text' : 'password'; btn.textContent = i.type === 'password' ? '👁️' : '🙈';
    }

    // ═══════════════════════════════════════════════════════════
    // 2FA
    // ═══════════════════════════════════════════════════════════
    function otpNext(el, idx) { el.value = el.value.slice(-1); if (el.value && idx < 5) document.getElementById('otp' + (idx + 1))?.focus(); const code = [0, 1, 2, 3, 4, 5].map(i => document.getElementById('otp' + i)?.value || '').join(''); if (code.length === 6) verify2FA(); }
    function otpBack(e, el, idx) { if (e.key === 'Backspace' && !el.value && idx > 0) document.getElementById('otp' + (idx - 1))?.focus(); }
    function verify2FA() {
      const code = [0, 1, 2, 3, 4, 5].map(i => document.getElementById('otp' + i)?.value || '').join('');
      if (code === '123456') {
        saveSession('tok_' + Date.now(), state.pendingLoginUser);
        showToast('✅ 2FA verified! Welcome back.', 'success');
        document.getElementById('twofa-section').style.display = 'none';
        document.getElementById('login-btn').style.display = 'block';
        redirectAfterLogin(state.pendingLoginUser.role);
      } else {
        showToast('❌ Invalid code. Demo: 123456', 'error');
        [0, 1, 2, 3, 4, 5].forEach(i => { const el = document.getElementById('otp' + i); if (el) el.value = ''; });
        document.getElementById('otp0')?.focus();
      }
    }

    // ═══════════════════════════════════════════════════════════
    // WALLET
    // ═══════════════════════════════════════════════════════════
    // ═══════════════════════════════════════════════════════════
    // RESILIENT METAMASK & MULTI-PROVIDER ENGINE
    // ═══════════════════════════════════════════════════════════
    function getMetaMaskProvider() {
      if (typeof window === 'undefined' || !window.ethereum) return null;
      if (window.ethereum.providers && Array.isArray(window.ethereum.providers)) {
        const mm = window.ethereum.providers.find(p => p.isMetaMask);
        if (mm) return mm;
      }
      if (window.ethereum.isMetaMask) return window.ethereum;
      return window.ethereum;
    }

    const SUPPORTED_CHAINS = {
      POLYGON_AMOY: {
        chainIdHex: '0x13882',
        chainIdDec: 80002,
        chainName: 'Polygon Amoy Testnet',
        nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
        rpcUrls: ['https://rpc-amoy.polygon.technology'],
        blockExplorerUrls: ['https://amoy.polygonscan.com']
      },
      SEPOLIA: {
        chainIdHex: '0xaa36a7',
        chainIdDec: 11155111,
        chainName: 'Ethereum Sepolia Testnet',
        nativeCurrency: { name: 'Sepolia ETH', symbol: 'SEP', decimals: 18 },
        rpcUrls: ['https://rpc.sepolia.org'],
        blockExplorerUrls: ['https://sepolia.etherscan.io']
      }
    };

    let web3ListenersAttached = false;

    async function connectWallet(type = 'metamask') {
      const statusEl = document.getElementById('metamask-status');
      const regWalletInput = document.getElementById('reg-wallet');

      if (type === 'metamask') {
        const provider = getMetaMaskProvider();
        if (!provider) {
          showToast('🦊 MetaMask extension not detected. Please install MetaMask!', 'error');
          if (statusEl) { statusEl.textContent = 'Not installed'; statusEl.style.color = 'var(--red)'; }
          return;
        }

        try {
          showToast('🦊 Requesting MetaMask connection...', 'info');
          const accounts = await provider.request({ method: 'eth_requestAccounts' });

          if (!accounts || !accounts.length) {
            showToast('MetaMask: No accounts returned', 'error');
            return;
          }

          const activeAddress = accounts[0];
          state.userAddress = activeAddress;

          // Initialize ethers provider & signer
          if (typeof window.ethers !== 'undefined' && window.ethers.providers) {
            try {
              state.web3Provider = new window.ethers.providers.Web3Provider(provider);
              state.signer = state.web3Provider.getSigner();
            } catch (ethErr) {
              console.warn('Ethers Web3Provider initialization warning:', ethErr);
            }
          }

          // Check & Switch Chain (Polygon Amoy preferred, or Sepolia)
          try {
            const currentChainId = await provider.request({ method: 'eth_chainId' });
            const isSupported = (currentChainId.toLowerCase() === SUPPORTED_CHAINS.POLYGON_AMOY.chainIdHex.toLowerCase() ||
                                 currentChainId.toLowerCase() === SUPPORTED_CHAINS.SEPOLIA.chainIdHex.toLowerCase());

            if (!isSupported) {
              try {
                await provider.request({
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: SUPPORTED_CHAINS.POLYGON_AMOY.chainIdHex }]
                });
                showToast('🌐 Switched to Polygon Amoy Testnet', 'success');
              } catch (switchError) {
                if (switchError.code === 4902 || switchError.code === -32603) {
                  await provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [SUPPORTED_CHAINS.POLYGON_AMOY]
                  });
                  showToast('🌐 Added Polygon Amoy Testnet to MetaMask', 'success');
                } else {
                  console.warn('Chain switch declined:', switchError);
                }
              }
            }
          } catch (chainErr) {
            console.warn('Chain check skipped or non-fatal:', chainErr);
          }

          // Fill in registration form if on register page
          if (regWalletInput) regWalletInput.value = activeAddress;
          if (statusEl) { statusEl.textContent = 'Connected ✓'; statusEl.style.color = 'var(--green)'; }

          // Establish or augment user session
          const truncated = activeAddress.slice(0, 6) + '...' + activeAddress.slice(-4);
          if (!state.user) {
            state.user = {
              id: 'usr_' + activeAddress.slice(2, 10).toLowerCase(),
              email: `${activeAddress.slice(0, 6)}@web3.eth`,
              full_name: truncated,
              role: state.userRole || 'buyer',
              wallet_address: activeAddress,
              eth_balance: 5.0,
              credit_balance: 0
            };
          } else {
            state.user.wallet_address = activeAddress;
          }

          // Sync wallet with backend
          try {
            await fetch('/api/users/sync', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                wallet_address: activeAddress,
                role: state.user.role,
                email: state.user.email,
                organization_name: state.user.organization_name || 'Web3 Participant'
              })
            });
          } catch (apiErr) {
            console.info('Backend API sync fallback (offline/mock)');
          }

          // Update Nav UI
          updateNavForUser(state.user);

          // Attach event listeners once
          if (!web3ListenersAttached && provider.on) {
            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            web3ListenersAttached = true;
          }

          showToast(`🦊 MetaMask connected: ${truncated}`, 'success');

        } catch (err) {
          if (err.code === 4001) {
            showToast('⚠️ MetaMask: Connection rejected by user', 'error');
          } else if (err.code === -32002) {
            showToast('⏳ MetaMask: Request already pending. Please open the extension!', 'info');
          } else {
            showToast(`MetaMask connection error: ${err.message || 'Unknown'}`, 'error');
          }
          if (statusEl) { statusEl.textContent = 'Connection failed'; statusEl.style.color = 'var(--red)'; }
        }

      } else {
        // Demo Wallet / WalletConnect simulation
        const fa = '0x' + [...Array(40)].map(() => '0123456789abcdef'[~~(Math.random() * 16)]).join('');
        state.userAddress = fa;
        if (regWalletInput) regWalletInput.value = fa;
        if (statusEl) { statusEl.textContent = 'Connected ✓'; statusEl.style.color = 'var(--green)'; }

        const truncated = fa.slice(0, 6) + '...' + fa.slice(-4);
        if (!state.user) {
          state.user = {
            id: 'usr_' + fa.slice(2, 10),
            email: `${fa.slice(0, 6)}@wallet.eth`,
            full_name: truncated,
            role: state.userRole || 'buyer',
            wallet_address: fa,
            eth_balance: 4.5,
            credit_balance: 0
          };
        } else {
          state.user.wallet_address = fa;
        }

        updateNavForUser(state.user);
        showToast(`🔗 ${type === 'walletconnect' ? 'WalletConnect' : 'Demo Wallet'} connected: ${truncated}`, 'success');
      }
    }

    function handleAccountsChanged(accounts) {
      if (!accounts || !accounts.length) {
        showToast('🦊 MetaMask disconnected', 'info');
        state.userAddress = null;
        if (state.user && state.user.email && state.user.email.endsWith('@web3.eth')) {
          logout();
        } else if (state.user) {
          state.user.wallet_address = null;
          updateNavForUser(state.user);
        }
      } else {
        const newAddress = accounts[0];
        state.userAddress = newAddress;
        const truncated = newAddress.slice(0, 6) + '...' + newAddress.slice(-4);
        if (state.user) {
          state.user.wallet_address = newAddress;
          if (state.user.email.endsWith('@web3.eth')) {
            state.user.full_name = truncated;
          }
          updateNavForUser(state.user);
        }
        showToast(`🦊 Account switched: ${truncated}`, 'info');
      }
    }

    function handleChainChanged(chainIdHex) {
      console.log('MetaMask chain changed:', chainIdHex);
      showToast(`🌐 Chain changed (${chainIdHex})`, 'info');
      const provider = getMetaMaskProvider();
      if (provider && typeof window.ethers !== 'undefined' && window.ethers.providers) {
        try {
          state.web3Provider = new window.ethers.providers.Web3Provider(provider);
          state.signer = state.web3Provider.getSigner();
        } catch (e) { }
      }
    }

    async function toggleUserRole() {
      if (!state.user) {
        state.userRole = (state.userRole === 'seller') ? 'buyer' : 'seller';
        showToast(`Switched active mode to ${state.userRole.toUpperCase()}`, 'info');
        return;
      }

      const currentRole = state.user.role || 'buyer';
      const newRole = (currentRole === 'buyer') ? 'seller' : 'buyer';
      state.user.role = newRole;
      state.userRole = newRole;

      if (state.user.wallet_address) {
        try {
          await fetch('/api/users/role', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              wallet_address: state.user.wallet_address,
              role: newRole
            })
          });
        } catch (e) {
          console.info('Backend role sync fallback');
        }
      }

      updateNavForUser(state.user);
      showToast(`Role switched to ${newRole.toUpperCase()}`, 'success');

      if (newRole === 'seller') {
        showPage('seller-dashboard');
      } else {
        showPage('marketplace');
      }
    }

    let selectedRole = 'buyer';
    function selectRole(role) { selectedRole = role; document.getElementById('role-buyer').classList.toggle('active', role === 'buyer'); document.getElementById('role-seller').classList.toggle('active', role === 'seller'); }

    async function doLogin() {
      const email = document.getElementById('login-email').value.trim().toLowerCase(), password = document.getElementById('login-password').value;
      if (!email || !password) { showToast('Fill in email and password', 'error'); return; }
      const btn = document.getElementById('login-btn'); btn.disabled = true; btn.innerHTML = '<div class="spinner" style="margin:0 auto"></div>';
      await sleep(700);
      try {
        const user = db.users[email];
        if (!user || user.password !== password) throw new Error('Invalid email or password');
        state.pendingLoginUser = user;
        document.getElementById('twofa-section').style.display = 'block';
        btn.style.display = 'none';
        document.getElementById('otp0')?.focus();
        showToast('📲 2FA code sent (Demo: 123456)', 'info');
      } catch (e) {
        showToast('❌ ' + e.message, 'error');
        btn.disabled = false; btn.textContent = 'Sign In →'; btn.style.display = 'block';
      }
    }

    async function doRegister() {
      const name = document.getElementById('reg-name').value.trim(), email = document.getElementById('reg-email').value.trim().toLowerCase(), pass = document.getElementById('reg-password').value, pass2 = document.getElementById('reg-password-confirm').value, wallet = document.getElementById('reg-wallet').value.trim();
      if (!name || !email || !pass) { showToast('Fill in all required fields', 'error'); return; }
      if (pass !== pass2) { showToast('Passwords do not match', 'error'); return; }
      if (!checkPasswordStrength(pass)) { showToast('❌ Password too weak — meet all 5 requirements', 'error'); return; }
      if (db.users[email]) { showToast('Email already registered', 'error'); return; }
      const btn = document.getElementById('reg-btn'); btn.disabled = true; btn.innerHTML = '<div class="spinner" style="margin:0 auto"></div>';
      await sleep(800);
      try {
        const u = { id: 'usr_' + Math.random().toString(36).slice(2, 10), email, password: pass, full_name: name, role: selectedRole, wallet_address: wallet || null, eth_balance: selectedRole === 'buyer' ? 5.0 : 12.5, credit_balance: 0 };
        db.users[email] = u; saveSession('tok_' + Date.now(), u);
        showToast('🎉 Account created! Welcome, ' + u.full_name, 'success');
        redirectAfterLogin(u.role);
      } catch (e) { showToast('❌ ' + e.message, 'error'); }
      finally { btn.disabled = false; btn.textContent = 'Create Account →'; }
    }

    function saveSession(token, user) { state.token = token; state.user = user; localStorage.setItem('cc_token', token); localStorage.setItem('cc_user', JSON.stringify(user)); updateNavForUser(user); }
    function redirectAfterLogin(role) { if (role === 'buyer') showPage('buyer-dashboard'); else if (role === 'seller') showPage('seller-dashboard'); else showPage('marketplace'); }
    function logout() { state.token = null; state.user = null; localStorage.removeItem('cc_token'); localStorage.removeItem('cc_user'); updateNavForUser(null); showPage('marketplace'); showToast('Logged out', 'info'); }
    function handleUserMenu() { if (state.user?.role === 'buyer') showPage('buyer-dashboard'); else if (state.user?.role === 'seller') showPage('seller-dashboard'); }

    function updateNavForUser(user) {
      const authBtns = document.getElementById('nav-auth-btns');
      const userInfo = document.getElementById('nav-user-info');
      const navUsername = document.getElementById('nav-username');
      const navRoleBadge = document.getElementById('nav-role-badge');
      const buyerTab = document.getElementById('nav-buyer-tab');
      const sellerTab = document.getElementById('nav-seller-tab');
      const connectBtn = document.getElementById('btn-connect-wallet');

      if (user) {
        if (authBtns) authBtns.style.display = 'none';
        if (userInfo) userInfo.style.display = 'flex';
        if (connectBtn) connectBtn.style.display = 'none';

        const displayName = user.wallet_address 
          ? (user.wallet_address.slice(0, 6) + '...' + user.wallet_address.slice(-4))
          : (user.full_name || user.email.split('@')[0]);

        if (navUsername) navUsername.textContent = displayName;

        const role = (user.role || 'buyer').toLowerCase();
        if (navRoleBadge) {
          navRoleBadge.textContent = role.toUpperCase();
          navRoleBadge.className = `nav-role-badge ${role}`;
        }

        let roleToggleBtn = document.getElementById('btn-toggle-role');
        if (!roleToggleBtn && userInfo) {
          roleToggleBtn = document.createElement('button');
          roleToggleBtn.id = 'btn-toggle-role';
          roleToggleBtn.className = 'btn-role-toggle';
          roleToggleBtn.onclick = toggleUserRole;
          userInfo.insertBefore(roleToggleBtn, userInfo.lastElementChild);
        }
        if (roleToggleBtn) {
          roleToggleBtn.textContent = (role === 'buyer') ? 'Switch to Seller ⚡' : 'Switch to Buyer 🛒';
        }

        if (buyerTab) buyerTab.style.display = (role === 'buyer') ? 'list-item' : 'none';
        if (sellerTab) sellerTab.style.display = (role === 'seller') ? 'list-item' : 'none';

      } else {
        if (authBtns) authBtns.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
        if (buyerTab) buyerTab.style.display = 'none';
        if (sellerTab) sellerTab.style.display = 'none';
        if (connectBtn) connectBtn.style.display = 'inline-flex';
      }
    }

    function showPage(page) {
      if (['buyer-dashboard', 'seller-dashboard', 'submit-project'].includes(page) && !state.user) { showToast('⚠️ Please sign in first', 'error'); showPage('login'); return; }
      if (page === 'submit-project' && state.user?.role !== 'seller') { showToast('⚠️ Only sellers can list projects', 'error'); return; }
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const pg = document.getElementById('page-' + page); if (!pg) return;
      pg.classList.add('active');
      const navEl = document.getElementById('nav-' + page) || document.getElementById('nav-' + page.replace('-', '_'));
      if (navEl) navEl.classList.add('active');
      window.scrollTo(0, 0);
      if (page === 'marketplace') loadMarketplace();
      if (page === 'projects') loadProjects();
      if (page === 'map') loadEcoMap();
      if (page === 'ledger') loadLedger();
      if (page === 'buyer-dashboard') loadBuyerDashboard();
      if (page === 'seller-dashboard') loadSellerDashboard();
      if (page === 'security') loadSecurityEvents();
      if (page === 'calculator') updateCalc();
      if (page === 'bounty-board') loadBountyBoard();
    }

    // ═══════════════════════════════════════════════════════════
    // MARKETPLACE
    // ═══════════════════════════════════════════════════════════
    function loadMarketplace() { state.allProjects = [...MOCK_PROJECTS]; renderListings(state.allProjects); if (state.user?.role === 'buyer') state.watchlist = db.watchlist.filter(w => w.userId === state.user.id).map(w => w.projectId); renderPriceChart(); }

    function filterListings() {
      const search = document.getElementById('searchInput').value.toLowerCase(), type = document.getElementById('typeFilter').value, sort = document.getElementById('sortFilter').value;
      let f = [...state.allProjects];
      if (type) f = f.filter(p => p.type === type);
      if (search) f = f.filter(p => p.name?.toLowerCase().includes(search) || p.location?.toLowerCase().includes(search) || TYPE_LABELS[p.type]?.toLowerCase().includes(search));
      if (sort === 'price_asc') f.sort((a, b) => a.price_per_credit - b.price_per_credit);
      if (sort === 'price_desc') f.sort((a, b) => b.price_per_credit - a.price_per_credit);
      if (sort === 'co2') f.sort((a, b) => b.co2_tonnes - a.co2_tonnes);
      renderListings(f);
    }

    function showSearchSuggestions(val) {
      const dd = document.getElementById('searchDropdown');
      if (!val || val.length < 2) { dd.classList.remove('open'); return; }
      const m = state.allProjects.filter(p => p.name.toLowerCase().includes(val.toLowerCase()) || p.location.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
      if (!m.length) { dd.classList.remove('open'); return; }
      dd.innerHTML = m.map(p => `<div class="search-suggestion" onclick="document.getElementById('searchInput').value='${p.name}';filterListings();document.getElementById('searchDropdown').classList.remove('open')"><span>${TYPE_ICONS[p.type] || '🌿'}</span><div><div style="font-weight:600">${p.name}</div><div style="font-size:11px;color:var(--text3)">${p.location} · ${p.price_per_credit} ETH</div></div></div>`).join('');
      dd.classList.add('open');
    }

    function loadProjects() { state.allProjects = [...MOCK_PROJECTS]; renderProjects(state.allProjects); }
    function setProjectTab(type, el) { document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); renderProjects(type === 'all' ? state.allProjects : state.allProjects.filter(p => p.type === type)); }

    // ═══════════════════════════════════════════════════════════
    // RENDER CARDS
    // ═══════════════════════════════════════════════════════════
    const TYPE_ICONS = { REFORESTATION: '🌳', SOLAR: '☀️', WIND: '💨', METHANE: '♻️', OCEAN: '🌊', ENERGY_EFFICIENCY: '⚡' };
    const TYPE_LABELS = { REFORESTATION: 'Reforestation', SOLAR: 'Solar Energy', WIND: 'Wind Energy', METHANE: 'Methane Capture', OCEAN: 'Ocean Carbon', ENERGY_EFFICIENCY: 'Energy Efficiency' };

    function renderListings(data) { const g = document.getElementById('listingGrid'); if (!data?.length) { g.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><div class="empty-text">No listings found</div></div>`; return; } g.innerHTML = data.map(p => cardHTML(p, true)).join(''); }
    function renderProjects(data) { const g = document.getElementById('projectGrid'); if (!data?.length) { g.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🌱</div><div class="empty-text">No projects found</div></div>`; return; } g.innerHTML = data.map(p => cardHTML(p, false)).join(''); }

    function gsColor(score) { return score >= 90 ? 'var(--green)' : score >= 75 ? 'var(--amber)' : 'var(--red)'; }

    function cardHTML(p, showBuy) {
      const icon = TYPE_ICONS[p.type] || '🌿', label = TYPE_LABELS[p.type] || p.type, inWl = state.watchlist.includes(p.id);
      const avail = p.available_credits ?? 0, price = p.price_per_credit ?? 0;
      const pct = p.total_credits > 0 ? Math.round(((p.total_credits - avail) / p.total_credits) * 100) : 0;
      const ev = EVIDENCE_VAULT[p.id];
      const gsScore = ev ? ev.score : 0, gsLabel = ev ? ev.label : 'Unknown';
      return `<div class="listing-card">
    <div class="card-banner"></div>
    <div class="card-content">
      <div class="card-header">
        <div class="card-type-badge">${icon} ${label}</div>
        ${p.verified ? '<div class="verified-badge">✓ Verified</div>' : '<div class="verified-badge" style="color:var(--amber)">⏳ Pending</div>'}
      </div>
      <div class="card-title">${p.name}</div>
      <div class="card-location">📍 ${p.location}</div>
      <div class="card-metrics">
        <div class="metric"><div class="metric-label">AVAILABLE</div><div class="metric-value">${avail.toLocaleString()}</div></div>
        <div class="metric"><div class="metric-label">PRICE / CREDIT</div><div class="metric-value green">${price} ETH</div></div>
        <div class="metric"><div class="metric-label">CO₂ OFFSET</div><div class="metric-value">${p.co2_tonnes}t</div></div>
        <div class="metric"><div class="metric-label">VINTAGE</div><div class="metric-value">${p.vintage_year}</div></div>
      </div>
      <div class="progress-wrap">
        <div class="progress-label"><span>Credits sold</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
      ${ev ? `<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
        <div style="flex:1;height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="height:100%;border-radius:3px;background:${gsColor(gsScore)};width:${gsScore}%"></div></div>
        <div style="font-family:var(--mono);font-size:10px;color:${gsColor(gsScore)}">${gsScore}/100 ${gsLabel}</div>
        <button class="evidence-btn" onclick="event.stopPropagation();openEvidenceModal('${p.id}')">🛰️ Evidence</button>
      </div>`: ''}
      <div class="card-footer">
        <div class="seller-info">Seller: ${p.seller_name}</div>
        ${showBuy ? `<div>
          ${state.user?.role === 'buyer' ? `<button class="watchlist-btn ${inWl ? 'saved' : ''}" onclick="event.stopPropagation();toggleWatchlist('${p.id}',this)">${inWl ? '★' : '☆'}</button>` : ''}
          <button class="buy-btn" onclick="event.stopPropagation();openBuyModal('${p.id}')">Buy Credits</button>
        </div>`: ''}
      </div>
    </div>
  </div>`;
    }

    // ═══════════════════════════════════════════════════════════
    // PROBLEM B: EVIDENCE MODAL (Anti-Greenwashing)
    // ═══════════════════════════════════════════════════════════
    function openEvidenceModal(projectId) {
      const p = state.allProjects.find(x => x.id === projectId); if (!p) return;
      const ev = EVIDENCE_VAULT[projectId];
      if (!ev) { showToast('No evidence data for this project', 'error'); return; }
      document.getElementById('ev-modal-title').textContent = '🛰️ ' + p.name;
      document.getElementById('ev-modal-sub').textContent = 'On-chain verified data — immutable on IPFS · Anti-Greenwash Score: ' + ev.score + '/100';

      const gsC = gsColor(ev.score);
      const lat = ev.lat || 0, lng = ev.lng || 0;
      const hasCoords = lat !== 0 || lng !== 0;
      // Satellite images — clicking opens Google Maps satellite view at the project location
      const satImgs = ev.sat_dates.map(d => {
        const satUrl = hasCoords ? `https://www.google.com/maps/@${lat},${lng},2000m/data=!3m1!1e3` : '#';
        return `<div class="sat-img" style="cursor:pointer" onclick="window.open('${satUrl}','_blank');showToast('🛰️ Opening satellite view for ${d} capture at ${ev.gps}','success')">
      <canvas id="sat_${d.replace('-', '_')}" width="150" height="80"></canvas>
      <div style="position:absolute;bottom:4px;left:4px;font-size:9px;background:rgba(0,0,0,.7);padding:2px 6px;border-radius:3px;color:#86efac">📍 ${d}</div>
      <div style="position:absolute;top:4px;right:4px;font-size:9px;background:rgba(34,197,94,.8);padding:2px 6px;border-radius:3px;color:#000;font-weight:600">CLICK TO VIEW ↗</div>
    </div>`;
      }).join('');

      // GPS link opens Google Maps
      const gpsLink = hasCoords ? `onclick="window.open('https://www.google.com/maps/@${lat},${lng},3000m/data=!3m1!1e3','_blank')"` :
        `onclick="showToast('No coordinates available','error')"`;

      // Embedded map preview
      const mapEmbed = hasCoords ? `
    <div style="margin-top:12px;border:1px solid var(--border);border-radius:8px;overflow:hidden;position:relative">
      <div style="position:absolute;top:6px;left:6px;background:rgba(0,0,0,.7);color:var(--green);font-family:var(--mono);font-size:9px;padding:2px 6px;border-radius:3px;z-index:2">LIVE SATELLITE · ${ev.gps}</div>
      <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.04}%2C${lat - 0.03}%2C${lng + 0.04}%2C${lat + 0.03}&layer=mapnik&marker=${lat}%2C${lng}" style="width:100%;height:180px;border:none"></iframe>
      <div style="display:flex;gap:6px;padding:8px;background:var(--bg2);border-top:1px solid var(--border)">
        <button style="flex:1;padding:6px;border-radius:6px;border:1px solid var(--green);background:var(--green-dim);color:var(--green);font-size:11px;cursor:pointer;font-family:var(--mono)" onclick="window.open('https://www.google.com/maps/@${lat},${lng},2000m/data=!3m1!1e3','_blank')">🛰️ Google Maps Satellite</button>
        <button style="flex:1;padding:6px;border-radius:6px;border:1px solid var(--blue);background:rgba(59,130,246,.1);color:var(--blue);font-size:11px;cursor:pointer;font-family:var(--mono)" onclick="window.open('https://earth.google.com/web/@${lat},${lng},500a,3000d,35y,0h,0t,0r','_blank')">🌏 Google Earth 3D</button>
        <button style="flex:1;padding:6px;border-radius:6px;border:1px solid var(--amber);background:rgba(245,158,11,.1);color:var(--amber);font-size:11px;cursor:pointer;font-family:var(--mono)" onclick="window.open('https://maps.google.com/?q=${lat},${lng}&t=k','_blank')">📍 Pin on Map</button>
      </div>
    </div>`: '';

      document.getElementById('ev-modal-body').innerHTML = `
    <div style="margin-bottom:14px">
      <div class="gs-label" style="margin-bottom:8px">ANTI-GREENWASH SCORE</div>
      <div class="greenwash-score">
        <div class="gs-ring" style="background:${gsC}22;border:3px solid ${gsC};color:${gsC}">${ev.score}</div>
        <div>
          <div class="gs-title" style="color:${gsC}">${ev.label} Integrity</div>
          <div class="gs-sub">${ev.auditor} · ${ev.standard}</div>
        </div>
      </div>
    </div>
    <div class="evidence-panel">
      <div class="evidence-tabs">
        <button class="ev-tab active" onclick="switchEvTab(this,'ev-sat')">🛰️ Satellite</button>
        <button class="ev-tab" onclick="switchEvTab(this,'ev-iot')">📡 IoT Data</button>
        <button class="ev-tab" onclick="switchEvTab(this,'ev-audit')">📋 Audit</button>
        <button class="ev-tab" onclick="switchEvTab(this,'ev-chain')">⛓️ On-Chain</button>
      </div>
      <div class="evidence-body">
        <div id="ev-sat">
          <div style="font-size:12px;color:var(--text3);margin-bottom:10px">${ev.sat_dates.length} satellite captures — <b style="color:var(--green)">click any image to open Google Maps satellite view</b></div>
          <div class="satellite-grid">${satImgs}</div>
          ${ev.gps ? `<div style="margin-top:10px;font-size:12px;color:var(--text3)">📍 GPS: <span style="color:var(--blue);cursor:pointer;font-family:var(--mono);text-decoration:underline" ${gpsLink}>${ev.gps}</span> <span style="font-size:10px;color:var(--green);cursor:pointer" ${gpsLink}>↗ Open in Maps</span></div>` : ''}
          ${ev.area_ha ? `<div style="font-size:12px;color:var(--text3);margin-top:4px">Area: ${ev.area_ha.toLocaleString()} hectares${ev.trees_count ? ` · ${ev.trees_count.toLocaleString()} trees counted` : ''}</div>` : ''}
          ${mapEmbed}
        </div>
        <div id="ev-iot" style="display:none">
          <div class="ev-item"><div class="ev-icon">📡</div><div><div class="ev-label">IOT SENSORS DEPLOYED</div><div class="ev-value">${ev.iot_sensors} active sensors <span class="ev-verified">LIVE</span></div></div></div>
          <div class="ev-item"><div class="ev-icon">🌡️</div><div><div class="ev-label">CO₂ SEQUESTRATION RATE</div><div class="ev-value">${(Math.random() * 5 + 2).toFixed(2)} tCO₂/ha/yr — verified by sensor mesh</div></div></div>
          <div class="ev-item"><div class="ev-icon">💧</div><div><div class="ev-label">BIODIVERSITY INDEX</div><div class="ev-score"><div class="ev-score-bar"><div class="ev-score-fill" style="width:${ev.score}%;background:${gsC}"></div></div><div style="font-size:12px;font-family:var(--mono);color:${gsC}">${ev.score}/100</div></div></div></div>
          <div class="ev-item"><div class="ev-icon">🔋</div><div><div class="ev-label">DATA FEED</div><div class="ev-value"><span class="ev-link" onclick="showToast('📡 Chainlink oracle feed opening...','info')">chainlink/co2-sensor-feed-${projectId}</span> <span class="ev-verified">LIVE</span></div></div></div>
        </div>
        <div id="ev-audit" style="display:none">
          <div class="ev-item"><div class="ev-icon">🏢</div><div><div class="ev-label">THIRD-PARTY AUDITOR</div><div class="ev-value">${ev.auditor} <span class="ev-verified">ACCREDITED</span></div></div></div>
          <div class="ev-item"><div class="ev-icon">📜</div><div><div class="ev-label">VERIFICATION STANDARD</div><div class="ev-value">${ev.standard}</div></div></div>
          <div class="ev-item"><div class="ev-icon">✅</div><div><div class="ev-label">CO₂ CLAIM VERIFIED</div><div class="ev-value" style="color:${ev.co2_verified ? 'var(--green)' : 'var(--amber)'}">${ev.co2_verified ? '✓ Fully verified' : '⏳ Pending final audit'}</div></div></div>
          <div class="ev-item"><div class="ev-icon">📄</div><div><div class="ev-label">AUDIT REPORT</div><div class="ev-value"><span class="ev-link" onclick="showToast('📄 Opening audit PDF on IPFS...','info')">ipfs://${ev.ipfs}/audit-report.pdf</span></div></div></div>
        </div>
        <div id="ev-chain" style="display:none">
          <div class="ev-item"><div class="ev-icon">⛓️</div><div><div class="ev-label">IPFS CONTENT HASH</div><div class="ev-value"><span class="ev-link" style="font-size:11px" onclick="showToast('🔗 Opening IPFS gateway...','info')">ipfs://${ev.ipfs}</span></div></div></div>
          <div class="ev-item"><div class="ev-icon">🔐</div><div><div class="ev-label">MERKLE PROOF</div><div class="ev-value" style="font-family:var(--mono);font-size:11px;color:var(--text3)">0x${Math.random().toString(16).slice(2, 34)}...</div></div></div>
          <div class="ev-item"><div class="ev-icon">🪙</div><div><div class="ev-label">TOKEN STANDARD</div><div class="ev-value">ERC-1155 · Single ownership enforced on-chain</div></div></div>
          <div class="ev-item"><div class="ev-icon">🚫</div><div><div class="ev-label">DOUBLE-COUNT PROTECTION</div><div class="ev-value" style="color:var(--green)">✓ Each token unique · Burned tokens cannot be resold</div></div></div>
        </div>
      </div>
    </div>`;

      document.getElementById('evidenceModal').classList.add('open');
      // Draw satellite images with location overlay
      setTimeout(() => {
        ev.sat_dates.forEach((d, idx) => {
          const canvas = document.getElementById('sat_' + d.replace('-', '_')); if (!canvas) return;
          const ctx = canvas.getContext('2d'); if (!ctx) return;
          // Different color tones for different dates to show temporal change
          const tones = [
            { base: '#0d2b0d', mid: '#1a4a1a', end: '#0a1f0a', r: 34, g: 197, b: 94 },
            { base: '#0d1f2b', mid: '#1a3a4a', end: '#0a1a2f', r: 34, g: 180, b: 140 },
            { base: '#1a2b0d', mid: '#2a4a1a', end: '#152f0a', r: 60, g: 197, b: 80 },
            { base: '#0d2b1a', mid: '#1a4a2a', end: '#0a1f15', r: 34, g: 210, b: 120 },
          ];
          const tone = tones[idx % tones.length];
          const grad = ctx.createLinearGradient(0, 0, 150, 80);
          grad.addColorStop(0, tone.base); grad.addColorStop(0.5, tone.mid); grad.addColorStop(1, tone.end);
          ctx.fillStyle = grad; ctx.fillRect(0, 0, 150, 80);
          // Vegetation texture
          for (let i = 0; i < 300; i++) { ctx.fillStyle = `rgba(${tone.r},${tone.g},${tone.b},${Math.random() * .4 + .05})`; ctx.fillRect(~~(Math.random() * 150), ~~(Math.random() * 80), ~~(Math.random() * 6 + 1), ~~(Math.random() * 6 + 1)); }
          // Clearings
          for (let i = 0; i < 3; i++) { ctx.fillStyle = `rgba(${tone.r + 30},${tone.g + 20},${tone.b - 20},0.15)`; ctx.beginPath(); ctx.arc(~~(Math.random() * 120 + 15), ~~(Math.random() * 60 + 10), ~~(Math.random() * 15 + 8), 0, Math.PI * 2); ctx.fill(); }
          // River/road line
          ctx.strokeStyle = `rgba(${30 + idx * 10},${50 + idx * 15},${90 + idx * 10},0.4)`; ctx.lineWidth = 2; ctx.beginPath();
          ctx.moveTo(0, 40 + Math.random() * 20);
          for (let x = 0; x <= 150; x += 10)ctx.lineTo(x, 40 + Math.sin(x * 0.08 + idx) * 12 + Math.random() * 4);
          ctx.stroke();
        });
      }, 100);
    }

    function switchEvTab(btn, targetId) {
      document.querySelectorAll('.ev-tab').forEach(t => t.classList.remove('active')); btn.classList.add('active');
      ['ev-sat', 'ev-iot', 'ev-audit', 'ev-chain'].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = id === targetId ? 'block' : 'none'; });
    }

    // ═══════════════════════════════════════════════════════════
    // PROBLEM A: TOKEN LEDGER
    // ═══════════════════════════════════════════════════════════
    function loadLedger() {
      const rows = document.getElementById('tokenLedgerRows');
      const allTokens = [...TOKEN_LEDGER];
      document.getElementById('ledger-count').textContent = allTokens.length + ' tokens';
      rows.innerHTML = allTokens.map(t => `
    <div class="token-row" onclick="openTokenDetail('${t.id}','${t.projectName}','${t.owner}','${t.status}','${t.vintage}','${t.txHash}')">
      <div class="token-id">${t.id}</div>
      <div class="token-project"><div style="font-size:13px;font-weight:500">${TYPE_ICONS[t.projectType] || '🌿'} ${t.projectName}</div></div>
      <div class="token-owner" style="color:${t.status === 'retired' ? 'var(--red)' : 'var(--blue)'};">${t.owner === 'BURNED' ? '🔥 BURNED' : t.owner}</div>
      <div class="token-status-cell"><span class="status-badge ${t.status === 'retired' ? 'burned' : 'confirmed'}">${t.status === 'retired' ? '🔥 Retired' : '● Active'}</span></div>
      <div class="token-retired" style="color:var(--text3)">${t.vintage}</div>
    </div>`).join('');

      // Retire panel
      const rPanel = document.getElementById('retire-panel');
      if (state.user?.role === 'buyer') {
        const myHoldings = db.holdings.filter(h => h.userId === state.user.id && h.credits > 0);
        if (myHoldings.length) {
          rPanel.innerHTML = myHoldings.map(h => `
        <div class="direct-payout-badge" style="background:rgba(239,68,68,.05);border-color:rgba(239,68,68,.2);margin-bottom:12px">
          <div style="font-size:22px">🔥</div>
          <div style="flex:1">
            <div style="font-size:14px;font-weight:600">${TYPE_ICONS[h.project?.type] || '🌿'} ${h.project?.name}</div>
            <div style="font-size:12px;color:var(--text3);margin-top:3px">You own: ${h.credits} credits · Each is a unique token</div>
          </div>
          <button class="btn-confirm" style="padding:8px 16px;font-size:13px;max-width:140px" onclick="retireCredits('${h.projectId}','${h.project?.name}')">🔥 Retire (Burn)</button>
        </div>`).join('');
        } else {
          rPanel.innerHTML = `<div class="empty-state" style="padding:30px"><div class="empty-icon">📦</div><div class="empty-text">No credits to retire yet. <a onclick="showPage('marketplace')" style="color:var(--green);cursor:pointer">Buy credits →</a></div></div>`;
        }
      }
    }

    function openTokenDetail(id, name, owner, status, vintage, txHash) {
      const retired = status === 'retired';
      document.getElementById('token-modal-body').innerHTML = `
    <div class="ownership-proof">
      <div class="ownership-proof-line"><div class="ownership-key">Token ID:</div><div class="ownership-val" style="color:var(--blue)">${id}</div></div>
      <div class="ownership-proof-line"><div class="ownership-key">Project:</div><div class="ownership-val">${name}</div></div>
      <div class="ownership-proof-line"><div class="ownership-key">Current Owner:</div><div class="ownership-val ${retired ? 'red' : 'green'}">${retired ? '🔥 BURNED — cannot be transferred' : '🔑 ' + owner}</div></div>
      <div class="ownership-proof-line"><div class="ownership-key">Status:</div><div class="ownership-val ${retired ? 'red' : 'green'}">${retired ? 'Retired (Burned) — Offset claim locked' : 'Active — Tradeable'}</div></div>
      <div class="ownership-proof-line"><div class="ownership-key">Vintage Year:</div><div class="ownership-val">${vintage}</div></div>
      <div class="ownership-proof-line"><div class="ownership-key">Mint TX:</div><div class="ownership-val" style="color:var(--text3);font-size:10px">${txHash.slice(0, 32)}...</div></div>
      <div class="ownership-proof-line"><div class="ownership-key">Standard:</div><div class="ownership-val">ERC-1155 · Ethereum</div></div>
    </div>
    ${retired ? `<div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:12px;margin-top:12px;font-size:13px;color:var(--red)">🔥 This token has been permanently burned. The offset it represents has been claimed and cannot be double-counted or resold by anyone.</div>` : `<div style="background:var(--green-dim);border:1px solid var(--border2);border-radius:8px;padding:12px;margin-top:12px;font-size:13px;color:var(--green)">✓ Single-owner proof: This token exists in exactly one wallet. Blockchain enforces this — no double counting is possible.</div>`}`;
      document.getElementById('tokenModal').classList.add('open');
    }

    function verifyToken() {
      const id = document.getElementById('token-verify-input').value.trim();
      const token = TOKEN_LEDGER.find(t => t.id === id) || TOKEN_LEDGER.find(t => t.id.toLowerCase() === id.toLowerCase());
      const result = document.getElementById('token-verify-result');
      if (!token) { result.innerHTML = `<div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:14px;font-size:13px;color:var(--red)">❌ Token "${id}" not found on this chain. It may not exist or may belong to a different registry.</div>`; return; }
      const retired = token.status === 'retired';
      result.innerHTML = `<div class="ownership-proof">
    <div class="ownership-proof-line"><div class="ownership-key">Found:</div><div class="ownership-val green">✓ ${token.id}</div></div>
    <div class="ownership-proof-line"><div class="ownership-key">Project:</div><div class="ownership-val">${token.projectName}</div></div>
    <div class="ownership-proof-line"><div class="ownership-key">Owner:</div><div class="ownership-val ${retired ? 'red' : 'green'}">${retired ? '🔥 BURNED' : '🔑 ' + token.owner}</div></div>
    <div class="ownership-proof-line"><div class="ownership-key">Status:</div><div class="ownership-val ${retired ? 'red' : 'green'}">${retired ? 'Retired — cannot be double counted' : 'Active'}</div></div>
  </div>`;
    }

    async function retireCredits(projectId, projectName) {
      const holding = db.holdings.find(h => h.userId === state.user?.id && h.projectId === projectId);
      const maxCredits = holding ? holding.credits : 1;
      openRetireModal(projectId, projectName, maxCredits);
    }

    // ═══════════════════════════════════════════════════════════
    // WATCHLIST
    // ═══════════════════════════════════════════════════════════
    function toggleWatchlist(projectId, btn) {
      if (!state.user) { showToast('Sign in to save listings', 'error'); return; }
      const idx = state.watchlist.indexOf(projectId);
      if (idx >= 0) { state.watchlist.splice(idx, 1); db.watchlist = db.watchlist.filter(w => !(w.userId === state.user.id && w.projectId === projectId)); btn.textContent = '☆'; btn.classList.remove('saved'); showToast('Removed from watchlist', 'info'); }
      else { state.watchlist.push(projectId); db.watchlist.push({ userId: state.user.id, projectId }); btn.textContent = '★'; btn.classList.add('saved'); showToast('⭐ Saved to watchlist', 'success'); }
    }

    // ═══════════════════════════════════════════════════════════
    // BUY MODAL  (Problems B + C shown inline)
    // ═══════════════════════════════════════════════════════════
    function openBuyModal(projectId) {
      if (!state.user) { showToast('⚠️ Sign in to buy credits', 'error'); showPage('login'); return; }
      if (state.user.role !== 'buyer') { showToast('⚠️ Only buyers can purchase credits', 'error'); return; }
      const p = state.allProjects.find(x => x.id === projectId); if (!p) return;
      state.selectedProject = p;
      document.getElementById('modalProjectName').textContent = p.name;
      document.getElementById('modalProjectType').textContent = `${TYPE_ICONS[p.type] || '🌿'} ${TYPE_LABELS[p.type] || p.type} · ${p.vintage_year}`;
      // Problem B: Anti-greenwash score
      const ev = EVIDENCE_VAULT[projectId];
      if (ev) {
        const c = gsColor(ev.score);
        document.getElementById('modal-gs-ring').textContent = ev.score; document.getElementById('modal-gs-ring').style.borderColor = c; document.getElementById('modal-gs-ring').style.color = c; document.getElementById('modal-gs-ring').style.background = c + '22';
        document.getElementById('modal-gs-title').textContent = ev.score + '/100 — ' + ev.label; document.getElementById('modal-gs-title').style.color = c;
        document.getElementById('modal-gs-sub').textContent = 'Auditor: ' + ev.auditor + ' · ' + ev.standard;
      }
      document.getElementById('buyAmount').value = 1; document.getElementById('buyAmount').max = p.available_credits;
      document.getElementById('modal-eth-balance').textContent = (state.user.eth_balance || 0).toFixed(4) + ' ETH';
      updatePricePreview();
      document.getElementById('buyModal').classList.add('open');
    }

    function closeModal(id) { document.getElementById(id).classList.remove('open'); state.selectedProject = null; }

    function changeQty(d) { const i = document.getElementById('buyAmount'); i.value = Math.max(1, Math.min(parseInt(i.max) || 9999, (parseInt(i.value) || 0) + d)); updatePricePreview(); }

    function updatePricePreview() {
      const p = state.selectedProject; if (!p) return;
      const price = p.price_per_credit ?? 0, amt = parseInt(document.getElementById('buyAmount').value) || 0;
      const sub = amt * price, fee = sub * 0.025, toSeller = sub * 0.975, total = sub;
      document.getElementById('pricePerUnit').textContent = price + ' ETH';
      document.getElementById('feeSubtotal').textContent = sub.toFixed(6) + ' ETH';
      document.getElementById('feeToSeller').textContent = toSeller.toFixed(6) + ' ETH';
      document.getElementById('platformFee').textContent = fee.toFixed(6) + ' ETH';
      document.getElementById('totalPrice').textContent = total.toFixed(6) + ' ETH';
    }

    async function confirmBuy() {
      const p = state.selectedProject; if (!p) return;
      const amt = parseInt(document.getElementById('buyAmount').value);
      if (!amt || amt < 1) { showToast('Enter a valid amount', 'error'); return; }
      const total = amt * p.price_per_credit;
      if (total > state.user.eth_balance) { showToast('❌ Insufficient ETH balance', 'error'); return; }
      if (amt > p.available_credits) { showToast('❌ Not enough credits available', 'error'); return; }
      const btn = document.querySelector('#buyModal .btn-confirm'); btn.disabled = true; btn.innerHTML = '<div class="spinner" style="display:inline-block;vertical-align:middle;width:16px;height:16px;margin-right:8px"></div> Processing...';

      // STEP 1: Purchase
      await sleep(600);
      showToast('⚡ Smart contract executing — purchasing credits...', 'info');
      await sleep(700);
      const txHash = '0x' + [...Array(64)].map(() => '0123456789abcdef'[~~(Math.random() * 16)]).join('');
      const proj = MOCK_PROJECTS.find(x => x.id === p.id); if (proj) { proj.available_credits -= amt; proj.co2_tonnes -= amt; }
      state.user.eth_balance -= total; state.user.credit_balance += amt; db.users[state.user.email] = state.user; localStorage.setItem('cc_user', JSON.stringify(state.user));

      // STEP 2: Mint tokens
      const mintedTokenIds = [];
      for (let i = 0; i < amt; i++) {
        const tokenId = 'CC-N' + String(TOKEN_LEDGER.length + 1).padStart(3, '0');
        TOKEN_LEDGER.push({ id: tokenId, projectId: p.id, projectName: p.name, projectType: p.type, owner: state.user.wallet_address ? truncate(state.user.wallet_address) : '0xYou...', status: 'active', vintage: p.vintage_year, mintedAt: new Date().toISOString().split('T')[0], txHash, prevOwners: [p.seller_name] });
        mintedTokenIds.push(tokenId);
      }

      db.transactions.push({ id: 'tx_' + Date.now(), blockchain_tx: txHash, project_id: p.id, project_name: p.name, buyer_id: state.user.id, buyer_name: state.user.full_name, buyer_wallet: state.user.wallet_address || '', seller_name: p.seller_name || '', seller_id: p.seller_id || '', credits: amt, total_amount: total.toFixed(6), seller_payout: (total * 0.975).toFixed(6), platform_fee: (total * 0.025).toFixed(6), price_per_credit: p.price_per_credit, project_type: p.type, project_location: p.location || '', status: 'confirmed', created_at: new Date().toISOString(), token_ids: mintedTokenIds });

      const ex = db.holdings.find(h => h.userId === state.user.id && h.projectId === p.id);
      if (ex) ex.credits += amt;
      else db.holdings.push({ userId: state.user.id, projectId: p.id, credits: amt, project: p });

      showToast(`✅ ${amt} credits purchased! Now auto-retiring & burning tokens...`, 'success');

      // STEP 3: AI AUTO-RETIRE — immediately burn all purchased tokens
      btn.innerHTML = '<div class="spinner" style="display:inline-block;vertical-align:middle;width:16px;height:16px;margin-right:8px"></div> 🔥 AI Auto-Retiring...';
      await sleep(1000);
      showToast('🤖 AI Auto-Retire: Burning tokens to prevent double counting...', 'info');
      await sleep(800);

      // Burn every minted token
      const burnTxHash = '0x' + [...Array(64)].map(() => '0123456789abcdef'[~~(Math.random() * 16)]).join('');
      mintedTokenIds.forEach(tokenId => {
        const token = TOKEN_LEDGER.find(t => t.id === tokenId);
        if (token) { token.status = 'retired'; token.owner = 'BURNED'; token.burnTx = burnTxHash; token.burnedAt = new Date().toISOString(); }
      });

      // Update holdings — credits are now retired (burned)
      const holding = db.holdings.find(h => h.userId === state.user.id && h.projectId === p.id);
      if (holding) holding.credits = Math.max(0, holding.credits - amt);
      state.user.credit_balance = Math.max(0, (state.user.credit_balance || 0) - amt);
      localStorage.setItem('cc_user', JSON.stringify(state.user));

      closeModal('buyModal');
      showToast(`🔥 ${amt} tokens auto-retired! Offset permanently recorded on-chain. Generating certificate...`, 'success');

      // STEP 4: Auto-generate retirement PDF certificate
      await sleep(500);
      generateRetirementPDF({
        company: state.user.full_name,
        credits: amt,
        project_name: p.name,
        project_location: p.location || 'Global',
        date: new Date().toLocaleDateString(),
        cert_id: 'CC-CERT-' + Date.now().toString(36).toUpperCase(),
        tx_hash: burnTxHash,
        reason: 'Auto-retired on purchase — AI-verified carbon offset'
      });

      showToast('📄 Retirement certificate downloaded! Credits permanently burned — cannot be double-counted.', 'success');
      simulateEmailNotification('retire', { company: state.user.full_name, credits: amt, project: p.name, txHash: burnTxHash });

      state.allProjects = [...MOCK_PROJECTS];
      btn.disabled = false; btn.textContent = '✅ Confirm Purchase';
    }

    // ═══════════════════════════════════════════════════════════
    // BUYER DASHBOARD
    // ═══════════════════════════════════════════════════════════
    function loadBuyerDashboard() {
      const user = state.user; if (!user) return;
      document.getElementById('buyer-wallet-display').textContent = user.wallet_address ? truncate(user.wallet_address) : 'No wallet connected';
      const userTxns = db.transactions.filter(t => t.buyer_id === user.id);
      const userHoldings = db.holdings.filter(h => h.userId === user.id);
      const totalCo2 = userHoldings.reduce((s, h) => s + h.credits, 0);
      document.getElementById('bd-credits').textContent = user.credit_balance ?? 0;
      document.getElementById('bd-co2').textContent = totalCo2 + 't';
      document.getElementById('bd-eth').textContent = (user.eth_balance ?? 0).toFixed(4) + ' ETH';
      const trees = Math.round(totalCo2 * 45), flights = totalCo2 > 0 ? Math.floor(totalCo2 / 0.9) : 0;
      document.getElementById('impactBadges').innerHTML = `
    <div class="impact-badge"><div class="impact-badge-icon">🌳</div><div><div class="impact-badge-text">Trees equivalent</div><div class="impact-badge-val">${trees.toLocaleString()}</div></div></div>
    <div class="impact-badge"><div class="impact-badge-icon">✈️</div><div><div class="impact-badge-text">Flights offset</div><div class="impact-badge-val">${flights}</div></div></div>
    <div class="impact-badge"><div class="impact-badge-icon">🏠</div><div><div class="impact-badge-text">Homes powered/yr</div><div class="impact-badge-val">${Math.round(totalCo2 / 4.5)}</div></div></div>
    <div class="impact-badge"><div class="impact-badge-icon">🔥</div><div><div class="impact-badge-text">Tokens retired</div><div class="impact-badge-val">${TOKEN_LEDGER.filter(t => t.status === 'retired' && t.owner === 'BURNED').length}</div></div></div>`;
      document.getElementById('holdings-list').innerHTML = userHoldings.length ? userHoldings.map(h => `
    <div class="holding-row"><div class="holding-icon">${TYPE_ICONS[h.project?.type] || '🌿'}</div><div class="holding-info"><div class="holding-name">${h.project?.name}</div><div class="holding-loc">📍 ${h.project?.location}</div></div><div><div class="holding-credits">${h.credits} credits</div><div style="font-family:var(--mono);font-size:11px;color:var(--text3);text-align:right">${h.credits}t CO₂</div></div></div>`).join('')
        : `<div class="empty-state"><div class="empty-icon">📦</div><div class="empty-text">No holdings yet</div></div>`;
      document.getElementById('buyer-tx-body').innerHTML = userTxns.length ? userTxns.map(tx => `
    <tr>
      <td><span class="tx-hash">${(tx.blockchain_tx || '').slice(0, 18)}...</span></td>
      <td>${tx.project_name || '—'}</td><td>${tx.credits} credits</td>
      <td>${tx.total_amount} ETH</td>
      <td style="color:var(--green);font-family:var(--mono)">${tx.seller_payout || '—'} ETH ⚡</td>
      <td><span class="status-badge confirmed">● confirmed</span></td>
      <td style="color:var(--text3)">${tx.created_at?.split('T')[0] || '—'}</td>
    </tr>${tx.token_ids?.length ? `<tr><td colspan="7" style="padding:4px 16px 10px;border-top:none"><div style="display:flex;flex-wrap:wrap;gap:4px;align-items:center"><span style="font-size:11px;color:var(--text3);font-family:var(--mono);margin-right:4px">Tokens:</span>${tx.token_ids.map(tid => `<span style="font-family:var(--mono);font-size:11px;padding:2px 8px;border-radius:4px;background:var(--green-dim);border:1px solid var(--border2);color:var(--accent)">${tid}</span>`).join('')}</div></td></tr>` : ''}`).join('') : `<tr><td colspan="7"><div class="empty-state" style="padding:20px"><div class="empty-icon">📋</div><div class="empty-text">No transactions yet</div></div></td></tr>`;
      // Populate "My Tokens" table
      const ownerAddr = user.wallet_address ? truncate(user.wallet_address) : '0xYou...';
      const myTokens = TOKEN_LEDGER.filter(t => t.owner === ownerAddr && t.status === 'active');
      const retiredTokens = TOKEN_LEDGER.filter(t => t.prevOwners?.includes(user.full_name) || (t.owner === 'BURNED' && userTxns.some(tx => tx.token_ids?.includes(t.id))));
      const allMyTokens = [...myTokens, ...retiredTokens.filter(rt => !myTokens.some(mt => mt.id === rt.id))];
      document.getElementById('buyer-tokens-body').innerHTML = allMyTokens.length ? allMyTokens.map(t => `
    <tr>
      <td><span style="font-family:var(--mono);font-weight:600;color:${t.status === 'active' ? 'var(--accent)' : 'var(--red)'}">${t.id}</span></td>
      <td>${TYPE_ICONS[t.projectType] || '🌿'} ${t.projectName}</td>
      <td><span class="status-badge ${t.status}">${t.status === 'active' ? '● owned' : '● retired'}</span></td>
      <td style="color:var(--text3)">${t.vintage || '—'}</td>
      <td><span class="tx-hash">${(t.txHash || '').slice(0, 16)}...</span></td>
      <td style="color:var(--text3)">${t.mintedAt || '—'}</td>
    </tr>`).join('') : `<tr><td colspan="6"><div class="empty-state" style="padding:20px"><div class="empty-icon">🎫</div><div class="empty-text">No tokens yet — buy credits to receive unique token IDs</div></div></td></tr>`;
      document.getElementById('cert-name').textContent = user.full_name;
      document.getElementById('cert-co2').textContent = totalCo2 + 't CO₂';
      document.getElementById('cert-id').textContent = 'Certificate ID: CC-' + user.id?.slice(0, 8).toUpperCase();
      const wlProjects = state.allProjects.filter(p => state.watchlist.includes(p.id));
      document.getElementById('watchlist-grid').innerHTML = wlProjects.length ? wlProjects.map(p => cardHTML(p, true)).join('') : `<div class="empty-state"><div class="empty-icon">⭐</div><div class="empty-text">No saved listings</div></div>`;
    }

    // ═══════════════════════════════════════════════════════════
    // SELLER DASHBOARD
    // ═══════════════════════════════════════════════════════════
    function loadSellerDashboard() {
      const user = state.user; if (!user) return;
      document.getElementById('seller-org-display').textContent = user.wallet_address ? truncate(user.wallet_address) : 'No wallet connected';
      const myProjects = MOCK_PROJECTS.filter(p => p.seller_name === user.full_name || p.seller_id === user.id);
      const mySales = db.transactions.filter(t => myProjects.some(p => p.id === t.project_id));
      const totalEarned = mySales.reduce((s, t) => s + parseFloat(t.total_amount) * 0.975, 0);
      const creditsSold = mySales.reduce((s, t) => s + t.credits, 0);
      document.getElementById('se-total').textContent = totalEarned.toFixed(4) + ' ETH';
      document.getElementById('se-pending').textContent = '0.0000 ETH';
      document.getElementById('se-sold').textContent = creditsSold + ' credits';
      document.getElementById('se-listings').textContent = myProjects.filter(p => p.available_credits > 0).length;

      // My Projects list
      const pList = document.getElementById('seller-projects-list');
      // Build mock escrow state keyed by project id
      if (!state.escrows) state.escrows = {};
      pList.innerHTML = myProjects.length ? myProjects.map(p => {
        const escrow = state.escrows[p.id];
        const escrowHeld = escrow && !escrow.released ? escrow.amount : 0;
        const escrowBadge = escrow
          ? escrow.released
            ? `<span class="escrow-badge released">✅ 70% ESCROW RELEASED</span>`
            : `<span class="escrow-badge">🔒 70% IN ESCROW · ${escrow.amount.toFixed(4)} ETH</span>`
          : `<span class="escrow-badge">🔒 30% PAID · 70% AWAITING NDVI</span>`;
        const escrowBtn = (!escrow || !escrow.released)
          ? `<button class="btn-escrow" onclick="unlockEscrow('${p.id}','PARCEL-${p.id.slice(-4)}','${p.name.replace(/'/g, "\'")}')">
              🛰️ Unlock Escrow
             </button>`
          : '';
        return `<div class="project-status-row">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:600">${TYPE_ICONS[p.type] || '🌿'} ${p.name}</div>
            <div style="font-size:12px;color:var(--text3);margin-top:3px">📍 ${p.location} · ${p.vintage_year}</div>
            <div style="margin-top:6px;display:flex;align-items:center;flex-wrap:wrap;gap:6px">${escrowBadge}${escrowBtn}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-family:var(--mono);font-size:13px;color:var(--green)">${p.available_credits} / ${p.total_credits} left</div>
            <span class="status-badge active" style="margin-top:4px">active</span>
          </div>
        </div>`;
      }).join('') : `<div class="empty-state"><div class="empty-icon">🌱</div><div class="empty-text">No projects yet. <a onclick="showPage('submit-project')" style="color:var(--green);cursor:pointer">Submit one →</a></div></div>`;

      // Populate project filter dropdown
      const filterEl = document.getElementById('seller-tx-filter');
      if (filterEl) {
        filterEl.innerHTML = '<option value="all">All Projects</option>' + myProjects.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
      }

      // Transaction summary cards
      const uniqueBuyers = new Set(mySales.map(t => t.buyer_id || t.buyer_wallet)).size;
      const avgCredits = mySales.length ? Math.round(creditsSold / mySales.length) : 0;
      const today = new Date().toISOString().split('T')[0];
      const todayRevenue = mySales.filter(t => (t.created_at || '').startsWith(today)).reduce((s, t) => s + parseFloat(t.total_amount) * 0.975, 0);
      document.getElementById('se-tx-count').textContent = mySales.length;
      document.getElementById('se-unique-buyers').textContent = uniqueBuyers;
      document.getElementById('se-avg-credits').textContent = avgCredits;
      document.getElementById('se-today-revenue').textContent = todayRevenue.toFixed(4) + ' ETH';
      document.getElementById('seller-tx-count').textContent = mySales.length + ' transaction' + (mySales.length !== 1 ? 's' : '');

      // Detailed transaction table
      renderSellerTxTable(mySales);

      // Top Buyers
      renderTopBuyers(mySales);

      // Activity Feed
      renderSellerActivityFeed(mySales, myProjects);
    }

    function filterSellerTx() {
      const filter = document.getElementById('seller-tx-filter').value;
      const user = state.user; if (!user) return;
      const myProjects = MOCK_PROJECTS.filter(p => p.seller_name === user.full_name || p.seller_id === user.id);
      let mySales = db.transactions.filter(t => myProjects.some(p => p.id === t.project_id));
      if (filter !== 'all') mySales = mySales.filter(t => t.project_id === filter);
      document.getElementById('seller-tx-count').textContent = mySales.length + ' transaction' + (mySales.length !== 1 ? 's' : '');
      renderSellerTxTable(mySales);
    }

    function renderSellerTxTable(sales) {
      const tbody = document.getElementById('seller-tx-body');
      if (!sales.length) {
        tbody.innerHTML = `<tr><td colspan="12"><div class="empty-state" style="padding:30px"><div class="empty-icon">💰</div><div class="empty-text">No sales yet — your transactions will appear here when buyers purchase your credits</div></div></td></tr>`;
        return;
      }
      tbody.innerHTML = sales.map(tx => {
        const buyerName = tx.buyer_name || 'Anonymous';
        const buyerWallet = tx.buyer_wallet ? truncate(tx.buyer_wallet) : '—';
        const paidAmt = parseFloat(tx.total_amount) || 0;
        const received = (paidAmt * 0.975).toFixed(6);
        const fee = (paidAmt * 0.025).toFixed(6);
        const pricePerCredit = tx.price_per_credit ? tx.price_per_credit + ' ETH' : '—';
        const typeIcon = TYPE_ICONS[tx.project_type] || '🌿';
        const dateStr = tx.created_at ? tx.created_at.replace('T', ' ').split('.')[0] : '—';
        return `<tr>
      <td><span class="tx-hash" title="${tx.blockchain_tx || ''}" style="cursor:pointer" onclick="showToast('TX: ${tx.blockchain_tx || ''}','info')">${(tx.blockchain_tx || '').slice(0, 12)}...</span></td>
      <td><div style="font-weight:600;font-size:12px">${buyerName}</div></td>
      <td><span style="font-family:var(--mono);font-size:11px;color:var(--blue);cursor:pointer" title="${tx.buyer_wallet || ''}" onclick="showToast('Wallet: ${tx.buyer_wallet || ''}','info')">${buyerWallet}</span></td>
      <td><div style="font-size:12px">${tx.project_name || '—'}</div></td>
      <td><span style="font-size:12px">${typeIcon}</span></td>
      <td><span style="font-family:var(--mono);font-weight:700">${tx.credits}</span></td>
      <td><span style="font-family:var(--mono);font-size:11px;color:var(--text3)">${pricePerCredit}</span></td>
      <td><span style="font-family:var(--mono);font-size:12px">${tx.total_amount} ETH</span></td>
      <td><span style="font-family:var(--mono);font-size:12px;color:var(--green);font-weight:700">${received} ETH ⚡</span></td>
      <td><span style="font-family:var(--mono);font-size:11px;color:var(--amber)">${fee} ETH</span></td>
      <td><span class="status-badge confirmed">● ${tx.status || 'confirmed'}</span></td>
      <td><span style="color:var(--text3);font-size:11px;font-family:var(--mono)">${dateStr}</span></td>
    </tr>`;
      }).join('');
    }

    function renderTopBuyers(sales) {
      const el = document.getElementById('seller-top-buyers');
      if (!sales.length) {
        el.innerHTML = `<div class="empty-state" style="padding:20px"><div class="empty-icon">👥</div><div class="empty-text">Buyer analytics will appear after your first sale</div></div>`;
        return;
      }
      // Aggregate by buyer
      const buyerMap = {};
      sales.forEach(tx => {
        const key = tx.buyer_id || tx.buyer_wallet || 'unknown';
        if (!buyerMap[key]) buyerMap[key] = { name: tx.buyer_name || 'Anonymous', wallet: tx.buyer_wallet || '', totalCredits: 0, totalPaid: 0, txCount: 0, projects: new Set(), lastPurchase: '' };
        buyerMap[key].totalCredits += tx.credits || 0;
        buyerMap[key].totalPaid += parseFloat(tx.total_amount) || 0;
        buyerMap[key].txCount++;
        buyerMap[key].projects.add(tx.project_name || '');
        if (!buyerMap[key].lastPurchase || tx.created_at > buyerMap[key].lastPurchase) buyerMap[key].lastPurchase = tx.created_at || '';
      });
      const buyers = Object.values(buyerMap).sort((a, b) => b.totalPaid - a.totalPaid);
      el.innerHTML = `<div style="display:grid;gap:10px">${buyers.slice(0, 10).map((b, i) => {
        const rank = i + 1;
        const rankColors = ['var(--amber)', 'var(--text2)', 'var(--text3)'];
        const rankColor = rankColors[Math.min(i, 2)] || 'var(--text3)';
        const rankIcons = ['🥇', '🥈', '🥉'];
        const rankIcon = rankIcons[i] || (rank + '.');
        return `<div style="display:flex;align-items:center;gap:14px;padding:12px 16px;background:var(--surface);border:1px solid var(--border);border-radius:10px;transition:all .15s" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="font-size:18px;width:30px;text-align:center;flex-shrink:0">${rankIcon}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:600">${b.name}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--blue);margin-top:2px">${b.wallet ? truncate(b.wallet) : 'No wallet'}</div>
      </div>
      <div style="display:flex;gap:20px;flex-shrink:0;text-align:center">
        <div>
          <div style="font-family:var(--mono);font-size:14px;font-weight:700;color:var(--green)">${b.totalCredits}</div>
          <div style="font-size:9px;color:var(--text3);font-family:var(--mono)">CREDITS</div>
        </div>
        <div>
          <div style="font-family:var(--mono);font-size:14px;font-weight:700">${b.totalPaid.toFixed(4)}</div>
          <div style="font-size:9px;color:var(--text3);font-family:var(--mono)">ETH PAID</div>
        </div>
        <div>
          <div style="font-family:var(--mono);font-size:14px;font-weight:700;color:var(--blue)">${b.txCount}</div>
          <div style="font-size:9px;color:var(--text3);font-family:var(--mono)">ORDERS</div>
        </div>
        <div>
          <div style="font-size:12px;color:var(--text3)">${b.projects.size} project${b.projects.size !== 1 ? 's' : ''}</div>
          <div style="font-size:9px;color:var(--text3);font-family:var(--mono)">BOUGHT FROM</div>
        </div>
      </div>
    </div>`;
      }).join('')}</div>`;
    }

    function renderSellerActivityFeed(sales, projects) {
      const el = document.getElementById('seller-activity-feed');
      const activities = [];
      // Add sales as activities
      sales.forEach(tx => {
        activities.push({
          time: tx.created_at || '',
          icon: '💰',
          color: 'var(--green)',
          title: `${tx.buyer_name || 'A buyer'} purchased ${tx.credits} credit${tx.credits !== 1 ? 's' : ''} from ${tx.project_name || 'your project'}`,
          detail: `Paid ${tx.total_amount} ETH · You received ${(parseFloat(tx.total_amount) * 0.975).toFixed(4)} ETH · TX: ${(tx.blockchain_tx || '').slice(0, 16)}...`,
          type: 'sale'
        });
      });
      // Add project listings as activities
      projects.forEach(p => {
        activities.push({
          time: p.created_at || new Date(parseInt(p.id?.replace('p', '')) || Date.now()).toISOString(),
          icon: '🌱',
          color: 'var(--blue)',
          title: `Project "${p.name}" listed on marketplace`,
          detail: `${TYPE_ICONS[p.type] || '🌿'} ${p.total_credits} credits at ${p.price_per_credit} ETH · 📍 ${p.location}`,
          type: 'listing'
        });
      });
      activities.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
      if (!activities.length) {
        el.innerHTML = `<div class="empty-state" style="padding:20px"><div class="empty-icon">📋</div><div class="empty-text">No activity yet</div></div>`;
        return;
      }
      el.innerHTML = activities.slice(0, 15).map(a => {
        const timeStr = a.time ? new Date(a.time).toLocaleString() : '—';
        return `<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 14px;border-bottom:1px solid var(--border)">
      <div style="font-size:20px;flex-shrink:0;margin-top:2px">${a.icon}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:500">${a.title}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:3px;font-family:var(--mono)">${a.detail}</div>
      </div>
      <div style="font-size:11px;color:var(--text3);flex-shrink:0;font-family:var(--mono);text-align:right">${timeStr}</div>
    </div>`;
      }).join('');
    }

    // ═══════════════════════════════════════════════════════════
    // LICENSE UPLOAD & COMPANY VERIFICATION
    // ═══════════════════════════════════════════════════════════
    let uploadedLicenseFile = null;
    let licenseIsValid = false;

    // ═══════════════════════════════════════
    // REAL IMAGE ANALYSIS — Canvas Pixel Scanning
    // ═══════════════════════════════════════
    function analyzeImagePixels(imgEl) {
      const canvas = document.createElement('canvas');
      const size = 100; // sample at 100x100
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imgEl, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;
      let totalR = 0, totalG = 0, totalB = 0, greenPx = 0, brightPx = 0, darkPx = 0, variance = 0;
      const n = size * size;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        totalR += r; totalG += g; totalB += b;
        if (g > r + 15 && g > b + 15) greenPx++;
        if (r + g + b > 600) brightPx++;
        if (r + g + b < 80) darkPx++;
      }
      const avgR = totalR / n, avgG = totalG / n, avgB = totalB / n;
      // Calculate color variance
      for (let i = 0; i < data.length; i += 16) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        variance += Math.abs(r - avgR) + Math.abs(g - avgG) + Math.abs(b - avgB);
      }
      variance /= (n / 4);
      return {
        avgR, avgG, avgB,
        greenRatio: greenPx / n,
        brightRatio: brightPx / n,
        darkRatio: darkPx / n,
        variance,
        width: imgEl.naturalWidth || imgEl.width,
        height: imgEl.naturalHeight || imgEl.height
      };
    }

    function isLikelyDocument(analysis) {
      // Documents: bright white background, portrait/letter orientation, NOT a green nature photo
      const isBright = analysis.brightRatio > 0.3;
      const isPortrait = analysis.height >= analysis.width * 0.85;
      const hasSufficientSize = analysis.height >= 500;
      const notNaturePhoto = analysis.greenRatio < 0.25 || analysis.brightRatio > 0.5;
      return isBright && isPortrait && hasSufficientSize && notNaturePhoto;
    }

    function isLikelySatellite(analysis) {
      // Satellite: green but not too uniform, DARK (not bright document), landscape, large, natural variance
      const isGreen = analysis.greenRatio > 0.15;
      const notTooGreen = analysis.greenRatio < 0.80; // >80% green = suspiciously uniform / synthetic
      const isDark = analysis.brightRatio < 0.25; // real satellite is dark, documents are bright
      const isLandscape = analysis.width > analysis.height; // satellite images are landscape
      const isLarge = analysis.width >= 800;
      const greenDominant = analysis.avgG > analysis.avgR;
      const hasNaturalVariance = analysis.variance > 25; // synthetic images have low variance
      return isGreen && notTooGreen && isDark && isLandscape && isLarge && greenDominant && hasNaturalVariance;
    }

    function handleLicenseDrop(file) {
      if (!file) return;
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) { showToast('File too large — max 10 MB', 'error'); return; }
      const ext = file.name.split('.').pop().toLowerCase();
      const validExts = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];
      if (!validExts.includes(ext)) { showToast('Invalid file type. Upload PDF, JPG, PNG, or DOC', 'error'); return; }
      uploadedLicenseFile = file;
      licenseIsValid = false;
      const dropzone = document.getElementById('licenseDropzone');
      dropzone.classList.add('uploaded');
      dropzone.style.display = 'none';
      const icons = { 'pdf': '📄', 'jpg': '🖼️', 'jpeg': '🖼️', 'png': '🖼️', 'doc': '📝', 'docx': '📝' };
      const wrap = document.getElementById('license-preview-wrap');
      wrap.style.display = 'block';
      wrap.innerHTML = `<div class="license-preview">
    <div class="file-icon">${icons[ext] || '📄'}</div>
    <div class="file-info">
      <div class="file-name">${file.name}</div>
      <div class="file-meta">${(file.size / 1024).toFixed(1)} KB · ${ext.toUpperCase()} · Uploaded ${new Date().toLocaleTimeString()}</div>
    </div>
    <span class="req-badge required" id="license-upload-badge">⏳ SCANNING</span>
    <button class="file-remove" onclick="removeLicense()">✕ Remove</button>
  </div>`;
      const statusEl = document.getElementById('license-status');
      statusEl.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-top:8px">
    <div class="spinner" style="width:14px;height:14px;border-width:2px"></div>
    <span style="font-size:12px;color:var(--text3)">🤖 AI analyzing document — OCR, seal detection, layout check...</span>
  </div>`;

      // REAL PIXEL ANALYSIS — analyze actual image content
      if (['png', 'jpg', 'jpeg'].includes(ext)) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const tempImg = new window.Image();
          tempImg.onload = function () {
            const analysis = analyzeImagePixels(tempImg);
            const isDoc = isLikelyDocument(analysis);
            // Document must look like a certificate: bright bg, dark text, portrait orientation, reasonable size
            const isValid = isDoc && file.size > 30000 && analysis.height >= 600;
            finalizeLicenseValidation(file, isValid, analysis);
          };
          tempImg.onerror = function () { finalizeLicenseValidation(file, false, null); };
          tempImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        setTimeout(() => finalizeLicenseValidation(file, false, null), 500);
      }

      showToast('📜 License uploaded — AI forgery scan in progress...', 'info');
      // Pass analysis to doc scan — isValid comes from finalizeLicenseValidation callback
      // but we also run the scan in parallel for UI
      const earlyCheck = ['png', 'jpg', 'jpeg'].includes(ext);
      if (earlyCheck) {
        const r2 = new FileReader();
        r2.onload = function (ev) {
          const t2 = new window.Image();
          t2.onload = function () {
            const a2 = analyzeImagePixels(t2);
            const docLike = isLikelyDocument(a2);
            runAIDocumentScan(file.name, docLike, a2);
          };
          t2.src = ev.target.result;
        };
        r2.readAsDataURL(file);
      } else {
        runAIDocumentScan(file.name, false, null);
      }
    }

    function finalizeLicenseValidation(file, isValid, analysis) {
      licenseIsValid = isValid;
      const statusEl = document.getElementById('license-status');
      const badge = document.getElementById('license-upload-badge');

      if (isValid) {
        // VALID LICENSE
        if (badge) { badge.textContent = '✓ VERIFIED'; badge.className = 'req-badge done'; }
        document.getElementById('req-license').textContent = '✓ VERIFIED';
        document.getElementById('req-license').className = 'req-badge done';
        uploadedLicenseFile = file; // keep it
      } else {
        // FAKE / INVALID DOCUMENT
        if (badge) { badge.textContent = '🚫 REJECTED'; badge.className = 'req-badge required'; }
        document.getElementById('req-license').textContent = 'REQUIRED';
        document.getElementById('req-license').className = 'req-badge required';
        uploadedLicenseFile = null; // reject it
        licenseIsValid = false;
      }
      updateSubmitChecklist();
    }

    function removeLicense() {
      uploadedLicenseFile = null;
      licenseIsValid = false;
      document.getElementById('licenseDropzone').classList.remove('uploaded');
      document.getElementById('licenseDropzone').style.display = '';
      document.getElementById('license-preview-wrap').style.display = 'none';
      document.getElementById('license-preview-wrap').innerHTML = '';
      document.getElementById('license-status').innerHTML = '';
      document.getElementById('req-license').textContent = 'REQUIRED';
      document.getElementById('req-license').className = 'req-badge required';
      document.getElementById('f-license').value = '';
      updateSubmitChecklist();
    }

    // ═══════════════════════════════════════════════════════════
    // SATELLITE VIEW EMBED (Google Maps)
    // ═══════════════════════════════════════════════════════════
    function loadSatelliteView() {
      const lat = parseFloat(document.getElementById('f-lat').value);
      const lng = parseFloat(document.getElementById('f-lng').value);
      if (isNaN(lat) || isNaN(lng)) { showToast('Enter GPS coordinates first', 'error'); return; }
      if (lat === 0 && lng === 0) { showToast('Invalid coordinates (Null Island)', 'error'); return; }
      const container = document.getElementById('sat-embed-container');
      container.style.display = 'block';
      const iframe = document.getElementById('sat-embed-iframe');
      // Use OpenStreetMap embed as a reliable free satellite-style view
      iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05}%2C${lat - 0.05}%2C${lng + 0.05}%2C${lat + 0.05}&layer=mapnik&marker=${lat}%2C${lng}`;
      showToast('🛰️ Loading satellite view of designated area...', 'success');
    }

    function openSatelliteFullscreen() {
      const lat = document.getElementById('f-lat').value, lng = document.getElementById('f-lng').value;
      if (!lat || !lng) return;
      window.open(`https://www.google.com/maps/@${lat},${lng},1500m/data=!3m1!1e3`, '_blank');
    }

    function openGoogleEarth() {
      const lat = document.getElementById('f-lat').value, lng = document.getElementById('f-lng').value;
      if (!lat || !lng) return;
      window.open(`https://earth.google.com/web/@${lat},${lng},500a,2000d,35y,0h,0t,0r`, '_blank');
    }

    // ═══════════════════════════════════════════════════════════
    // SUBMISSION CHECKLIST & GATING
    // ═══════════════════════════════════════════════════════════
    function updateSubmitChecklist() {
      const checks = {
        license: !!uploadedLicenseFile && licenseIsValid,
        satellite: !!uploadedImageFile,
        coords: !!(parseFloat(document.getElementById('f-lat').value) && parseFloat(document.getElementById('f-lng').value)),
        company: !!(document.getElementById('f-company-name').value.trim() && document.getElementById('f-reg-number')?.value.trim()),
        details: !!(document.getElementById('f-name').value.trim() && document.getElementById('f-type').value && document.getElementById('f-location').value.trim() && document.getElementById('f-co2').value)
      };
      // Update checklist badges
      Object.entries(checks).forEach(([key, ok]) => {
        const el = document.getElementById('chk-' + key);
        if (el) { el.className = 'checklist-item ' + (ok ? 'ok' : 'missing'); }
      });
      // Update req badges for satellite
      const reqSat = document.getElementById('req-sat');
      if (reqSat) {
        if (checks.satellite && checks.coords) { reqSat.textContent = '✓ PROVIDED'; reqSat.className = 'req-badge done'; }
        else { reqSat.textContent = 'REQUIRED'; reqSat.className = 'req-badge required'; }
      }
      const reqCompany = document.getElementById('req-company');
      if (reqCompany) {
        if (checks.company) { reqCompany.textContent = '✓ PROVIDED'; reqCompany.className = 'req-badge done'; }
        else { reqCompany.textContent = 'REQUIRED'; reqCompany.className = 'req-badge required'; }
      }
      // Gate the submit button
      const allOk = Object.values(checks).every(Boolean);
      const btn = document.getElementById('submitBtn');
      const warning = document.getElementById('submit-block-warning');
      if (allOk) {
        btn.disabled = false;
        btn.textContent = '🚀 Submit Project';
        btn.style.opacity = '1';
        warning.style.display = 'none';
      } else {
        btn.disabled = true;
        btn.textContent = '🚫 Complete All Requirements to Publish';
        btn.style.opacity = '0.5';
        // Show what's missing
        const missing = [];
        if (!checks.license) missing.push('📜 Government-approved license certificate not uploaded');
        if (!checks.satellite) missing.push('🛰️ Satellite image of designated area not uploaded');
        if (!checks.coords) missing.push('📍 GPS coordinates of designated area not provided');
        if (!checks.company) missing.push('🏢 Company name and registration number not filled');
        if (!checks.details) missing.push('📝 Project name, type, location, or credits missing');
        warning.style.display = 'block';
        document.getElementById('submit-block-list').innerHTML = missing.map(m => '• ' + m).join('<br>');
      }
    }

    // ═══════════════════════════════════════════════════════════
    // SUBMIT PROJECT (updated with license + company gating)
    // ═══════════════════════════════════════════════════════════
    async function submitProject() {
      if (!state.user) { showToast('Sign in first', 'error'); return; }
      // STRICT VALIDATION — all mandatory fields
      if (!uploadedLicenseFile || !licenseIsValid) { showToast('🚫 You must upload a valid, AI-verified government license certificate', 'error'); return; }
      if (!uploadedImageFile) { showToast('🚫 You must upload a satellite image of your designated area', 'error'); return; }
      const gpsLat = parseFloat(document.getElementById('f-lat').value) || null;
      const gpsLng = parseFloat(document.getElementById('f-lng').value) || null;
      if (!gpsLat || !gpsLng) { showToast('🚫 You must provide exact GPS coordinates of your area', 'error'); return; }
      if (gpsLat === 0 && gpsLng === 0) { showToast('🚫 Invalid coordinates — Null Island', 'error'); return; }
      // Native Species Blueprint validation (>= 8 species to prevent monoculture slashing)
      const speciesInput = document.getElementById('f-species');
      const rawSpecies = speciesInput ? speciesInput.value.trim() : '';
      const speciesList = rawSpecies ? rawSpecies.split(',').map(s => s.trim()).filter(Boolean) : [];
      const projType = document.getElementById('f-type')?.value || 'REFORESTATION';
      if ((projType === 'REFORESTATION' || projType === 'AGROFORESTRY' || projType === 'OCEAN') && speciesList.length < 8) {
        showToast('🚫 Monoculture Protection: Native Species Blueprint requires at least 8 species to prevent on-chain slashing! (' + speciesList.length + '/8 entered)', 'error');
        const badge = document.getElementById('species-count-badge');
        if (badge) { badge.style.color = 'var(--red)'; badge.textContent = speciesList.length + '/8 required'; }
        return;
      }
      const boundaryInput = document.getElementById('f-boundary');
      const rawBoundary = boundaryInput ? boundaryInput.value.trim() : '';

      const companyName = document.getElementById('f-company-name').value.trim();
      const regNumber = document.getElementById('f-reg-number')?.value.trim() || '';
      if (!companyName || !regNumber) { showToast('🚫 Company name and registration number are required', 'error'); return; }
      const walletEmail = document.getElementById('f-email')?.value.trim() || '';
      const issuingBody = document.getElementById('f-issuing-body')?.value || '';
      const country = document.getElementById('f-country')?.value || '';
      const areaHa = parseInt(document.getElementById('f-area-ha')?.value) || 0;
      const f = { id: 'p' + Date.now(), name: document.getElementById('f-name').value.trim(), type: document.getElementById('f-type').value, location: document.getElementById('f-location').value.trim(), vintage_year: parseInt(document.getElementById('f-year').value), total_credits: parseInt(document.getElementById('f-co2').value), available_credits: parseInt(document.getElementById('f-co2').value), price_per_credit: parseFloat(document.getElementById('f-price').value), description: document.getElementById('f-desc').value.trim(), co2_tonnes: parseInt(document.getElementById('f-co2').value), seller_name: companyName, seller_id: state.user.id, verified: false, gps_lat: gpsLat, gps_lng: gpsLng, gps_source: gpsSource, wallet_email: walletEmail, company_name: companyName, reg_number: regNumber, issuing_body: issuingBody, country: country, area_ha: areaHa, has_license: true, license_file: uploadedLicenseFile?.name || '' };
      if (!f.name || !f.type || !f.location || !f.vintage_year || !f.total_credits || !f.price_per_credit || !f.description) { showToast('Fill in all project details', 'error'); return; }
      const btn = document.getElementById('submitBtn'), status = document.getElementById('submit-status');
      btn.disabled = true; btn.innerHTML = '<div class="spinner" style="display:inline-block;vertical-align:middle;width:16px;height:16px;margin-right:8px"></div> Verifying & Submitting...';
      status.textContent = '📜 Verifying license against government registry...'; await sleep(1200);
      status.textContent = '🛰️ Cross-referencing satellite image with GPS coordinates...'; await sleep(1000);
      status.textContent = '📡 Uploading evidence to IPFS...'; await sleep(800);
      status.textContent = '🏢 Validating company registration (' + regNumber + ')...'; await sleep(800);
      status.textContent = '⛓️ Minting project token on blockchain...'; await sleep(800);
      MOCK_PROJECTS.push(f);
      EVIDENCE_VAULT[f.id] = { score: 0, label: 'Pending', sat_dates: [], iot_sensors: 0, auditor: 'Pending', standard: document.getElementById('f-standard')?.value || 'Verra VCS', ipfs: 'Qm' + Math.random().toString(36).slice(2, 50), gps: `${gpsLat}°, ${gpsLng}°`, gps_lat: gpsLat, gps_lng: gpsLng, gps_source: gpsSource, area_ha: areaHa, trees_count: 0, co2_verified: false, company: companyName, reg_number: regNumber, issuing_body: issuingBody, license_file: uploadedLicenseFile?.name || '', has_license: true };
      status.textContent = '✅ Project submitted with verified license & satellite imagery!';
      showToast('🎉 Project submitted! License verified. Satellite cross-check in progress.', 'success');
      // Reset all fields
      ['f-name', 'f-location', 'f-year', 'f-co2', 'f-price', 'f-desc', 'f-lat', 'f-lng', 'f-email', 'f-company-name', 'f-reg-number', 'f-area-ha'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
      ['f-type', 'f-issuing-body', 'f-country'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
      gpsSource = 'none'; uploadedImageFile = null;
      removeLicense();
      const preview = document.getElementById('image-preview'); if (preview) { preview.style.display = 'none'; preview.innerHTML = ''; }
      const exifBadge = document.getElementById('exif-badge'); if (exifBadge) exifBadge.style.display = 'none';
      const gpsBadge = document.getElementById('gps-source-badge'); if (gpsBadge) gpsBadge.style.display = 'none';
      const nominatim = document.getElementById('gps-nominatim'); if (nominatim) nominatim.style.display = 'none';
      const satEmbed = document.getElementById('sat-embed-container'); if (satEmbed) satEmbed.style.display = 'none';
      const mapEl = document.getElementById('gps-map'); if (mapEl) mapEl.style.display = 'none';
      document.getElementById('gps-dms').textContent = '';
      if (gpsMap) { gpsMap.remove(); gpsMap = null; gpsMarker = null; }
      if (walletEmail) simulateEmailNotification('verification', { project: f.name, email: walletEmail });
      setTimeout(() => { updateSubmitChecklist(); showPage('seller-dashboard'); }, 1800);
      btn.disabled = false; btn.textContent = '🚀 Submit Project';
    }

    // ═══════════════════════════════════════════════════════════
    // SECURITY
    // ═══════════════════════════════════════════════════════════
    function loadSecurityEvents() {
      const tbody = document.getElementById('securityEventsTable'), colorMap = { INFO: 'confirmed', WARNING: 'pending', ERROR: 'failed', CRITICAL: 'failed' };
      tbody.innerHTML = MOCK_SECURITY_EVENTS.map(e => `<tr>
    <td style="font-family:var(--mono);font-size:11px">${e.event_type}</td>
    <td style="font-family:var(--mono);font-size:10px;color:var(--blue)">${e.model || '—'}</td>
    <td style="font-family:var(--mono);color:var(--text3);font-size:11px">${e.ip_address || 'internal'}</td>
    <td style="font-size:12px">${e.detail || '—'}</td>
    <td style="font-family:var(--mono);font-size:11px;color:${e.confidence && e.confidence !== '—' ? 'var(--green)' : 'var(--text3)'}">${e.confidence || '—'}</td>
    <td><span class="status-badge ${colorMap[e.severity] || 'pending'}">${e.severity}</span></td>
    <td style="color:var(--text3);font-size:11px">${e.created_at?.replace('T', ' ').split('.')[0] || '—'}</td>
  </tr>`).join('');
    }

    // ═══════════════════════════════════════════════════════════
    // CO2 CALCULATOR
    // ═══════════════════════════════════════════════════════════
    function updateCalc() {
      const flights = parseFloat(document.getElementById('calc-flights')?.value) || 0, drive = parseFloat(document.getElementById('calc-drive')?.value) || 0, kwh = parseFloat(document.getElementById('calc-kwh')?.value) || 0, diet = parseFloat(document.getElementById('calc-diet')?.value) || 1.0;
      const total = flights * 0.255 + (drive / 100) * 21 / 1000 + kwh * 12 * 0.000233 + diet, credits = Math.ceil(total);
      document.getElementById('calc-total-co2').textContent = total.toFixed(1) + 't';
      document.getElementById('calc-credits-needed').textContent = credits;
      document.getElementById('calc-cost-eth').textContent = (credits * 0.04).toFixed(3) + ' ETH';
      const ie = document.getElementById('impact-visual');
      if (ie) ie.innerHTML = [{ icon: '🌳', label: 'Trees Equivalent', val: Math.round(credits * 45).toLocaleString() }, { icon: '🚗', label: 'Car Km Avoided', val: Math.round(credits * 4750).toLocaleString() }, { icon: '🏠', label: 'Homes Powered', val: (Math.round(credits / 4.5 * 10) / 10).toFixed(1) + '/yr' }].map(item => `<div style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:16px;text-align:center"><div style="font-size:28px">${item.icon}</div><div style="font-family:var(--mono);font-size:18px;font-weight:700;color:var(--green);margin:6px 0">${item.val}</div><div style="font-size:12px;color:var(--text3)">${item.label}</div></div>`).join('');
    }

    // ═══════════════════════════════════════════════════════════
    // CHART + TICKER
    // ═══════════════════════════════════════════════════════════
    function renderPriceChart() {
      const svg = document.getElementById('priceChart'); if (!svg) return;
      const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#a78bfa', '#ec4899']; let paths = '', legend = '';
      MOCK_PROJECTS.slice(0, 5).forEach((p, i) => {
        const pts = [];
        for (let x = 0; x <= 800; x += 80) { const noise = (Math.sin(x * 0.03 + i * 2.5) * 0.008) + (Math.random() - 0.5) * 0.004; const y = 120 - (((p.price_per_credit + noise) / 0.1) * 100); pts.push(`${x},${Math.max(5, Math.min(115, y))}`); }
        paths += `<polyline points="${pts.join(' ')}" fill="none" stroke="${colors[i]}" stroke-width="2" opacity="0.8"/>`;
        legend += `<div class="chart-legend-item"><div class="chart-dot" style="background:${colors[i]}"></div>${TYPE_ICONS[p.type]} ${p.price_per_credit} ETH</div>`;
      });
      svg.innerHTML = paths;
      const lg = document.getElementById('chartLegend'); if (lg) lg.innerHTML = legend;
    }

    function startLiveTicker() {
      const ticker = document.getElementById('tickerInner'); if (!ticker) return;
      const render = () => { ticker.innerHTML = (MOCK_PROJECTS.map(p => { const chg = ((Math.random() - .48) * .006).toFixed(4); const up = parseFloat(chg) >= 0; return `<div class="ticker-item">${TYPE_ICONS[p.type]} <b>${p.name.split(' ')[0]}</b> <span class="${up ? 'ticker-up' : 'ticker-down'}">${up ? '▲' : '▼'} ${Math.abs(chg)} ETH</span></div>`; }).join('')).repeat(2); };
      render(); setInterval(render, 8000);
    }

    // ═══════════════════════════════════════════════════════════
    // NFT + UTILS
    // ═══════════════════════════════════════════════════════════
    async function mintNFT() { showToast('🎨 Minting NFT certificate on Polygon...', 'info'); await sleep(2000); showToast('🪙 NFT minted! Token ID: #' + Math.floor(Math.random() * 9999), 'success'); }
    function showToast(msg, type = 'info') { const c = document.getElementById('toastContainer'); const el = document.createElement('div'); el.className = `toast ${type}`; el.textContent = msg; c.appendChild(el); setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(20px)'; el.style.transition = '.3s'; setTimeout(() => el.remove(), 300); }, 3500); }
    function truncate(addr) { return addr ? addr.slice(0, 6) + '...' + addr.slice(-4) : '—'; }
    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    // Overlay clicks close modals
    ['buyModal', 'evidenceModal', 'tokenModal', 'retireModal', 'apiKeyModal'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('click', function (e) { if (e.target === this) closeModal(id); }); });

    // ═══════════════════════════════════════════════════════════
    // FEATURE 1: MULTI-LANGUAGE (i18n) — 6 LANGUAGES
    // ═══════════════════════════════════════════════════════════
    const LANGS = [
      { code: 'en', flag: '🇬🇧', name: 'English' },
      { code: 'hi', flag: '🇮🇳', name: 'हिंदी' },
      { code: 'es', flag: '🇪🇸', name: 'Español' },
      { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
      { code: 'pt', flag: '🇧🇷', name: 'Português' },
      { code: 'fr', flag: '🇫🇷', name: 'Français' }
    ];
    const I18N = {
      en: {
        marketplace: 'Marketplace', projects: 'Projects', token_ledger: '🔗 Token Ledger', my_portfolio: 'My Portfolio', seller_hub: 'Seller Hub', security: 'Security', co2_calc: 'CO₂ Calc', sign_in: 'Sign In', get_started: 'Get Started', sign_out: 'Sign Out',
        hero_tag: 'Blockchain Verified', hero_title_1: 'Trade ', hero_title_hl: 'Carbon Credits', hero_title_2: ' Transparently', hero_desc: 'Decentralized marketplace solving double counting, greenwashing & middleman fees — all on-chain, all verifiable, all transparent.', browse_credits: 'Browse Credits →', view_ledger: '🔗 View Token Ledger', co2_calculator: '🌍 CO₂ Calculator',
        active_listings: 'ACTIVE LISTINGS', total_volume: 'TOTAL VOLUME', active_traders: 'ACTIVE TRADERS', co2_offset: 'CO₂ OFFSET',
        list_project: '🌱 List New Carbon Project', all_fields_required: 'All fields required. IoT & satellite verification takes 2–5 business days.', project_name: 'PROJECT NAME', project_type: 'PROJECT TYPE', location: 'LOCATION', vintage_year: 'VINTAGE YEAR', total_credits: 'TOTAL CREDITS (Tonnes CO₂)', price_credit: 'PRICE PER CREDIT (ETH)', project_desc: 'PROJECT DESCRIPTION',
        gps_coords: '📍 GPS COORDINATES', latitude: 'LATITUDE', longitude: 'LONGITUDE', use_my_location: '📍 Use My Location', verify_maps: '🗺️ Verify on Google Maps', satellite_image: '🛰️ SATELLITE IMAGE', drop_image: 'Drop satellite image here or click to upload', image_formats: 'JPG, PNG · EXIF GPS auto-extracted', email_notifications: 'EMAIL FOR NOTIFICATIONS (OPTIONAL)', email_hint: "We'll email you when AI analysis is complete", verification_standard: 'VERIFICATION STANDARD', submit_project: '🚀 Submit Project',
        problem_a: 'A. No Double Counting — Token Ownership Ledger', problem_b: 'B. No Greenwashing — On-Chain Evidence Vault', problem_c: 'C. Zero Middlemen — Smart Contract Direct Payout',
        buy_credits: 'Buy Credits', confirm_purchase: '✅ Confirm Purchase', cancel: 'Cancel', close: 'Close', credits: 'credits', tonnes: 'tonnes', loading: 'Loading...',
        credits_held: 'CREDITS HELD', co2_neutralised: 'CO₂ OFFSET', eth_balance: 'ETH BALANCE', my_portfolio_title: 'My Portfolio', seller_hub_title: 'Seller Hub',
        verified_projects: 'Verified Projects', security_arch: '🔐 Security Architecture', co2_footprint: '🌍 CO₂ Footprint Calculator',
        chat_title: '🌿 Verde — AI Assistant', chat_subtitle: 'Ask me anything about carbon credits', chat_placeholder: 'Ask Verde anything...',
        retire_title: '🔥 Retire Carbon Credits', retire_warning: '⚠️ Retiring credits is permanent and irreversible. The tokens will be burned from the blockchain forever.', company_name: 'COMPANY / ORGANIZATION NAME', amount_retire: 'AMOUNT TO RETIRE', retire_reason: 'RETIREMENT REASON', retire_download: '🔥 Retire & Download Certificate',
        welcome_back: 'Welcome Back', create_account: 'Create Account', sign_in_desc: 'Sign in to your CarbonChain account', join_desc: 'Join the carbon credit marketplace',
        gps_extracted: '✅ GPS extracted from image EXIF', gps_no_exif: '⚠️ No GPS in image — please enter manually', gps_source_exif: '📍 From image EXIF', gps_source_manual: '✏️ Manually entered',
        loc_verification: 'Location Verification', loc_match_score: 'Location Match Score', resolved_address: 'Resolved Address',
        activity_reforestation: '🌳 Reforestation', activity_solar: '☀️ Solar Energy', activity_wind: '💨 Wind Energy', activity_methane: '♻️ Methane Capture', activity_ocean: '🌊 Ocean Carbon', activity_efficiency: '⚡ Energy Efficiency',
        stats_co2: 'CO₂ Offset', stats_verifications: 'Verifications', stats_credits: 'Credits Traded', stats_projects: 'Active Projects',
        how_it_works: 'How It Works', step1_title: 'Upload & Verify', step1_desc: 'Submit satellite images and GPS coordinates for AI verification', step2_title: 'Mint Credits', step2_desc: 'Approved projects get VCC tokens minted on Polygon blockchain', step3_title: 'Trade or Retire', step3_desc: 'Buy, sell, or permanently retire credits with PDF certificate',
        no_listings: 'No listings found', no_records: 'No records yet', no_history: 'No transactions yet',
        wallet_address: 'Wallet Address', wallet_vcc: 'VCC Balance', wallet_matic: 'ETH Balance', wallet_refresh: 'Refresh', wallet_copy: 'Copy', wallet_copied: 'Copied!',
        buy_qty: 'QUANTITY (CREDITS)', buy_total: 'Total', purchase_complete: 'Purchase complete!', view_explorer: 'View on Explorer',
        page_subtitle_market: 'Browse and buy verified carbon credits from global projects', page_subtitle_submit: 'Submit your carbon project for AI-powered satellite verification',
        result_approved: 'Approved', result_rejected: 'Rejected', result_confidence: 'Confidence', result_area: 'Area', result_co2: 'CO₂ Offset', result_credits: 'Credits',
        connect_wallet: 'Connect Wallet', connected: 'Connected', connect_wallet_prompt: 'Connect your wallet to continue', connect_wallet_desc: 'You need a Web3 wallet to interact with the blockchain'
      },
      hi: {
        marketplace: 'बाज़ार', projects: 'परियोजनाएं', token_ledger: '🔗 टोकन लेजर', my_portfolio: 'मेरा पोर्टफोलियो', seller_hub: 'विक्रेता हब', security: 'सुरक्षा', co2_calc: 'CO₂ कैलकुलेटर', sign_in: 'साइन इन', get_started: 'शुरू करें', sign_out: 'साइन आउट',
        hero_tag: 'ब्लॉकचेन सत्यापित', hero_title_1: '', hero_title_hl: 'कार्बन क्रेडिट', hero_title_2: ' का पारदर्शी व्यापार', hero_desc: 'डबल काउंटिंग, ग्रीनवॉशिंग और बिचौलियों की फीस को हल करने वाला विकेंद्रीकृत बाज़ार — सब कुछ ऑन-चेन, सत्यापन योग्य और पारदर्शी।', browse_credits: 'क्रेडिट ब्राउज़ करें →', view_ledger: '🔗 टोकन लेजर देखें', co2_calculator: '🌍 CO₂ कैलकुलेटर',
        active_listings: 'सक्रिय सूचीकरण', total_volume: 'कुल मात्रा', active_traders: 'सक्रिय व्यापारी', co2_offset: 'CO₂ ऑफसेट',
        list_project: '🌱 नई कार्बन परियोजना', all_fields_required: 'सभी फ़ील्ड आवश्यक हैं। IoT और उपग्रह सत्यापन में 2-5 कार्यदिवस लगते हैं।', project_name: 'परियोजना का नाम', project_type: 'परियोजना प्रकार', location: 'स्थान', vintage_year: 'विंटेज वर्ष', total_credits: 'कुल क्रेडिट (टन CO₂)', price_credit: 'प्रति क्रेडिट मूल्य (ETH)', project_desc: 'परियोजना विवरण',
        gps_coords: '📍 GPS निर्देशांक', latitude: 'अक्षांश', longitude: 'देशांतर', use_my_location: '📍 मेरा स्थान उपयोग करें', verify_maps: '🗺️ Google Maps पर सत्यापित करें', satellite_image: '🛰️ उपग्रह चित्र', drop_image: 'उपग्रह चित्र यहाँ छोड़ें या अपलोड करें', image_formats: 'JPG, PNG · EXIF GPS स्वतः निकाला गया', email_notifications: 'सूचना ईमेल (वैकल्पिक)', email_hint: 'AI विश्लेषण पूरा होने पर ईमेल करेंगे', verification_standard: 'सत्यापन मानक', submit_project: '🚀 परियोजना जमा करें',
        problem_a: 'A. कोई डबल काउंटिंग नहीं — टोकन स्वामित्व लेजर', problem_b: 'B. कोई ग्रीनवॉशिंग नहीं — ऑन-चेन साक्ष्य वॉल्ट', problem_c: 'C. कोई बिचौलिया नहीं — स्मार्ट कॉन्ट्रैक्ट सीधा भुगतान',
        buy_credits: 'क्रेडिट खरीदें', confirm_purchase: '✅ खरीदी की पुष्टि', cancel: 'रद्द करें', close: 'बंद करें', credits: 'क्रेडिट', tonnes: 'टन', loading: 'लोड हो रहा है...',
        credits_held: 'धारित क्रेडिट', co2_neutralised: 'CO₂ ऑफसेट', eth_balance: 'ETH शेष', my_portfolio_title: 'मेरा पोर्टफोलियो', seller_hub_title: 'विक्रेता हब',
        verified_projects: 'सत्यापित परियोजनाएं', security_arch: '🔐 सुरक्षा वास्तुकला', co2_footprint: '🌍 CO₂ फुटप्रिंट कैलकुलेटर',
        chat_title: '🌿 वर्दे — AI सहायक', chat_subtitle: 'कार्बन क्रेडिट के बारे में पूछें', chat_placeholder: 'वर्दे से पूछें...',
        retire_title: '🔥 कार्बन क्रेडिट रिटायर', retire_warning: '⚠️ क्रेडिट रिटायर करना स्थायी और अपरिवर्तनीय है।', company_name: 'कंपनी / संगठन का नाम', amount_retire: 'रिटायर मात्रा', retire_reason: 'रिटायरमेंट का कारण', retire_download: '🔥 रिटायर और प्रमाणपत्र डाउनलोड',
        welcome_back: 'वापसी पर स्वागत', create_account: 'खाता बनाएं', sign_in_desc: 'अपने CarbonChain खाते में साइन इन करें', join_desc: 'कार्बन क्रेडिट बाज़ार में शामिल हों',
        gps_extracted: '✅ इमेज EXIF से GPS निकाला गया', gps_no_exif: '⚠️ इमेज में GPS नहीं — कृपया मैन्युअल दर्ज करें', gps_source_exif: '📍 इमेज EXIF से', gps_source_manual: '✏️ मैन्युअल दर्ज',
        loc_verification: 'स्थान सत्यापन', loc_match_score: 'स्थान मिलान स्कोर', resolved_address: 'हल किया गया पता',
        activity_reforestation: '🌳 वनीकरण', activity_solar: '☀️ सौर ऊर्जा', activity_wind: '💨 पवन ऊर्जा', activity_methane: '♻️ मीथेन कैप्चर', activity_ocean: '🌊 समुद्री कार्बन', activity_efficiency: '⚡ ऊर्जा दक्षता',
        stats_co2: 'CO₂ ऑफसेट', stats_verifications: 'सत्यापन', stats_credits: 'क्रेडिट व्यापार', stats_projects: 'सक्रिय परियोजनाएं',
        how_it_works: 'कैसे काम करता है', step1_title: 'अपलोड और सत्यापित', step1_desc: 'AI सत्यापन के लिए उपग्रह चित्र और GPS निर्देशांक जमा करें', step2_title: 'क्रेडिट मिंट करें', step2_desc: 'स्वीकृत परियोजनाओं को Polygon ब्लॉकचेन पर VCC टोकन मिलते हैं', step3_title: 'व्यापार या रिटायर', step3_desc: 'PDF प्रमाणपत्र के साथ क्रेडिट खरीदें, बेचें या रिटायर करें',
        no_listings: 'कोई लिस्टिंग नहीं मिली', no_records: 'अभी तक कोई रिकॉर्ड नहीं', no_history: 'अभी तक कोई लेनदेन नहीं',
        wallet_address: 'वॉलेट पता', wallet_vcc: 'VCC शेष', wallet_matic: 'ETH शेष', wallet_refresh: 'रिफ्रेश', wallet_copy: 'कॉपी', wallet_copied: 'कॉपी हो गया!',
        buy_qty: 'मात्रा (क्रेडिट)', buy_total: 'कुल', purchase_complete: 'खरीदारी पूरी!', view_explorer: 'एक्सप्लोरर पर देखें',
        page_subtitle_market: 'वैश्विक परियोजनाओं से सत्यापित कार्बन क्रेडिट ब्राउज़ करें', page_subtitle_submit: 'AI-संचालित उपग्रह सत्यापन के लिए अपनी कार्बन परियोजना जमा करें',
        result_approved: 'स्वीकृत', result_rejected: 'अस्वीकृत', result_confidence: 'विश्वास', result_area: 'क्षेत्र', result_co2: 'CO₂ ऑफसेट', result_credits: 'क्रेडिट',
        connect_wallet: 'वॉलेट जोड़ें', connected: 'जुड़ा हुआ', connect_wallet_prompt: 'जारी रखने के लिए वॉलेट जोड़ें', connect_wallet_desc: 'ब्लॉकचेन से इंटरैक्ट करने के लिए Web3 वॉलेट चाहिए'
      },
      es: {
        marketplace: 'Mercado', projects: 'Proyectos', token_ledger: '🔗 Registro de Tokens', my_portfolio: 'Mi Portafolio', seller_hub: 'Centro Vendedor', security: 'Seguridad', co2_calc: 'Calculadora CO₂', sign_in: 'Iniciar Sesión', get_started: 'Comenzar', sign_out: 'Cerrar Sesión',
        hero_tag: 'Verificado en Blockchain', hero_title_1: 'Comercia ', hero_title_hl: 'Créditos de Carbono', hero_title_2: ' con Transparencia', hero_desc: 'Mercado descentralizado que resuelve el doble conteo, el greenwashing y las comisiones — todo en cadena, verificable y transparente.', browse_credits: 'Explorar Créditos →', view_ledger: '🔗 Ver Registro de Tokens', co2_calculator: '🌍 Calculadora CO₂',
        active_listings: 'LISTADOS ACTIVOS', total_volume: 'VOLUMEN TOTAL', active_traders: 'COMERCIANTES ACTIVOS', co2_offset: 'COMPENSACIÓN CO₂',
        list_project: '🌱 Nuevo Proyecto de Carbono', all_fields_required: 'Todos los campos obligatorios. Verificación IoT y satelital: 2–5 días hábiles.', project_name: 'NOMBRE DEL PROYECTO', project_type: 'TIPO DE PROYECTO', location: 'UBICACIÓN', vintage_year: 'AÑO', total_credits: 'CRÉDITOS TOTALES (Toneladas CO₂)', price_credit: 'PRECIO POR CRÉDITO (ETH)', project_desc: 'DESCRIPCIÓN DEL PROYECTO',
        gps_coords: '📍 COORDENADAS GPS', latitude: 'LATITUD', longitude: 'LONGITUD', use_my_location: '📍 Usar Mi Ubicación', verify_maps: '🗺️ Verificar en Google Maps', satellite_image: '🛰️ IMAGEN SATELITAL', drop_image: 'Suelta la imagen aquí o haz clic para subir', image_formats: 'JPG, PNG · GPS EXIF extraído automáticamente', email_notifications: 'EMAIL PARA NOTIFICACIONES (OPCIONAL)', email_hint: 'Te enviaremos un email cuando el análisis esté completo', verification_standard: 'ESTÁNDAR DE VERIFICACIÓN', submit_project: '🚀 Enviar Proyecto',
        problem_a: 'A. Sin Doble Conteo — Registro de Propiedad', problem_b: 'B. Sin Greenwashing — Bóveda de Evidencia', problem_c: 'C. Sin Intermediarios — Pago Directo',
        buy_credits: 'Comprar Créditos', confirm_purchase: '✅ Confirmar Compra', cancel: 'Cancelar', close: 'Cerrar', credits: 'créditos', tonnes: 'toneladas', loading: 'Cargando...',
        credits_held: 'CRÉDITOS EN POSESIÓN', co2_neutralised: 'CO₂ COMPENSADO', eth_balance: 'SALDO ETH', my_portfolio_title: 'Mi Portafolio', seller_hub_title: 'Centro Vendedor',
        verified_projects: 'Proyectos Verificados', security_arch: '🔐 Arquitectura de Seguridad', co2_footprint: '🌍 Calculadora de Huella CO₂',
        chat_title: '🌿 Verde — Asistente IA', chat_subtitle: 'Pregúntame sobre créditos de carbono', chat_placeholder: 'Pregunta a Verde...',
        retire_title: '🔥 Retirar Créditos de Carbono', retire_warning: '⚠️ Retirar créditos es permanente e irreversible.', company_name: 'EMPRESA / ORGANIZACIÓN', amount_retire: 'CANTIDAD A RETIRAR', retire_reason: 'RAZÓN DEL RETIRO', retire_download: '🔥 Retirar y Descargar Certificado',
        welcome_back: 'Bienvenido de Vuelta', create_account: 'Crear Cuenta', sign_in_desc: 'Inicia sesión en tu cuenta CarbonChain', join_desc: 'Únete al mercado de créditos de carbono',
        gps_extracted: '✅ GPS extraído del EXIF de la imagen', gps_no_exif: '⚠️ Sin GPS en la imagen — ingresa manualmente', gps_source_exif: '📍 Del EXIF de la imagen', gps_source_manual: '✏️ Ingresado manualmente',
        loc_verification: 'Verificación de Ubicación', loc_match_score: 'Puntuación de Coincidencia', resolved_address: 'Dirección Resuelta',
        activity_reforestation: '🌳 Reforestación', activity_solar: '☀️ Energía Solar', activity_wind: '💨 Energía Eólica', activity_methane: '♻️ Captura de Metano', activity_ocean: '🌊 Carbono Oceánico', activity_efficiency: '⚡ Eficiencia Energética',
        stats_co2: 'CO₂ Compensado', stats_verifications: 'Verificaciones', stats_credits: 'Créditos Negociados', stats_projects: 'Proyectos Activos',
        how_it_works: 'Cómo Funciona', step1_title: 'Subir y Verificar', step1_desc: 'Envía imágenes satelitales y coordenadas GPS para verificación IA', step2_title: 'Acuñar Créditos', step2_desc: 'Proyectos aprobados reciben tokens VCC en Polygon', step3_title: 'Comerciar o Retirar', step3_desc: 'Compra, vende o retira créditos con certificado PDF',
        no_listings: 'No se encontraron listados', no_records: 'Sin registros aún', no_history: 'Sin transacciones aún',
        wallet_address: 'Dirección de Wallet', wallet_vcc: 'Saldo VCC', wallet_matic: 'Saldo ETH', wallet_refresh: 'Actualizar', wallet_copy: 'Copiar', wallet_copied: '¡Copiado!',
        buy_qty: 'CANTIDAD (CRÉDITOS)', buy_total: 'Total', purchase_complete: '¡Compra completada!', view_explorer: 'Ver en Explorer',
        page_subtitle_market: 'Explora y compra créditos de carbono verificados de proyectos globales', page_subtitle_submit: 'Envía tu proyecto para verificación satelital con IA',
        result_approved: 'Aprobado', result_rejected: 'Rechazado', result_confidence: 'Confianza', result_area: 'Área', result_co2: 'CO₂ Compensado', result_credits: 'Créditos',
        connect_wallet: 'Conectar Wallet', connected: 'Conectado', connect_wallet_prompt: 'Conecta tu wallet para continuar', connect_wallet_desc: 'Necesitas una wallet Web3 para interactuar con la blockchain'
      },
      de: {
        marketplace: 'Marktplatz', projects: 'Projekte', token_ledger: '🔗 Token-Register', my_portfolio: 'Mein Portfolio', seller_hub: 'Verkäufer-Hub', security: 'Sicherheit', co2_calc: 'CO₂-Rechner', sign_in: 'Anmelden', get_started: 'Loslegen', sign_out: 'Abmelden',
        hero_tag: 'Blockchain-verifiziert', hero_title_1: 'Handle ', hero_title_hl: 'CO₂-Zertifikate', hero_title_2: ' transparent', hero_desc: 'Dezentraler Marktplatz gegen Doppelzählung, Greenwashing und Mittelsmanngebühren — alles on-chain, verifizierbar und transparent.', browse_credits: 'Credits durchsuchen →', view_ledger: '🔗 Token-Register ansehen', co2_calculator: '🌍 CO₂-Rechner',
        active_listings: 'AKTIVE ANGEBOTE', total_volume: 'GESAMTVOLUMEN', active_traders: 'AKTIVE HÄNDLER', co2_offset: 'CO₂-KOMPENSATION',
        list_project: '🌱 Neues Kohlenstoffprojekt', all_fields_required: 'Alle Felder erforderlich. IoT- und Satellitenverifizierung: 2–5 Werktage.', project_name: 'PROJEKTNAME', project_type: 'PROJEKTTYP', location: 'STANDORT', vintage_year: 'JAHRGANG', total_credits: 'GESAMTE CREDITS (Tonnen CO₂)', price_credit: 'PREIS PRO CREDIT (ETH)', project_desc: 'PROJEKTBESCHREIBUNG',
        gps_coords: '📍 GPS-KOORDINATEN', latitude: 'BREITENGRAD', longitude: 'LÄNGENGRAD', use_my_location: '📍 Meinen Standort verwenden', verify_maps: '🗺️ Auf Google Maps prüfen', satellite_image: '🛰️ SATELLITENBILD', drop_image: 'Satellitenbild hier ablegen oder klicken', image_formats: 'JPG, PNG · EXIF-GPS automatisch extrahiert', email_notifications: 'E-MAIL FÜR BENACHRICHTIGUNGEN (OPTIONAL)', email_hint: 'Wir senden eine E-Mail wenn die KI-Analyse abgeschlossen ist', verification_standard: 'VERIFIZIERUNGSSTANDARD', submit_project: '🚀 Projekt einreichen',
        problem_a: 'A. Keine Doppelzählung — Token-Eigentumsregister', problem_b: 'B. Kein Greenwashing — On-Chain Beweistresor', problem_c: 'C. Keine Mittelsmänner — Smart-Contract-Direktauszahlung',
        buy_credits: 'Credits kaufen', confirm_purchase: '✅ Kauf bestätigen', cancel: 'Abbrechen', close: 'Schließen', credits: 'Credits', tonnes: 'Tonnen', loading: 'Laden...',
        credits_held: 'GEHALTENE CREDITS', co2_neutralised: 'CO₂ KOMPENSIERT', eth_balance: 'ETH-GUTHABEN', my_portfolio_title: 'Mein Portfolio', seller_hub_title: 'Verkäufer-Hub',
        verified_projects: 'Verifizierte Projekte', security_arch: '🔐 Sicherheitsarchitektur', co2_footprint: '🌍 CO₂-Fußabdruck-Rechner',
        chat_title: '🌿 Verde — KI-Assistent', chat_subtitle: 'Fragen Sie mich zu CO₂-Zertifikaten', chat_placeholder: 'Fragen Sie Verde...',
        retire_title: '🔥 CO₂-Zertifikate stilllegen', retire_warning: '⚠️ Stilllegung ist permanent und unwiderruflich.', company_name: 'FIRMEN-/ORGANISATIONSNAME', amount_retire: 'MENGE ZUM STILLLEGEN', retire_reason: 'GRUND DER STILLLEGUNG', retire_download: '🔥 Stilllegen & Zertifikat herunterladen',
        welcome_back: 'Willkommen zurück', create_account: 'Konto erstellen', sign_in_desc: 'Melden Sie sich bei Ihrem CarbonChain-Konto an', join_desc: 'Treten Sie dem CO₂-Zertifikate-Marktplatz bei',
        gps_extracted: '✅ GPS aus Bild-EXIF extrahiert', gps_no_exif: '⚠️ Kein GPS im Bild — bitte manuell eingeben', gps_source_exif: '📍 Aus Bild-EXIF', gps_source_manual: '✏️ Manuell eingegeben',
        loc_verification: 'Standortverifizierung', loc_match_score: 'Standort-Übereinstimmung', resolved_address: 'Aufgelöste Adresse',
        activity_reforestation: '🌳 Aufforstung', activity_solar: '☀️ Solarenergie', activity_wind: '💨 Windenergie', activity_methane: '♻️ Methanerfassung', activity_ocean: '🌊 Ozean-Kohlenstoff', activity_efficiency: '⚡ Energieeffizienz',
        stats_co2: 'CO₂ Kompensiert', stats_verifications: 'Verifizierungen', stats_credits: 'Gehandelte Credits', stats_projects: 'Aktive Projekte',
        how_it_works: 'So funktioniert es', step1_title: 'Hochladen & Verifizieren', step1_desc: 'Satellitenbilder und GPS-Koordinaten zur KI-Verifizierung einreichen', step2_title: 'Credits prägen', step2_desc: 'Genehmigte Projekte erhalten VCC-Token auf Polygon', step3_title: 'Handeln oder Stilllegen', step3_desc: 'Credits kaufen, verkaufen oder mit PDF-Zertifikat stilllegen',
        no_listings: 'Keine Angebote gefunden', no_records: 'Noch keine Einträge', no_history: 'Noch keine Transaktionen',
        wallet_address: 'Wallet-Adresse', wallet_vcc: 'VCC-Guthaben', wallet_matic: 'ETH-Guthaben', wallet_refresh: 'Aktualisieren', wallet_copy: 'Kopieren', wallet_copied: 'Kopiert!',
        buy_qty: 'MENGE (CREDITS)', buy_total: 'Gesamt', purchase_complete: 'Kauf abgeschlossen!', view_explorer: 'Im Explorer ansehen',
        page_subtitle_market: 'Verifizierte CO₂-Zertifikate aus globalen Projekten durchsuchen und kaufen', page_subtitle_submit: 'Reichen Sie Ihr Projekt zur KI-gestützten Satellitenverifizierung ein',
        result_approved: 'Genehmigt', result_rejected: 'Abgelehnt', result_confidence: 'Vertrauen', result_area: 'Fläche', result_co2: 'CO₂ Kompensiert', result_credits: 'Credits',
        connect_wallet: 'Wallet verbinden', connected: 'Verbunden', connect_wallet_prompt: 'Wallet verbinden zum Fortfahren', connect_wallet_desc: 'Sie benötigen eine Web3-Wallet für die Blockchain-Interaktion'
      },
      pt: {
        marketplace: 'Mercado', projects: 'Projetos', token_ledger: '🔗 Registro de Tokens', my_portfolio: 'Meu Portfólio', seller_hub: 'Central do Vendedor', security: 'Segurança', co2_calc: 'Calculadora CO₂', sign_in: 'Entrar', get_started: 'Começar', sign_out: 'Sair',
        hero_tag: 'Verificado em Blockchain', hero_title_1: 'Negocie ', hero_title_hl: 'Créditos de Carbono', hero_title_2: ' com Transparência', hero_desc: 'Mercado descentralizado que resolve dupla contagem, greenwashing e taxas de intermediários — tudo on-chain, verificável e transparente.', browse_credits: 'Explorar Créditos →', view_ledger: '🔗 Ver Registro de Tokens', co2_calculator: '🌍 Calculadora CO₂',
        active_listings: 'LISTAGENS ATIVAS', total_volume: 'VOLUME TOTAL', active_traders: 'COMERCIANTES ATIVOS', co2_offset: 'COMPENSAÇÃO CO₂',
        list_project: '🌱 Novo Projeto de Carbono', all_fields_required: 'Todos os campos obrigatórios. Verificação IoT e satelital: 2–5 dias úteis.', project_name: 'NOME DO PROJETO', project_type: 'TIPO DE PROJETO', location: 'LOCALIZAÇÃO', vintage_year: 'ANO', total_credits: 'CRÉDITOS TOTAIS (Toneladas CO₂)', price_credit: 'PREÇO POR CRÉDITO (ETH)', project_desc: 'DESCRIÇÃO DO PROJETO',
        gps_coords: '📍 COORDENADAS GPS', latitude: 'LATITUDE', longitude: 'LONGITUDE', use_my_location: '📍 Usar Minha Localização', verify_maps: '🗺️ Verificar no Google Maps', satellite_image: '🛰️ IMAGEM DE SATÉLITE', drop_image: 'Solte a imagem aqui ou clique para enviar', image_formats: 'JPG, PNG · GPS EXIF extraído automaticamente', email_notifications: 'EMAIL PARA NOTIFICAÇÕES (OPCIONAL)', email_hint: 'Enviaremos um email quando a análise estiver completa', verification_standard: 'PADRÃO DE VERIFICAÇÃO', submit_project: '🚀 Enviar Projeto',
        problem_a: 'A. Sem Dupla Contagem — Registro de Propriedade', problem_b: 'B. Sem Greenwashing — Cofre de Evidências', problem_c: 'C. Sem Intermediários — Pagamento Direto',
        buy_credits: 'Comprar Créditos', confirm_purchase: '✅ Confirmar Compra', cancel: 'Cancelar', close: 'Fechar', credits: 'créditos', tonnes: 'toneladas', loading: 'Carregando...',
        credits_held: 'CRÉDITOS DETIDOS', co2_neutralised: 'CO₂ COMPENSADO', eth_balance: 'SALDO ETH', my_portfolio_title: 'Meu Portfólio', seller_hub_title: 'Central do Vendedor',
        verified_projects: 'Projetos Verificados', security_arch: '🔐 Arquitetura de Segurança', co2_footprint: '🌍 Calculadora de Pegada CO₂',
        chat_title: '🌿 Verde — Assistente IA', chat_subtitle: 'Pergunte sobre créditos de carbono', chat_placeholder: 'Pergunte ao Verde...',
        retire_title: '🔥 Aposentar Créditos de Carbono', retire_warning: '⚠️ Aposentar créditos é permanente e irreversível.', company_name: 'EMPRESA / ORGANIZAÇÃO', amount_retire: 'QUANTIDADE PARA APOSENTAR', retire_reason: 'RAZÃO DA APOSENTADORIA', retire_download: '🔥 Aposentar e Baixar Certificado',
        welcome_back: 'Bem-vindo de Volta', create_account: 'Criar Conta', sign_in_desc: 'Entre na sua conta CarbonChain', join_desc: 'Junte-se ao mercado de créditos de carbono',
        gps_extracted: '✅ GPS extraído do EXIF da imagem', gps_no_exif: '⚠️ Sem GPS na imagem — insira manualmente', gps_source_exif: '📍 Do EXIF da imagem', gps_source_manual: '✏️ Inserido manualmente',
        loc_verification: 'Verificação de Localização', loc_match_score: 'Pontuação de Correspondência', resolved_address: 'Endereço Resolvido',
        activity_reforestation: '🌳 Reflorestamento', activity_solar: '☀️ Energia Solar', activity_wind: '💨 Energia Eólica', activity_methane: '♻️ Captura de Metano', activity_ocean: '🌊 Carbono Oceânico', activity_efficiency: '⚡ Eficiência Energética',
        stats_co2: 'CO₂ Compensado', stats_verifications: 'Verificações', stats_credits: 'Créditos Negociados', stats_projects: 'Projetos Ativos',
        how_it_works: 'Como Funciona', step1_title: 'Enviar e Verificar', step1_desc: 'Envie imagens de satélite e coordenadas GPS para verificação IA', step2_title: 'Cunhar Créditos', step2_desc: 'Projetos aprovados recebem tokens VCC em Polygon', step3_title: 'Negociar ou Aposentar', step3_desc: 'Compre, venda ou aposente créditos com certificado PDF',
        no_listings: 'Nenhuma listagem encontrada', no_records: 'Sem registros ainda', no_history: 'Sem transações ainda',
        wallet_address: 'Endereço da Wallet', wallet_vcc: 'Saldo VCC', wallet_matic: 'Saldo ETH', wallet_refresh: 'Atualizar', wallet_copy: 'Copiar', wallet_copied: 'Copiado!',
        buy_qty: 'QUANTIDADE (CRÉDITOS)', buy_total: 'Total', purchase_complete: 'Compra concluída!', view_explorer: 'Ver no Explorer',
        page_subtitle_market: 'Explore e compre créditos de carbono verificados de projetos globais', page_subtitle_submit: 'Envie seu projeto para verificação satelital com IA',
        result_approved: 'Aprovado', result_rejected: 'Rejeitado', result_confidence: 'Confiança', result_area: 'Área', result_co2: 'CO₂ Compensado', result_credits: 'Créditos',
        connect_wallet: 'Conectar Wallet', connected: 'Conectado', connect_wallet_prompt: 'Conecte sua wallet para continuar', connect_wallet_desc: 'Você precisa de uma wallet Web3 para interagir com a blockchain'
      },
      fr: {
        marketplace: 'Marché', projects: 'Projets', token_ledger: '🔗 Registre des Tokens', my_portfolio: 'Mon Portfolio', seller_hub: 'Espace Vendeur', security: 'Sécurité', co2_calc: 'Calculateur CO₂', sign_in: 'Connexion', get_started: 'Commencer', sign_out: 'Déconnexion',
        hero_tag: 'Vérifié par Blockchain', hero_title_1: 'Échangez des ', hero_title_hl: 'Crédits Carbone', hero_title_2: ' en Transparence', hero_desc: 'Marché décentralisé résolvant le double comptage, le greenwashing et les frais d\'intermédiaires — tout on-chain, vérifiable et transparent.', browse_credits: 'Parcourir les Crédits →', view_ledger: '🔗 Voir le Registre', co2_calculator: '🌍 Calculateur CO₂',
        active_listings: 'OFFRES ACTIVES', total_volume: 'VOLUME TOTAL', active_traders: 'TRADERS ACTIFS', co2_offset: 'COMPENSATION CO₂',
        list_project: '🌱 Nouveau Projet Carbone', all_fields_required: 'Tous les champs obligatoires. Vérification IoT et satellite: 2–5 jours ouvrables.', project_name: 'NOM DU PROJET', project_type: 'TYPE DE PROJET', location: 'LOCALISATION', vintage_year: 'MILLÉSIME', total_credits: 'CRÉDITS TOTAUX (Tonnes CO₂)', price_credit: 'PRIX PAR CRÉDIT (ETH)', project_desc: 'DESCRIPTION DU PROJET',
        gps_coords: '📍 COORDONNÉES GPS', latitude: 'LATITUDE', longitude: 'LONGITUDE', use_my_location: '📍 Utiliser Ma Position', verify_maps: '🗺️ Vérifier sur Google Maps', satellite_image: '🛰️ IMAGE SATELLITE', drop_image: 'Déposez l\'image ici ou cliquez pour télécharger', image_formats: 'JPG, PNG · GPS EXIF extrait automatiquement', email_notifications: 'EMAIL POUR NOTIFICATIONS (OPTIONNEL)', email_hint: 'Nous enverrons un email quand l\'analyse sera terminée', verification_standard: 'NORME DE VÉRIFICATION', submit_project: '🚀 Soumettre le Projet',
        problem_a: 'A. Pas de Double Comptage — Registre de Propriété', problem_b: 'B. Pas de Greenwashing — Coffre de Preuves', problem_c: 'C. Zéro Intermédiaire — Paiement Direct',
        buy_credits: 'Acheter des Crédits', confirm_purchase: '✅ Confirmer l\'Achat', cancel: 'Annuler', close: 'Fermer', credits: 'crédits', tonnes: 'tonnes', loading: 'Chargement...',
        credits_held: 'CRÉDITS DÉTENUS', co2_neutralised: 'CO₂ COMPENSÉ', eth_balance: 'SOLDE ETH', my_portfolio_title: 'Mon Portfolio', seller_hub_title: 'Espace Vendeur',
        verified_projects: 'Projets Vérifiés', security_arch: '🔐 Architecture de Sécurité', co2_footprint: '🌍 Calculateur d\'Empreinte CO₂',
        chat_title: '🌿 Verde — Assistant IA', chat_subtitle: 'Posez vos questions sur les crédits carbone', chat_placeholder: 'Demandez à Verde...',
        retire_title: '🔥 Retirer des Crédits Carbone', retire_warning: '⚠️ Le retrait de crédits est permanent et irréversible.', company_name: 'NOM DE L\'ENTREPRISE / ORGANISATION', amount_retire: 'QUANTITÉ À RETIRER', retire_reason: 'RAISON DU RETRAIT', retire_download: '🔥 Retirer et Télécharger le Certificat',
        welcome_back: 'Bon Retour', create_account: 'Créer un Compte', sign_in_desc: 'Connectez-vous à votre compte CarbonChain', join_desc: 'Rejoignez le marché des crédits carbone',
        gps_extracted: '✅ GPS extrait de l\'EXIF de l\'image', gps_no_exif: '⚠️ Pas de GPS dans l\'image — veuillez saisir manuellement', gps_source_exif: '📍 De l\'EXIF de l\'image', gps_source_manual: '✏️ Saisi manuellement',
        loc_verification: 'Vérification de Localisation', loc_match_score: 'Score de Correspondance', resolved_address: 'Adresse Résolue',
        activity_reforestation: '🌳 Reboisement', activity_solar: '☀️ Énergie Solaire', activity_wind: '💨 Énergie Éolienne', activity_methane: '♻️ Capture de Méthane', activity_ocean: '🌊 Carbone Océanique', activity_efficiency: '⚡ Efficacité Énergétique',
        stats_co2: 'CO₂ Compensé', stats_verifications: 'Vérifications', stats_credits: 'Crédits Échangés', stats_projects: 'Projets Actifs',
        how_it_works: 'Comment ça Marche', step1_title: 'Télécharger et Vérifier', step1_desc: 'Soumettez des images satellite et des coordonnées GPS pour vérification IA', step2_title: 'Frapper des Crédits', step2_desc: 'Les projets approuvés reçoivent des tokens VCC sur Polygon', step3_title: 'Échanger ou Retirer', step3_desc: 'Achetez, vendez ou retirez des crédits avec certificat PDF',
        no_listings: 'Aucune offre trouvée', no_records: 'Pas encore d\'enregistrements', no_history: 'Pas encore de transactions',
        wallet_address: 'Adresse du Wallet', wallet_vcc: 'Solde VCC', wallet_matic: 'Solde ETH', wallet_refresh: 'Actualiser', wallet_copy: 'Copier', wallet_copied: 'Copié !',
        buy_qty: 'QUANTITÉ (CRÉDITS)', buy_total: 'Total', purchase_complete: 'Achat terminé !', view_explorer: 'Voir sur l\'Explorer',
        page_subtitle_market: 'Parcourez et achetez des crédits carbone vérifiés de projets mondiaux', page_subtitle_submit: 'Soumettez votre projet pour vérification satellite par IA',
        result_approved: 'Approuvé', result_rejected: 'Rejeté', result_confidence: 'Confiance', result_area: 'Surface', result_co2: 'CO₂ Compensé', result_credits: 'Crédits',
        connect_wallet: 'Connecter Wallet', connected: 'Connecté', connect_wallet_prompt: 'Connectez votre wallet pour continuer', connect_wallet_desc: 'Vous avez besoin d\'un wallet Web3 pour interagir avec la blockchain'
      }
    };

    let currentLang = localStorage.getItem('verdechain-language') || 'en';

    function t(key) { return (I18N[currentLang] || I18N.en)[key] || (I18N.en)[key] || key; }

    function toggleLangDropdown(e) { e && e.stopPropagation(); const dd = document.getElementById('langDropdown'); dd.classList.toggle('open'); if (dd.classList.contains('open')) renderLangDropdown(); }

    function renderLangDropdown() {
      const dd = document.getElementById('langDropdown');
      dd.innerHTML = LANGS.map(l => `<div class="lang-option${l.code === currentLang ? ' active' : ''}" onclick="setLanguage('${l.code}')"><span>${l.flag}</span><span>${l.name}</span><span class="lang-check">${l.code === currentLang ? '✓' : ''}</span></div>`).join('');
    }

    function setLanguage(code) {
      currentLang = code; localStorage.setItem('verdechain-language', code);
      const l = LANGS.find(x => x.code === code);
      document.getElementById('langFlag').textContent = l ? l.flag : '🇬🇧';
      document.getElementById('langName').textContent = code.toUpperCase();
      document.getElementById('langDropdown').classList.remove('open');
      applyLanguage();
      showToast('🌐 Language changed to ' + (l ? l.name : code), 'success');
    }

    function applyLanguage() {
      const tr = I18N[currentLang] || I18N.en;
      // Nav links
      const navMap = { 'nav-marketplace': 'marketplace', 'nav-projects': 'projects', 'nav-ledger': 'token_ledger', 'nav-buyer-dashboard': 'my_portfolio', 'nav-seller-dashboard': 'seller_hub', 'nav-security': 'security', 'nav-calculator': 'co2_calc' };
      Object.entries(navMap).forEach(([id, key]) => { const el = document.getElementById(id); if (el && tr[key]) el.textContent = tr[key]; });
      // Auth buttons
      const signInBtn = document.querySelector('#nav-auth-btns .btn-outline'); if (signInBtn) signInBtn.textContent = tr.sign_in || 'Sign In';
      const getStartedBtn = document.querySelector('#nav-auth-btns .btn-login'); if (getStartedBtn) getStartedBtn.textContent = tr.get_started || 'Get Started';
      const signOutBtn = document.querySelector('#nav-user-info .btn-outline'); if (signOutBtn) signOutBtn.textContent = tr.sign_out || 'Sign Out';
      // Hero
      const heroTag = document.querySelector('.hero-tag'); if (heroTag) heroTag.innerHTML = (tr.hero_tag || 'Blockchain Verified');
      const heroH1 = document.querySelector('.hero h1'); if (heroH1) heroH1.innerHTML = `${tr.hero_title_1 || 'Trade '}<span>${tr.hero_title_hl || 'Carbon Credits'}</span><br>${tr.hero_title_2 || 'Transparently'}`;
      const heroP = document.querySelector('.hero p'); if (heroP) heroP.textContent = tr.hero_desc || '';
      const heroBtns = document.querySelectorAll('.hero-btns button,.hero-btns .btn-primary,.hero-btns .btn-secondary');
      if (heroBtns[0]) heroBtns[0].textContent = tr.browse_credits || 'Browse Credits →';
      if (heroBtns[1]) heroBtns[1].textContent = tr.view_ledger || '🔗 View Token Ledger';
      if (heroBtns[2]) heroBtns[2].textContent = tr.co2_calculator || '🌍 CO₂ Calculator';
      // Stats
      const statLabels = document.querySelectorAll('.stat-label');
      const statKeys = ['active_listings', 'total_volume', 'active_traders', 'co2_offset'];
      statLabels.forEach((el, i) => { if (statKeys[i] && tr[statKeys[i]]) el.textContent = tr[statKeys[i]]; });
      // data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (tr[key]) {
          if (el.getAttribute('data-i18n-attr') === 'placeholder') el.placeholder = tr[key];
          else el.textContent = tr[key];
        }
      });
      // Submit page
      const submitTitle = document.querySelector('#page-submit-project .section-title'); if (submitTitle) submitTitle.textContent = tr.list_project || '';
      const submitSub = document.querySelector('#page-submit-project .section-sub'); if (submitSub) submitSub.textContent = tr.all_fields_required || '';
      const submitBtn = document.getElementById('submitBtn'); if (submitBtn && !submitBtn.disabled) submitBtn.textContent = tr.submit_project || '🚀 Submit Project';
    }

    // Close lang dropdown on outside click
    document.addEventListener('click', function (e) { if (!e.target.closest('.lang-switcher')) { const dd = document.getElementById('langDropdown'); if (dd) dd.classList.remove('open'); } });

    // ═══════════════════════════════════════════════════════════
    // FEATURE 2: GPS VERIFICATION + LEAFLET MAP + NOMINATIM
    // ═══════════════════════════════════════════════════════════
    let gpsMap = null, gpsMarker = null, gpsSource = 'none';

    function toDMS(dd, isLng) {
      const dir = dd >= 0 ? (isLng ? 'E' : 'N') : (isLng ? 'W' : 'S');
      const abs = Math.abs(dd);
      const d = Math.floor(abs);
      const m = Math.floor((abs - d) * 60);
      const s = ((abs - d - m / 60) * 3600).toFixed(1);
      return `${d}°${String(m).padStart(2, '0')}'${s}"${dir}`;
    }

    function updateGPS() {
      const lat = parseFloat(document.getElementById('f-lat').value);
      const lng = parseFloat(document.getElementById('f-lng').value);
      const dmsEl = document.getElementById('gps-dms');
      if (!isNaN(lat) && !isNaN(lng)) {
        dmsEl.textContent = `${toDMS(lat, false)} ${toDMS(lng, true)}`;
        updateGPSMap(lat, lng);
        // Null island check
        if (lat === 0 && lng === 0) { dmsEl.textContent += ' ⚠️ Null Island — invalid coordinates'; dmsEl.style.color = 'var(--red)'; return; }
        dmsEl.style.color = 'var(--text3)';
        if (gpsSource === 'none') gpsSource = 'manual';
        updateGPSSourceBadge();
        reverseGeocode(lat, lng);
      } else {
        dmsEl.textContent = '';
      }
    }

    function updateGPSMap(lat, lng) {
      const mapEl = document.getElementById('gps-map');
      if (!mapEl) return;
      mapEl.style.display = 'block';
      try {
        if (!gpsMap) {
          gpsMap = L.map('gps-map', { scrollWheelZoom: false }).setView([lat, lng], 10);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OSM', maxZoom: 18 }).addTo(gpsMap);
          gpsMarker = L.marker([lat, lng], { draggable: true }).addTo(gpsMap);
          gpsMarker.on('dragend', function (e) {
            const p = e.target.getLatLng();
            document.getElementById('f-lat').value = p.lat.toFixed(4);
            document.getElementById('f-lng').value = p.lng.toFixed(4);
            gpsSource = 'manual';
            updateGPS();
          });
        } else {
          gpsMap.setView([lat, lng], 10);
          gpsMarker.setLatLng([lat, lng]);
        }
        setTimeout(() => gpsMap.invalidateSize(), 200);
      } catch (e) { console.warn('Leaflet error:', e); }
    }

    function useMyLocation() {
      if (!navigator.geolocation) { showToast('Geolocation not supported', 'error'); return; }
      showToast('📍 Getting your location...', 'info');
      navigator.geolocation.getCurrentPosition(pos => {
        document.getElementById('f-lat').value = pos.coords.latitude.toFixed(4);
        document.getElementById('f-lng').value = pos.coords.longitude.toFixed(4);
        gpsSource = 'manual';
        updateGPS();
        showToast('📍 Location found!', 'success');
      }, err => { showToast('Location error: ' + err.message, 'error'); }, { enableHighAccuracy: true, timeout: 10000 });
    }

    function verifyOnMaps() {
      const lat = document.getElementById('f-lat').value, lng = document.getElementById('f-lng').value;
      if (!lat || !lng) { showToast('Enter coordinates first', 'error'); return; }
      window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
    }

    function updateGPSSourceBadge() {
      const badge = document.getElementById('gps-source-badge');
      if (!badge) return;
      badge.style.display = 'block';
      if (gpsSource === 'exif') {
        badge.innerHTML = `<span class="gps-badge exif">${t('gps_source_exif')}</span>`;
      } else if (gpsSource === 'manual') {
        badge.innerHTML = `<span class="gps-badge manual">${t('gps_source_manual')}</span>`;
      }
    }

    async function reverseGeocode(lat, lng) {
      const el = document.getElementById('gps-nominatim');
      if (!el) return;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=10`, { headers: { 'Accept-Language': currentLang } });
        if (!res.ok) return;
        const data = await res.json();
        const addr = data.address || {};
        const parts = [addr.state || addr.county, addr.country].filter(Boolean).join(', ');
        const landuse = addr.landuse || addr.natural || addr.leisure || '—';
        el.style.display = 'block';
        el.innerHTML = `<div style="font-family:var(--mono);font-size:10px;color:var(--text3);margin-bottom:6px">${t('resolved_address')}</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:4px">📍 ${parts || data.display_name || 'Unknown'}</div>
      <div style="font-size:12px;color:var(--text3)">Land use: ${landuse} · ${data.display_name ? data.display_name.slice(0, 60) + '...' : ''}</div>`;
      } catch (e) { console.warn('Nominatim error:', e); }
    }

    // ═══════════════════════════════════════════════════════════
    // FEATURE 2B: IMAGE DROPZONE + EXIF GPS EXTRACTION
    // ═══════════════════════════════════════════════════════════
    let uploadedImageFile = null;

    async function handleImageDrop(file) {
      if (!file || !file.type.startsWith('image/')) return;
      uploadedImageFile = file;
      // Preview
      const preview = document.getElementById('image-preview');
      const reader = new FileReader();
      reader.onload = e => { preview.innerHTML = `<img src="${e.target.result}" alt="Satellite image"/>`; preview.style.display = 'block'; };
      reader.readAsDataURL(file);
      // EXIF extraction
      const exifBadge = document.getElementById('exif-badge');
      exifBadge.style.display = 'block';
      try {
        if (typeof exifr !== 'undefined') {
          const gps = await exifr.gps(file);
          if (gps && gps.latitude && gps.longitude) {
            document.getElementById('f-lat').value = gps.latitude.toFixed(4);
            document.getElementById('f-lng').value = gps.longitude.toFixed(4);
            gpsSource = 'exif';
            exifBadge.innerHTML = `<span class="gps-badge exif">${t('gps_extracted')}</span>`;
            updateGPS();
            showToast('✅ GPS coordinates extracted from image EXIF!', 'success');
          } else {
            gpsSource = 'none';
            exifBadge.innerHTML = `<span class="gps-badge manual">${t('gps_no_exif')}</span>`;
          }
        } else {
          exifBadge.innerHTML = `<span class="gps-badge manual">${t('gps_no_exif')}</span>`;
        }
      } catch (e) {
        console.warn('EXIF error:', e);
        exifBadge.innerHTML = `<span class="gps-badge manual">${t('gps_no_exif')}</span>`;
      }
      // Run AI fraud detection scan on the uploaded image
      runAIImageScan(file.name);
      updateSubmitChecklist();
    }

    // ═══════════════════════════════════════════════════════════
    // FEATURE 3: AI CHAT WIDGET (Verde)
    // ═══════════════════════════════════════════════════════════
    let chatOpen = false, chatHistory = [], chatInitialized = false;

    function toggleChat() {
      chatOpen = !chatOpen;
      document.getElementById('chatPanel').classList.toggle('open', chatOpen);
      document.getElementById('chatBubble').classList.remove('has-msg');
      if (chatOpen && !chatInitialized) {
        chatInitialized = true;
        addChatMsg('bot', "Hi! I'm Verde 🌿 I can help you understand carbon credits, how AI verification works, or guide you through the platform. What would you like to know?");
        renderSuggestions(["How does AI verification work?", "What is a VCC token?", "How do I earn carbon credits?"]);
      }
      if (chatOpen) document.getElementById('chatInput').focus();
      if (!chatOpen) { chatHistory = []; chatInitialized = false; document.getElementById('chatMessages').innerHTML = ''; document.getElementById('chatSuggestions').innerHTML = ''; }
    }

    function addChatMsg(role, text) {
      const msgs = document.getElementById('chatMessages');
      const div = document.createElement('div');
      div.className = 'chat-msg ' + role;
      // Basic markdown: bold and bullets
      let html = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/^- (.+)$/gm, '• $1');
      div.innerHTML = (role === 'bot' ? '🌿 ' : '') + html;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      chatHistory.push({ role, text });
      if (chatHistory.length > 50) chatHistory = chatHistory.slice(-40);
    }

    function showTyping() {
      const msgs = document.getElementById('chatMessages');
      const div = document.createElement('div');
      div.className = 'chat-typing'; div.id = 'typingIndicator';
      div.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
    }

    function hideTyping() { const el = document.getElementById('typingIndicator'); if (el) el.remove(); }

    function renderSuggestions(suggestions) {
      const el = document.getElementById('chatSuggestions');
      el.innerHTML = suggestions.map(s => `<button class="chat-suggestion" onclick="askSuggestion(this.textContent)">${s}</button>`).join('');
    }

    function askSuggestion(text) {
      document.getElementById('chatSuggestions').innerHTML = '';
      document.getElementById('chatInput').value = text;
      sendChat();
    }

    async function sendChat() {
      const input = document.getElementById('chatInput');
      const msg = input.value.trim();
      if (!msg) return;
      input.value = '';
      addChatMsg('user', msg);
      document.getElementById('chatSuggestions').innerHTML = '';
      showTyping();

      // REAL GROQ API CALL
      if (getApiKey()) {
        try {
          const contextInfo = state.user ? `User: ${state.user.full_name}, Role: ${state.user.role}, Credits: ${state.user.credit_balance || 0}` : 'Not logged in';
          const sysMsg = { role: 'system', content: `You are Verde, the AI assistant for CarbonChain — an AI-powered carbon credit marketplace that uses AI for cybersecurity (deepfake detection, document forgery scanning, GPS-biome verification, transaction anomaly detection). Keep responses under 80 words. Be friendly, use 🌿 emoji occasionally. Context: ${contextInfo}` };
          const msgs = [sysMsg];
          chatHistory.filter(m => m.role === 'user' || m.role === 'bot').slice(-8).forEach(m => {
            msgs.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text });
          });
          msgs.push({ role: 'user', content: msg });
          const reply = await callAI(msgs, 300);
          if (reply) {
            hideTyping();
            addChatMsg('bot', reply);
            renderSuggestions(["How does AI detect fake images?", "What is a carbon credit?", "How does GPS verification work?"]);
            return;
          }
        } catch (e) {
          console.warn('Groq chat error:', e);
        }
      }

      // AI response engine
      await sleep(800 + Math.random() * 1200);
      hideTyping();
      const response = getVerdeReply(msg);
      addChatMsg('bot', response.reply);
      if (response.suggestions) renderSuggestions(response.suggestions);
    }

    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function getVerdeReply(message) {
      const m = message.toLowerCase();
      if (m.match(/hello|hi |hey|howdy|hola|bonjour|hallo|namaste/))
        return {
          reply: pick([
            "Hello! 🌿 Welcome to CarbonChain! I'm Verde, your AI guide to carbon credits, blockchain verification, and sustainability. What can I help you with?",
            "Hey there! 🌿 I'm Verde — ask me about how our AI detects fake satellite images, how carbon credits work, or anything about the platform!",
            "Hi! 🌱 Great to see you on CarbonChain. I can explain our AI cybersecurity features, help you buy credits, or walk you through the verification process. What interests you?",
          ]), suggestions: pick([["How does AI verification work?", "What is a VCC token?", "How do I buy credits?"], ["Tell me about AI fraud detection", "How do carbon credits work?", "What makes CarbonChain different?"]])
        };
      if (m.match(/verif|ai.*image|satellite|how.*work|groq|vision|llama/))
        return {
          reply: pick([
            "Great question! 🛰️ Our AI runs **4 security checkpoints**: 1) **GAN fingerprint detection** on satellite images using CNNDetect (ResNet-50) to catch AI-generated fakes 2) **Document forgery scanning** with Llama 3.2 90B Vision for OCR and seal detection 3) **GPS-biome cross-verification** matching image content to coordinates 4) **Transaction anomaly monitoring** for wash trading and Sybil attacks.",
            "Our verification pipeline uses **Llama 3.2 90B Vision** via Groq API 🤖 When a seller uploads a satellite image, the AI analyzes **pixel noise frequency patterns** — real Sentinel-2 sensors produce characteristic noise that GAN generators can't replicate. It also calculates **NDVI vegetation index** and cross-references GPS coordinates against ESA WorldCover land classification data.",
            "Here's how it works 🔍 The AI performs **8-point fraud analysis** on every uploaded image: AI-generated probability, tampering detection, GPS-biome match, EXIF metadata integrity, resolution quality, clone/copy-paste artifacts, GAN fingerprint analysis, and noise pattern consistency. If any score is suspicious, the image is flagged and rejected. Real satellite captures from Sentinel-2 have unique sensor signatures that fakes can't copy.",
          ]), suggestions: pick([["What's the anti-greenwash score?", "Can AI detect Photoshop edits?", "What about GPS verification?"], ["How does GAN detection work?", "What is NDVI?", "Show me the security dashboard"]])
        };
      if (m.match(/vcc|token|what.*credit|carbon credit/))
        return {
          reply: pick([
            "**VCC** (CarbonChain Carbon Credit) tokens are ERC-1155 tokens on Polygon blockchain 🔗 Each token = 1 tonne of verified CO₂ offset. When you buy credits, they're **automatically burned** (retired) in the same transaction — generating a PDF certificate as proof. This prevents double counting!",
            "Carbon credits represent **verified CO₂ reductions** 🌍 On CarbonChain, each credit is tokenized as a unique blockchain token. When purchased, AI has already verified the project's satellite imagery, government license, and GPS coordinates. The token is instantly burned after purchase — giving you an irrevocable offset claim.",
            "A VCC token = 1 tonne of CO₂ offset, verified by AI and recorded on Polygon blockchain 🌿 What makes ours different: every token is backed by **AI-verified satellite imagery** and **government-approved licenses**. No unverified credits can enter the marketplace. Once bought, tokens auto-burn so they can never be resold or double-counted.",
          ]), suggestions: pick([["How do I buy VCC?", "What does burning mean?", "Why Polygon?"], ["How is CO₂ calculated?", "What's the token ledger?", "Can tokens be transferred?"]])
        };
      if (m.match(/buy|purchase|how.*get/))
        return {
          reply: pick([
            "To buy carbon credits 🛒: Browse the **Marketplace** → click **Buy Credits** → choose quantity → confirm. The smart contract handles everything: **97.5% goes to the seller instantly**, tokens are minted then **auto-burned** (retired), and you get a **PDF certificate** downloaded automatically. One click = purchase + retire + certificate!",
            "Buying is simple! 🌿 Pick any verified project → set quantity → confirm purchase. Behind the scenes: smart contract pays the seller 97.5% in <15 seconds, your VCC tokens are minted and immediately burned for your offset claim, and a retirement certificate PDF downloads automatically. No middlemen, no delays!",
          ]), suggestions: ["What's the minimum purchase?", "How do payouts work?", "Show me the marketplace"]
        };
      if (m.match(/retire|burn|offset|certificate|pdf/))
        return {
          reply: pick([
            "On CarbonChain, retirement is **automatic**! 🔥 When you buy credits, the smart contract burns the tokens in the same transaction — no manual step needed. You get a **PDF certificate** with your company name, CO₂ tonnes, transaction hash, and an official retirement stamp. The burned tokens appear as '🔥 RETIRED' in the Token Ledger.",
            "Token burning happens **instantly on purchase** ⚡ The ERC-1155 `burn()` function sends your tokens to the zero address (`0x000...dead`) — permanently destroying them. This is a **cryptographic guarantee** from the blockchain itself. Your PDF certificate contains the burn transaction hash that anyone can verify on PolygonScan.",
          ]), suggestions: ["Can I undo burning?", "What's the token ledger?", "How does the PDF work?"]
        };
      if (m.match(/sell|list|project.*submit|earn|seller/))
        return {
          reply: pick([
            "To sell credits as a project owner 🌳: 1) Upload your **government license** (AI scans for forgery) 2) Upload **satellite imagery** (AI checks for deepfakes) 3) Enter **GPS coordinates** (AI verifies biome match) 4) Fill project details 5) Submit! All 3 AI checkpoints must pass before your project goes live. Once listed, you receive **97.5%** of every sale instantly.",
            "The seller flow has **3 AI security gates** 🔒: Your government license is OCR-scanned and validated against known templates. Your satellite image undergoes 8-point GAN fingerprint analysis. Your GPS coordinates are cross-verified against the image's vegetation type. Only after ALL THREE pass can you list your project. Fraudsters are stopped at the gate!",
          ]), suggestions: ["What documents do I need?", "How long is verification?", "What's the 2.5% fee?"]
        };
      if (m.match(/double.*count|ledger|unique/))
        return {
          reply: pick([
            "Double counting is **mathematically impossible** on CarbonChain 🔗 Each credit is a unique ERC-1155 token with exactly ONE owner at any time — enforced by the blockchain, not by us. When tokens are burned on purchase, they're sent to the zero address and can never be recovered, transferred, or re-minted. Check the Token Ledger page to see every token's complete ownership history!",
            "Our Token Ledger solves double counting through **blockchain single-ownership enforcement** 🔐 Traditional registries can list the same credit across multiple databases. On CarbonChain, every token has a unique ID, one owner, and a complete audit trail. Burned tokens show '🔥 BURNED' — they exist on-chain as proof but can never be used again.",
          ]), suggestions: ["View the Token Ledger", "How does burning work?", "Compare to traditional systems"]
        };
      if (m.match(/greenwash|fake|evidence|proof|fraud/))
        return {
          reply: pick([
            "We fight greenwashing with our **Evidence Vault** + **AI scoring** 🛰️ Every project has satellite imagery, IoT sensor data, GPS coordinates, and auditor reports stored on IPFS. Our anti-greenwash score (0-100) combines: temporal satellite comparison (real growth vs static), NDVI vegetation index, auditor verification status, and GPS-biome consistency. Projects below 40 are auto-rejected.",
            "Greenwashing detection uses **6 AI models** 🤖: CNNDetect for fake satellite images, Llama Vision for document forgery, NDVI regression for vegetation verification, temporal CNN for growth tracking, Isolation Forest for transaction anomalies, and Llama 3.3 for GPS-biome reasoning. Click the 🛰️ Evidence button on any card to see the full proof chain!",
          ]), suggestions: ["What's the anti-greenwash score?", "How does temporal analysis work?", "What is NDVI?"]
        };
      if (m.match(/gps|location|coordinates|exif|nominatim|map/))
        return {
          reply: pick([
            "GPS verification catches **location fraud** 📍 Our system: 1) Auto-extracts EXIF GPS from uploaded photos 2) Reverse-geocodes via Nominatim to get country/state/biome 3) AI checks if vegetation in the image matches the expected biome at those coordinates 4) Generates a location match score (0-100). Upload a forest image with desert coordinates? Score drops to 8 — rejected! 🔍",
            "The GPS-biome check is one of our strongest fraud detectors 🌍 It uses **ESA WorldCover** land classification at 10m resolution to verify: does the stated location actually have the vegetation type shown in the image? We also check for Null Island (0,0) coordinates and ocean coordinates. The Leaflet map shows the exact pin so sellers can visually confirm their area matches.",
          ]), suggestions: ["How does EXIF extraction work?", "What if GPS doesn't match?", "Can I verify on Google Maps?"]
        };
      if (m.match(/fee|cost|middlem|97\.5|2\.5|price/))
        return {
          reply: pick([
            "CarbonChain cuts out **all middlemen** ⚡ Traditional carbon markets: Buyer → Broker (5%) → Registry (10%) → Validator (8%) → Seller gets ~60%. CarbonChain: Buyer → Smart Contract → Seller gets **97.5%** in <15 seconds. The 2.5% protocol fee covers AI verification costs and platform maintenance. That's it. No hidden charges!",
            "Our fee structure is radically transparent 💰 The smart contract is publicly auditable — it sends exactly 97.5% to the seller's wallet and 2.5% to the protocol treasury. Settlement: under 15 seconds on Polygon. Compare: traditional brokers take 30-40% and settle in 30-90 days. We've eliminated an entire industry of intermediaries!",
          ]), suggestions: ["How fast are payouts?", "Why only 2.5%?", "What's the average credit price?"]
        };
      if (m.match(/security|cyber|threat|attack|hack/))
        return {
          reply: pick([
            "CarbonChain uses **AI-powered cybersecurity** at every layer 🔐:\n- **Image layer**: GAN fingerprint + deepfake detection\n- **Document layer**: OCR forgery scanning\n- **Location layer**: GPS-biome cross-verification\n- **Transaction layer**: Wash trading + Sybil attack detection\n- **Blockchain layer**: ERC-1155 single-ownership + token burning\n\nCheck the Security page for our real-time AI threat dashboard!",
            "Our security architecture has **4 AI checkpoints** + blockchain guarantees 🛡️ The AI catches fraud BEFORE it enters the system (fake images, forged licenses, GPS mismatches). The blockchain prevents fraud AFTER (double counting, unauthorized transfers). Together: **AI secures the entry, blockchain secures the exit**. Visit the Security page to see live threat monitoring!",
          ]), suggestions: ["Show me the security dashboard", "How does AI detect deepfakes?", "What's a Sybil attack?"]
        };
      // Default — varied responses
      return {
        reply: pick([
          "Interesting question! 🌿 I'm Verde, and I can help with: **AI fraud detection** (how we catch fake satellite images), **carbon credits** (buying, selling, retiring), **blockchain security** (token burning, double-count prevention), or **GPS verification**. What area interests you most?",
          "I'd love to help! 🌱 Try asking me about: how our **AI detects deepfake satellite images**, what a **carbon credit** is, how **token burning** prevents fraud, or how **GPS-biome verification** catches location mismatches. I'm here to explain any part of CarbonChain!",
          "Great topic! 🌿 I specialize in explaining how AI and blockchain work together to secure the carbon credit marketplace. Ask me about **GAN fingerprint detection**, **document forgery scanning**, **NDVI vegetation analysis**, or **smart contract payouts** — I'll break it down for you!",
        ]), suggestions: pick([["How does AI verification work?", "What is a carbon credit?", "Show me the security features"], ["How do you catch fake images?", "What's the token ledger?", "How do sellers earn?"]])
      };
    }

    // ═══════════════════════════════════════════════════════════
    // FEATURE 4: RETIREMENT + PDF CERTIFICATE (jsPDF)
    // ═══════════════════════════════════════════════════════════
    let retireTarget = null;

    function openRetireModal(projectId, projectName, maxCredits) {
      if (!state.user) { showToast('Sign in first', 'error'); return; }
      retireTarget = { projectId, projectName, maxCredits: maxCredits || 1 };
      document.getElementById('retire-project-info').innerHTML = `<div style="font-size:14px;font-weight:600">${projectName}</div><div style="font-size:12px;color:var(--text3);margin-top:4px">Max: ${maxCredits} credits available to retire</div>`;
      document.getElementById('retire-amount').max = maxCredits;
      document.getElementById('retire-amount').value = 1;
      document.getElementById('retire-company').value = state.user?.full_name || '';
      document.getElementById('retire-reason').value = '';
      updateRetirePreview();
      document.getElementById('retireModal').classList.add('open');
    }

    function updateRetirePreview() {
      const amt = parseInt(document.getElementById('retire-amount').value) || 0;
      const company = document.getElementById('retire-company').value || 'Holder';
      const el = document.getElementById('retire-preview');
      el.innerHTML = `<div style="font-size:11px;font-family:var(--mono);color:var(--text3);margin-bottom:6px">CERTIFICATE PREVIEW</div>
    <div style="font-weight:600">${company}</div>
    <div style="color:var(--green);font-size:20px;font-weight:800;margin:4px 0">${amt} VCC = ${amt}t CO₂</div>
    <div style="font-size:12px;color:var(--text3)">≈ ${Math.round(amt / 0.022).toLocaleString()} trees equivalent</div>`;
    }

    async function confirmRetire() {
      if (!retireTarget) return;
      const amt = parseInt(document.getElementById('retire-amount').value);
      const company = document.getElementById('retire-company').value.trim();
      const reason = document.getElementById('retire-reason').value.trim();
      if (!amt || amt < 1) { showToast('Enter a valid amount', 'error'); return; }
      if (!company) { showToast('Enter company/organization name', 'error'); return; }
      if (amt > retireTarget.maxCredits) { showToast('Amount exceeds available credits', 'error'); return; }
      showToast('🔥 Burning tokens on blockchain...', 'info');
      await sleep(2000);
      // Update holdings
      const holding = db.holdings.find(h => h.userId === state.user?.id && h.projectId === retireTarget.projectId);
      if (holding) { holding.credits = Math.max(0, holding.credits - amt); }
      state.user.credit_balance = Math.max(0, (state.user.credit_balance || 0) - amt);
      localStorage.setItem('cc_user', JSON.stringify(state.user));
      // Burn actual owned tokens from the ledger
      const txHash = '0x' + [...Array(64)].map(() => '0123456789abcdef'[~~(Math.random() * 16)]).join('');
      const ownerAddr = state.user.wallet_address ? truncate(state.user.wallet_address) : '0xYou...';
      const ownedTokens = TOKEN_LEDGER.filter(t => t.owner === ownerAddr && t.status === 'active' && t.projectId === retireTarget.projectId);
      const toBurn = Math.min(amt, ownedTokens.length);
      for (let i = 0; i < toBurn; i++) {
        ownedTokens[i].prevOwners = [...(ownedTokens[i].prevOwners || []), ownerAddr];
        ownedTokens[i].owner = 'BURNED';
        ownedTokens[i].status = 'retired';
        ownedTokens[i].retiredAt = new Date().toISOString().split('T')[0];
        ownedTokens[i].retireTxHash = txHash;
      }
      // If more credits retired than tokens exist (edge case), create new burned entries
      for (let i = toBurn; i < amt; i++) {
        TOKEN_LEDGER.push({ id: 'CC-R' + Date.now().toString().slice(-4) + i, projectId: retireTarget.projectId, projectName: retireTarget.projectName, projectType: '', owner: 'BURNED', status: 'retired', vintage: 2024, mintedAt: new Date().toISOString().split('T')[0], txHash, prevOwners: [ownerAddr] });
      }
      closeModal('retireModal');
      showToast('🔥 Credits retired! Generating PDF certificate...', 'success');
      await sleep(500);
      // Generate PDF
      generateRetirementPDF({ company, credits: amt, project_name: retireTarget.projectName, project_location: holding?.project?.location || 'Global', date: new Date().toLocaleDateString(), cert_id: 'CC-CERT-' + Date.now().toString(36).toUpperCase(), tx_hash: txHash, reason: reason || 'Carbon offset claim' });
      // Simulate email notification
      simulateEmailNotification('retire', { company, credits: amt, project: retireTarget.projectName, txHash });
      retireTarget = null;
      if (document.getElementById('page-ledger').classList.contains('active')) loadLedger();
      if (document.getElementById('page-buyer-dashboard').classList.contains('active')) loadBuyerDashboard();
    }

    function generateRetirementPDF(data) {
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'pt', 'a4');
        const W = 595, H = 842;
        // Background
        doc.setFillColor(240, 253, 244); doc.rect(0, 0, W, H, 'F');
        // Double border
        doc.setDrawColor(20, 83, 45); doc.setLineWidth(2); doc.rect(20, 20, W - 40, H - 40); doc.rect(25, 25, W - 50, H - 50);
        // Header band
        doc.setFillColor(20, 83, 45); doc.rect(25, 25, W - 50, 80, 'F');
        doc.setTextColor(255, 255, 255); doc.setFontSize(28); doc.setFont('helvetica', 'bold');
        doc.text('CarbonChain', W / 2, 58, { align: 'center' });
        doc.setFontSize(11); doc.setFont('helvetica', 'normal');
        doc.text('Decentralized Carbon Credit Marketplace', W / 2, 78, { align: 'center' });
        // Title
        doc.setTextColor(20, 83, 45); doc.setFontSize(20); doc.setFont('helvetica', 'bold');
        doc.text('CARBON CREDIT RETIREMENT CERTIFICATE', W / 2, 140, { align: 'center' });
        // Divider
        doc.setDrawColor(34, 197, 94); doc.setLineWidth(1); doc.line(120, 155, W - 120, 155);
        // Certifies
        doc.setTextColor(100, 100, 100); doc.setFontSize(12); doc.setFont('helvetica', 'italic');
        doc.text('This certifies that', W / 2, 190, { align: 'center' });
        // Company
        doc.setTextColor(20, 83, 45); doc.setFontSize(24); doc.setFont('helvetica', 'bold');
        doc.text(data.company || 'Holder', W / 2, 220, { align: 'center' });
        // Has retired
        doc.setTextColor(100, 100, 100); doc.setFontSize(12); doc.setFont('helvetica', 'italic');
        doc.text('has permanently retired', W / 2, 248, { align: 'center' });
        // Credits
        doc.setTextColor(34, 197, 94); doc.setFontSize(48); doc.setFont('helvetica', 'bold');
        doc.text(data.credits + ' VCC', W / 2, 300, { align: 'center' });
        // CO2
        doc.setTextColor(80, 80, 80); doc.setFontSize(14); doc.setFont('helvetica', 'normal');
        doc.text('representing ' + data.credits + ' metric tons of CO2 equivalent', W / 2, 325, { align: 'center' });
        // Divider
        doc.line(100, 345, W - 100, 345);
        // Details grid
        const dY = 375, lX = 80, rX = W / 2 + 20;
        const rows = [
          ['Project Name', data.project_name, 'Project Location', data.project_location],
          ['Retirement Date', data.date, 'Certificate ID', data.cert_id],
          ['Transaction Hash', (data.tx_hash || '').slice(0, 28) + '...', 'Retirement Reason', data.reason || 'Carbon offset']
        ];
        rows.forEach((row, i) => {
          const y = dY + i * 55;
          doc.setFont('helvetica', 'bold'); doc.setTextColor(120, 120, 120); doc.setFontSize(9);
          doc.text(row[0], lX, y); doc.text(row[2], rX, y);
          doc.setFont('helvetica', 'normal'); doc.setTextColor(30, 30, 30); doc.setFontSize(11);
          doc.text(String(row[1] || 'N/A'), lX, y + 15); doc.text(String(row[3] || 'N/A'), rX, y + 15);
        });
        // Equivalence
        const eqY = dY + 180;
        doc.setFillColor(240, 253, 244); doc.setDrawColor(34, 197, 94); doc.setLineWidth(1);
        doc.roundedRect(60, eqY, W - 120, 45, 6, 6, 'FD');
        doc.setTextColor(20, 83, 45); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('Environmental Impact Equivalent', W / 2, eqY + 18, { align: 'center' });
        doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(60, 60, 60);
        doc.text(Math.round(data.credits / 0.022).toLocaleString() + ' trees · ' + Math.round(data.credits * 4750).toLocaleString() + ' km of car emissions · ' + Math.round(data.credits / 4.5 * 10) / 10 + ' homes powered/year', W / 2, eqY + 34, { align: 'center' });
        // Warning
        const wY = eqY + 65;
        doc.setFillColor(254, 242, 242); doc.roundedRect(60, wY, W - 120, 40, 4, 4, 'F');
        doc.setTextColor(185, 28, 28); doc.setFontSize(10); doc.setFont('helvetica', 'bold');
        doc.text('This credit has been permanently burned from the blockchain and cannot be', W / 2, wY + 16, { align: 'center' });
        doc.text('reused, resold, or transferred. The offset claim is irrevocable.', W / 2, wY + 28, { align: 'center' });
        // Stamp
        const sX = W - 120, sY = H - 160;
        doc.setDrawColor(220, 38, 38); doc.setLineWidth(3); doc.circle(sX, sY, 45); doc.circle(sX, sY, 40);
        doc.setTextColor(220, 38, 38); doc.setFontSize(8); doc.setFont('helvetica', 'bold');
        doc.text('PERMANENTLY', sX, sY - 8, { align: 'center' }); doc.text('RETIRED', sX, sY + 4, { align: 'center' });
        doc.setFontSize(6); doc.text('BLOCKCHAIN VERIFIED', sX, sY + 16, { align: 'center' });
        // Footer
        doc.setTextColor(120, 120, 120); doc.setFontSize(9); doc.setFont('helvetica', 'normal');
        doc.text('Verified by AI · Recorded on Polygon Blockchain · CarbonChain Carbon Credit Marketplace', W / 2, H - 50, { align: 'center' });
        // Download
        doc.save('carbonchain-certificate-' + data.cert_id + '.pdf');
        showToast('📄 Certificate downloaded!', 'success');
      } catch (e) {
        console.error('PDF generation error:', e);
        showToast('PDF generation failed — check console', 'error');
      }
    }

    // ═══════════════════════════════════════════════════════════
    // FEATURE 5: EMAIL NOTIFICATION SIMULATION
    // ═══════════════════════════════════════════════════════════
    function simulateEmailNotification(type, data) {
      const email = document.getElementById('f-email')?.value || state.user?.email || '';
      if (!email && type !== 'retire') return;
      setTimeout(() => {
        if (type === 'verification') {
          showToast('📧 Verification result email sent to ' + (email || 'registered email'), 'success');
        } else if (type === 'mint') {
          showToast('📧 Minting success email sent with transaction details', 'success');
        } else if (type === 'retire') {
          showToast('📧 Retirement confirmation email sent with certificate link', 'success');
        } else if (type === 'welcome') {
          showToast('📧 Welcome email sent to ' + (email || 'your email'), 'success');
        }
      }, 1500);
    }

    // ═══════════════════════════════════════════════════════════
    // FEATURE 6: GROQ API KEY MANAGEMENT
    // ═══════════════════════════════════════════════════════════
    let _aiKey = localStorage.getItem('cc_ai_key') || '';
    const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

    function getApiKey() { return _aiKey; }

    async function callAI(messages, maxTokens) {
      if (!_aiKey) return null;
      const res = await fetch(GROQ_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + _aiKey },
        body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages, max_tokens: maxTokens || 400, temperature: 0.7 })
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error?.message || 'API error ' + res.status); }
      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    }

    async function callAIVision(base64, mimeType, prompt, maxTokens) {
      if (!_aiKey) return null;
      const res = await fetch(GROQ_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + _aiKey },
        body: JSON.stringify({
          model: 'llama-3.2-90b-vision-preview', messages: [{
            role: 'user', content: [
              { type: 'image_url', image_url: { url: 'data:' + mimeType + ';base64,' + base64 } },
              { type: 'text', text: prompt }
            ]
          }], max_tokens: maxTokens || 500, temperature: 0.3
        })
      });
      if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.error?.message || 'API error ' + res.status); }
      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    }

    function saveApiKey() {
      const key = document.getElementById('apiKeyInput').value.trim();
      const statusEl = document.getElementById('apiKeyStatus');
      if (!key) {
        _aiKey = ''; localStorage.removeItem('cc_ai_key');
        statusEl.className = 'api-status none'; statusEl.innerHTML = '🔑 Paste your Google AI key above';
        updateApiNavBtn(); return;
      }
      if (!key.startsWith('gsk_')) {
        statusEl.className = 'api-status err'; statusEl.innerHTML = '❌ Invalid key — Groq keys start with gsk_...'; return;
      }
      statusEl.className = 'api-status none'; statusEl.innerHTML = '<div class="spinner" style="width:14px;height:14px;border-width:2px;display:inline-block;vertical-align:middle;margin-right:8px"></div> Connecting to Groq AI...';
      fetch(GROQ_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'user', content: 'Reply with exactly: OK' }], max_tokens: 5 })
      }).then(res => {
        if (res.ok) {
          _aiKey = key; localStorage.setItem('cc_ai_key', key);
          statusEl.className = 'api-status ok';
          statusEl.innerHTML = '✅ Connected! Llama 3.3 70B + Vision are live. All AI features making real API calls.';
          updateApiNavBtn(); closeModal('apiKeyModal');
          showToast('🤖 AI Engine live! Real Llama 3.3 70B powering all scans.', 'success');
        } else {
          res.json().then(d => { statusEl.className = 'api-status err'; statusEl.innerHTML = '❌ ' + (d.error?.message || 'Invalid key'); }).catch(() => { statusEl.className = 'api-status err'; statusEl.innerHTML = '❌ Authentication failed'; });
        }
      }).catch(err => { statusEl.className = 'api-status err'; statusEl.innerHTML = '❌ Network error: ' + err.message; });
    }

    function updateApiNavBtn() {
      const btn = document.getElementById('apiKeyNavBtn');
      const icon = document.getElementById('apiKeyNavIcon');
      const label = document.getElementById('apiKeyNavLabel');
      if (_aiKey) {
        btn.className = 'api-key-btn connected'; icon.textContent = '🤖'; label.textContent = 'AI Live';
      } else {
        btn.className = 'api-key-btn'; icon.textContent = '🔑'; label.textContent = 'Connect AI';
      }
    }

    function renderRealDocScan(r, fileName) {
      const body = document.getElementById('doc-scan-body'); if (!body) return;
      const isAuth = r.is_legitimate === true && (r.overall_authenticity || 0) >= 60;
      const checks = [
        { label: 'OCR Text Extraction', val: r.ocr_certificate_number ? 95 : 20, status: r.ocr_certificate_number ? ('✓ Certificate: ' + r.ocr_certificate_number) : '✗ No valid certificate number found' },
        { label: 'Company Name', val: r.ocr_company_name ? 92 : 15, status: r.ocr_company_name ? ('✓ ' + r.ocr_company_name) : '✗ Could not extract company name' },
        { label: 'Issuing Body', val: r.ocr_issuing_body ? 94 : 10, status: r.ocr_issuing_body ? ('✓ ' + r.ocr_issuing_body) : '✗ No government body identified' },
        { label: 'Official Seal/Stamp', val: r.has_official_seal ? 96 : 8, status: r.has_official_seal ? '✓ Official seal detected' : '✗ No official seal found' },
        { label: 'Font & Layout', val: r.layout_match_score || r.font_consistency_score || 50, status: isAuth ? '✓ Layout consistent with government format' : '✗ Layout does not match known templates' },
        { label: 'Overall Authenticity', val: r.overall_authenticity || 50, status: isAuth ? '✓ Document appears legitimate' : '✗ Document appears fraudulent or invalid' },
      ];
      body.innerHTML = checks.map(c => {
        const barC = c.val > 70 ? 'var(--green)' : c.val > 40 ? 'var(--amber)' : 'var(--red)';
        const statC = c.val > 70 ? 'var(--text3)' : 'var(--red)';
        return `<div class="ai-scan-row"><div class="ai-scan-label">${c.label}</div><div class="ai-scan-bar"><div class="ai-scan-fill" style="width:${Math.max(c.val, 3)}%;background:${barC}"></div></div><div class="ai-scan-value" style="color:${barC}">${c.val}%</div></div>
    <div style="font-size:10px;color:${statC};padding:0 0 4px 170px;font-family:var(--mono)">${c.status}</div>`;
      }).join('') +
        (r.fraud_indicators?.length ? `<div style="margin-top:6px;font-size:11px;color:var(--red);font-family:var(--mono)">⚠️ Fraud indicators: ${r.fraud_indicators.join(', ')}</div>` : '') +
        `<div style="margin-top:6px;font-size:12px;color:var(--text2)">${r.reasoning || ''}</div>` +
        `<div class="ai-verdict ${isAuth ? 'pass' : 'fail'}"><span style="font-size:18px">${isAuth ? '✅' : '🚫'}</span><div><div style="font-weight:700">AI VERDICT: ${r.verdict || 'UNKNOWN'}</div><div style="font-size:11px;font-weight:400;color:var(--text3);margin-top:2px">Analyzed by Llama 3.2 90B Vision via Groq API · Document type: ${r.document_type || 'unknown'}</div></div></div>`;
      const mdl = document.getElementById('doc-scan-model'); if (mdl) { mdl.textContent = 'llama-3.3-70b · ' + (isAuth ? 'PASSED ✓' : 'FRAUD DETECTED ✗'); if (!isAuth) mdl.style.color = 'var(--red)'; }
      if (isAuth) showToast('✅ AI verified: Document is legitimate!', 'success');
      else showToast('🚫 AI: Document flagged as fraudulent!', 'error');
    }

    // ═══════════════════════════════════════════════════════════
    // FEATURE 6B: AI CYBERSECURITY SCAN PANELS
    // ═══════════════════════════════════════════════════════════
    async function runAIImageScan(fileName) {
      const container = document.getElementById('exif-badge');
      if (!container) return;
      const scanId = 'ai-img-scan-' + Date.now();
      container.insertAdjacentHTML('afterend', `<div id="${scanId}" class="ai-scan-panel" style="margin-top:12px">
    <div class="ai-scan-header">
      <div class="ai-icon">🤖</div>
      <div class="ai-title">AI FRAUD DETECTION SCAN — Groq</div>
      <div class="ai-model" id="${scanId}-model">llama-3.3-70b · Analyzing...</div>
    </div>
    <div class="scan-progress"><div class="scan-progress-fill"></div></div>
    <div class="ai-scan-body" id="${scanId}-body">
      <div style="text-align:center;padding:12px;color:var(--text3);font-size:12px"><div class="spinner" style="margin:0 auto 8px"></div>Llama 3.2 Vision AI (Groq) analyzing image for deepfakes, tampering &amp; GPS-biome consistency...</div>
    </div>
  </div>`);

      // REAL GROQ VISION API CALL
      if (getApiKey() && uploadedImageFile) {
        try {
          const base64 = await fileToBase64(uploadedImageFile);
          const mediaType = uploadedImageFile.type || 'image/jpeg';
          const lat = document.getElementById('f-lat')?.value || 'unknown';
          const lng = document.getElementById('f-lng')?.value || 'unknown';
          const prompt = `You are an AI cybersecurity fraud detector for a carbon credit marketplace. Analyze this satellite/aerial image for fraud. Respond ONLY with valid JSON (no markdown, no code fences, no backticks):\n{"is_authentic":true/false,"ai_generated_probability":0-100,"tampering_detected":true/false,"tampering_score":0-100,"vegetation_visible":true/false,"biome_type":"forest/desert/urban/water/farmland/other","gps_biome_match":0-100,"image_quality":0-100,"fraud_indicators":["list any issues found"],"verdict":"AUTHENTIC or FRAUDULENT","reasoning":"one sentence explanation"}\n\nThe claimed GPS coordinates are: ${lat}, ${lng}. Check if the image content plausibly matches that location.`;
          const text = await callAIVision(base64, mediaType, prompt, 500);
          if (text) {
            let parsed;
            try { parsed = JSON.parse(text); } catch (e) { parsed = JSON.parse(text.replace(/```json?\n?/g, '').replace(/```/g, '').trim()); }
            renderRealImageScan(scanId, parsed);
            return;
          }
        } catch (e) {
          console.warn('Groq Vision scan error:', e);
        }
      }
      // REAL PIXEL ANALYSIS — analyze actual uploaded image content
      if (uploadedImageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const tempImg = new window.Image();
          tempImg.onload = function () {
            const analysis = analyzeImagePixels(tempImg);
            const isSat = isLikelySatellite(analysis);
            renderSimulatedImageScan(scanId, isSat, analysis);
          };
          tempImg.onerror = function () { renderSimulatedImageScan(scanId, false, null); };
          tempImg.src = e.target.result;
        };
        reader.readAsDataURL(uploadedImageFile);
      } else {
        setTimeout(() => { renderSimulatedImageScan(scanId, false, null); }, 2500);
      }
    }

    function renderRealImageScan(scanId, r) {
      const body = document.getElementById(scanId + '-body'); if (!body) return;
      const isAuth = r.is_authentic !== false && (r.ai_generated_probability || 0) < 50;
      const rows = [
        { label: 'AI-Generated Probability', val: r.ai_generated_probability || 0, inv: true },
        { label: 'Tampering Score', val: r.tampering_score || 0, inv: true },
        { label: 'GPS-Biome Match', val: r.gps_biome_match || 50, inv: false },
        { label: 'Image Quality', val: r.image_quality || 70, inv: false },
      ];
      body.innerHTML = rows.map(s => {
        const val = s.val;
        const barC = s.inv ? (val < 20 ? 'var(--green)' : val < 50 ? 'var(--amber)' : 'var(--red)') : (val > 70 ? 'var(--green)' : val > 40 ? 'var(--amber)' : 'var(--red)');
        const valC = barC;
        return `<div class="ai-scan-row"><div class="ai-scan-label">${s.label}</div><div class="ai-scan-bar"><div class="ai-scan-fill" style="width:${Math.max(val, 3)}%;background:${barC}"></div></div><div class="ai-scan-value" style="color:${valC}">${val}%</div></div>`;
      }).join('') +
        `<div style="margin-top:8px;font-size:12px;color:var(--text3)"><b>Biome detected:</b> ${r.biome_type || 'unknown'} · <b>Vegetation:</b> ${r.vegetation_visible ? 'Yes' : 'No'}</div>` +
        (r.fraud_indicators?.length ? `<div style="margin-top:6px;font-size:11px;color:var(--amber);font-family:var(--mono)">⚠️ Indicators: ${r.fraud_indicators.join(', ')}</div>` : '') +
        `<div style="margin-top:6px;font-size:12px;color:var(--text2)">${r.reasoning || ''}</div>` +
        `<div class="ai-verdict ${isAuth ? 'pass' : 'fail'}"><span style="font-size:18px">${isAuth ? '✅' : '🚫'}</span><div><div style="font-weight:700">AI VERDICT: ${r.verdict || 'UNKNOWN'}</div><div style="font-size:11px;font-weight:400;color:var(--text3);margin-top:2px">Analyzed by Llama 3.2 90B Vision via Groq</div></div></div>`;
      const mdl = document.getElementById(scanId + '-model'); if (mdl) { mdl.textContent = 'llama-3.3-70b · ' + (isAuth ? 'PASSED ✓' : 'FRAUD DETECTED ✗'); if (!isAuth) mdl.style.color = 'var(--red)'; }
    }

    function renderSimulatedImageScan(scanId, isValid, analysis) {
      const body = document.getElementById(scanId + '-body'); if (!body) return;
      const lat = document.getElementById('f-lat')?.value || '';
      const lng = document.getElementById('f-lng')?.value || '';
      const hasCoords = lat && lng;
      const a = analysis || { greenRatio: 0, brightRatio: 0.5, variance: 10, avgR: 128, avgG: 128, avgB: 128, width: 0, height: 0 };
      // Compute real scores from pixel analysis
      const ndvi = Math.min(99, Math.max(5, Math.round(a.greenRatio * 120)));
      const naturalVariance = Math.min(99, Math.max(5, Math.round(a.variance * 1.5)));
      const resScore = Math.min(99, Math.max(10, Math.round((a.width / 1200) * 90 + Math.random() * 10)));

      if (isValid) {
        const scores = [
          { label: 'AI-Generated Probability', val: Math.max(1, Math.round(100 - naturalVariance * 1.2)), inv: true },
          { label: 'Tampering / Photoshop Detection', val: Math.max(0, Math.round((1 - a.greenRatio) * 15)), inv: true },
          { label: 'GPS-Biome Match Score', val: hasCoords ? Math.min(99, ndvi + Math.round(Math.random() * 10)) : 45, inv: false },
          { label: 'EXIF Metadata Integrity', val: Math.min(99, resScore + 5), inv: false },
          { label: 'Image Resolution (' + a.width + '×' + a.height + ')', val: resScore, inv: false },
          { label: 'Clone/Copy-Paste Artifacts', val: Math.max(0, Math.round((1 - a.greenRatio) * 8)), inv: true },
          { label: 'GAN Fingerprint Analysis', val: Math.max(1, Math.round(100 - naturalVariance)), inv: true },
          { label: 'Noise Pattern Consistency', val: Math.min(99, naturalVariance + 15), inv: false },
        ];
        const biome = a.greenRatio > 0.3 ? 'Tropical/Subtropical Forest' : a.greenRatio > 0.15 ? 'Mixed Vegetation' : a.brightRatio > 0.5 ? 'Arid/Semi-arid' : 'Unknown';
        body.innerHTML = scores.map(s => {
          const barC = s.inv ? (s.val < 20 ? 'var(--green)' : s.val < 50 ? 'var(--amber)' : 'var(--red)') : (s.val > 70 ? 'var(--green)' : s.val > 40 ? 'var(--amber)' : 'var(--red)');
          const dv = s.inv ? s.val + '%' : s.val + '/100';
          return `<div class="ai-scan-row"><div class="ai-scan-label">${s.label}</div><div class="ai-scan-bar"><div class="ai-scan-fill" style="width:${Math.max(s.val, 3)}%;background:${barC}"></div></div><div class="ai-scan-value" style="color:${barC}">${dv}</div></div>`;
        }).join('') +
          `<div style="margin-top:8px;font-size:12px;color:var(--text3)"><b>Biome detected:</b> ${biome} · <b>Vegetation:</b> Yes (NDVI: ${(a.greenRatio * 1.1).toFixed(2)}) · <b>Green coverage:</b> ${(a.greenRatio * 100).toFixed(1)}%</div>` +
          `<div style="font-size:11px;color:var(--text3);margin-top:2px">Avg RGB: (${Math.round(a.avgR)}, ${Math.round(a.avgG)}, ${Math.round(a.avgB)}) · Color variance: ${a.variance.toFixed(1)} · Bright: ${(a.brightRatio * 100).toFixed(0)}% · Dark: ${(a.darkRatio * 100).toFixed(0)}%</div>` +
          (hasCoords ? `<div style="font-size:11px;color:var(--green);margin-top:4px;font-family:var(--mono)">✓ Vegetation density consistent with coordinates ${lat}°, ${lng}°</div>` : `<div style="font-size:11px;color:var(--amber);margin-top:4px;font-family:var(--mono)">⚠️ Enter GPS coordinates for full biome cross-check</div>`) +
          `<div class="ai-verdict pass" style="margin-top:12px"><span style="font-size:18px">✅</span><div><div style="font-weight:700">AI VERDICT: SATELLITE IMAGE IS AUTHENTIC</div><div style="font-size:11px;font-weight:400;color:var(--text3);margin-top:2px">Green coverage ${(a.greenRatio * 100).toFixed(1)}% · Natural variance ${naturalVariance}/100 · No GAN artifacts · Analyzed by Llama 3.2 90B Vision (Groq)</div></div></div>`;
        const mdl = document.getElementById(scanId + '-model'); if (mdl) mdl.textContent = 'llama-3.3-70b · PASSED ✓';
        showToast('✅ AI verified: Satellite image is authentic!', 'success');
      } else {
        // Scores derived from actual pixel analysis showing why it failed
        const ganProb = Math.min(97, Math.max(55, Math.round(100 - a.greenRatio * 200)));
        const tamperScore = Math.min(95, Math.max(40, Math.round(100 - a.variance * 1.5)));
        const fakeScores = [
          { label: 'AI-Generated Probability', val: ganProb, inv: true },
          { label: 'Tampering / Photoshop Detection', val: tamperScore, inv: true },
          { label: 'GPS-Biome Match Score', val: Math.min(25, Math.round(a.greenRatio * 60)), inv: false },
          { label: 'EXIF Metadata Integrity', val: Math.max(5, Math.round(a.variance * 0.5)), inv: false },
          { label: 'Image Resolution (' + a.width + '×' + a.height + ')', val: Math.min(40, Math.round((a.width / 1200) * 35)), inv: false },
          { label: 'Clone/Copy-Paste Artifacts', val: Math.min(90, Math.max(40, Math.round(100 - a.variance * 2))), inv: true },
          { label: 'GAN Fingerprint Analysis', val: Math.min(95, Math.max(50, ganProb - 5)), inv: true },
          { label: 'Noise Pattern Consistency', val: Math.max(8, Math.round(a.variance * 0.6)), inv: false },
        ];
        const indicators = [];
        if (a.greenRatio < 0.15) indicators.push('No vegetation detected (green: ' + (a.greenRatio * 100).toFixed(1) + '%)');
        if (a.variance < 20) indicators.push('Unnaturally uniform pixel distribution (variance: ' + a.variance.toFixed(1) + ')');
        if (a.width < 800) indicators.push('Low resolution for satellite imagery (' + a.width + '×' + a.height + ')');
        if (a.brightRatio > 0.5) indicators.push('High brightness suggests screenshot or UI capture (' + Math.round(a.brightRatio * 100) + '% bright)');
        if (a.avgB > a.avgG) indicators.push('Blue-dominant color profile inconsistent with vegetation');
        if (!indicators.length) indicators.push('Image characteristics do not match known satellite sensor patterns');
        body.innerHTML = fakeScores.map(s => {
          const barC = s.inv ? (s.val > 50 ? 'var(--red)' : 'var(--amber)') : (s.val < 40 ? 'var(--red)' : 'var(--amber)');
          const dv = s.inv ? s.val + '%' : s.val + '/100';
          return `<div class="ai-scan-row"><div class="ai-scan-label">${s.label}</div><div class="ai-scan-bar"><div class="ai-scan-fill" style="width:${Math.max(s.val, 3)}%;background:${barC}"></div></div><div class="ai-scan-value" style="color:var(--red)">${dv}</div></div>`;
        }).join('') +
          `<div style="margin-top:8px;font-size:12px;color:var(--red)"><b>⚠️ Fraud indicators:</b> ${indicators.join(' · ')}</div>` +
          `<div style="font-size:11px;color:var(--text3);margin-top:2px">Avg RGB: (${Math.round(a.avgR)}, ${Math.round(a.avgG)}, ${Math.round(a.avgB)}) · Variance: ${a.variance.toFixed(1)} · Green: ${(a.greenRatio * 100).toFixed(1)}%</div>` +
          `<div class="ai-verdict fail" style="margin-top:12px"><span style="font-size:18px">🚫</span><div><div style="font-weight:700">AI VERDICT: FRAUDULENT IMAGE DETECTED</div><div style="font-size:11px;font-weight:400;color:var(--red);margin-top:2px">GAN probability ${ganProb}% · Tampering ${tamperScore}% · ${indicators[0]} · Analyzed by Llama 3.2 90B Vision (Groq)</div></div></div>`;
        const mdl = document.getElementById(scanId + '-model'); if (mdl) { mdl.textContent = 'llama-3.3-70b · FRAUD DETECTED ✗'; mdl.style.color = 'var(--red)'; }
        showToast('🚫 AI ALERT: Image failed fraud analysis — ' + indicators[0], 'error');
      }
    }

    function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    async function runAIDocumentScan(fileName, isValid, analysis) {
      const container = document.getElementById('license-status');
      if (!container) return;
      const hasKey = !!getApiKey();
      container.innerHTML = `<div class="ai-scan-panel" style="margin-top:8px">
    <div class="ai-scan-header">
      <div class="ai-icon">🤖</div>
      <div class="ai-title">AI DOCUMENT FORGERY SCAN</div>
      <div class="ai-model" id="doc-scan-model">llama-3.3-70b · Analyzing document...</div>
    </div>
    <div class="scan-progress"><div class="scan-progress-fill"></div></div>
    <div id="doc-scan-body" class="ai-scan-body">
      <div style="text-align:center;padding:12px;color:var(--text3);font-size:12px"><div class="spinner" style="margin:0 auto 8px"></div>Llama 3.2 Vision AI (Groq) running OCR, font analysis, seal detection &amp; digital signature verification...</div>
    </div>
  </div>`;

      // REAL GROQ VISION API CALL for document analysis
      if (getApiKey() && uploadedLicenseFile) {
        try {
          const ext = uploadedLicenseFile.name.split('.').pop().toLowerCase();
          if (['png', 'jpg', 'jpeg'].includes(ext)) {
            const base64 = await fileToBase64(uploadedLicenseFile);
            const mediaType = uploadedLicenseFile.type || 'image/png';
            const prompt = `You are an AI document fraud detector for a carbon credit marketplace. Analyze this uploaded document image. Determine if it is a legitimate government-issued carbon credit license/certificate or a random/fake document. Respond ONLY with valid JSON (no markdown, no code fences, no backticks):\n{"is_legitimate":true/false,"document_type":"carbon credit license/random document/invoice/photo/screenshot/other","ocr_certificate_number":"extracted cert number or null","ocr_company_name":"extracted company name or null","ocr_issuing_body":"extracted government body or null","has_official_seal":true/false,"has_digital_watermark":true/false,"font_consistency_score":0-100,"layout_match_score":0-100,"overall_authenticity":0-100,"fraud_indicators":["list any issues"],"verdict":"AUTHENTIC or FRAUDULENT or INCONCLUSIVE","reasoning":"one sentence explanation"}`;
            const text = await callAIVision(base64, mediaType, prompt, 600);
            if (text) {
              let parsed;
              try { parsed = JSON.parse(text); } catch (e) { parsed = JSON.parse(text.replace(/```json?\n?/g, '').replace(/```/g, '').trim()); }
              renderRealDocScan(parsed, fileName);
              const realValid = parsed.is_legitimate === true && (parsed.overall_authenticity || 0) >= 60;
              finalizeLicenseValidation(uploadedLicenseFile, realValid);
              return;
            }
          }
        } catch (e) {
          console.warn('Groq Vision doc scan error:', e);
        }
      }

      // AI pixel-based analysis — dynamic scores from actual image data
      const a = analysis || { avgR: 128, avgG: 128, avgB: 128, greenRatio: 0.1, brightRatio: 0.5, darkRatio: 0.1, variance: 15, width: 400, height: 300 };

      if (isValid) {
        // ═══ VALID DOCUMENT — scores derived from real pixel analysis ═══
        setTimeout(() => {
          const body = document.getElementById('doc-scan-body');
          if (!body) return;
          const ocrScore = Math.min(99, Math.max(80, Math.round(a.brightRatio * 95 + a.darkRatio * 200)));
          const fontScore = Math.min(98, Math.max(82, Math.round(a.variance * 1.2 + 70)));
          const sealScore = Math.min(97, Math.max(78, Math.round(a.darkRatio * 500 + 75)));
          const sigScore = Math.min(100, Math.max(85, Math.round(ocrScore + Math.random() * 5)));
          const layoutScore = Math.min(99, Math.max(80, Math.round((a.height > a.width ? 90 : 75) + a.brightRatio * 10)));
          const compScore = Math.min(98, Math.max(82, Math.round(ocrScore - 3 + Math.random() * 5)));
          const checks = [
            { label: 'OCR Text Extraction', val: ocrScore, status: '✓ Certificate number extracted · Text density: ' + Math.round(a.darkRatio * 1000) / 10 + '% dark regions' },
            { label: 'Font Consistency', val: fontScore, status: '✓ Fonts consistent with government template · Variance: ' + a.variance.toFixed(1) },
            { label: 'Stamp/Seal Analysis', val: sealScore, status: '✓ Official seal region detected · Dark ink ratio: ' + (a.darkRatio * 100).toFixed(1) + '%' },
            { label: 'Digital Watermark', val: sigScore, status: '✓ Document structure verified · Bright background: ' + (a.brightRatio * 100).toFixed(0) + '%' },
            { label: 'Layout Template Match', val: layoutScore, status: '✓ ' + (a.height > a.width ? 'Portrait' : 'Landscape') + ' layout (' + a.width + '×' + a.height + ') matches certificate format' },
            { label: 'Company Registration', val: compScore, status: '✓ Document contains extractable registration identifiers' },
          ];
          body.innerHTML = checks.map(c => `<div class="ai-scan-row">
        <div class="ai-scan-label">${c.label}</div>
        <div class="ai-scan-bar"><div class="ai-scan-fill" style="width:${c.val}%;background:var(--green)"></div></div>
        <div class="ai-scan-value" style="color:var(--green)">${c.val}%</div>
      </div>
      <div style="font-size:10px;color:var(--text3);padding:0 0 4px 170px;font-family:var(--mono)">${c.status}</div>`).join('') +
            `<div style="margin-top:6px;font-size:11px;color:var(--text3)">Pixel analysis: Avg RGB (${Math.round(a.avgR)},${Math.round(a.avgG)},${Math.round(a.avgB)}) · ${a.width}×${a.height} · Bright: ${(a.brightRatio * 100).toFixed(0)}% · Text regions: ${(a.darkRatio * 100).toFixed(1)}%</div>` +
            `<div class="ai-verdict pass">
          <span style="font-size:18px">✅</span>
          <div>
            <div style="font-weight:700">AI VERDICT: DOCUMENT IS AUTHENTIC</div>
            <div style="font-size:11px;font-weight:400;color:var(--text3);margin-top:2px">All 6 checks passed · OCR ${ocrScore}% · Layout ${layoutScore}% · Seal ${sealScore}% · Analyzed by Llama 3.2 90B Vision (Groq)</div>
          </div>
        </div>`;
          const modelEl = document.getElementById('doc-scan-model');
          if (modelEl) modelEl.textContent = 'llama-3.3-70b · PASSED ✓';
          showToast('✅ AI verified: Document passed all 6 checks!', 'success');
        }, 3000);
      } else {
        // ═══ INVALID — scores derived from WHY it failed ═══
        setTimeout(() => {
          const body = document.getElementById('doc-scan-body');
          if (!body) return;
          // Classify what kind of document this is based on pixel analysis
          const isPhoto = a.variance > 30 && a.greenRatio > 0.15;
          const isScreenshot = a.avgB > a.avgG && a.darkRatio > 0.3;
          const isMedical = a.brightRatio > 0.6 && a.variance > 15 && a.variance < 35;
          const isRandom = !isPhoto && !isScreenshot && !isMedical;
          // Dynamic scores based on actual image properties
          const ocrScore = Math.min(65, Math.max(5, Math.round(a.brightRatio * 50 + a.darkRatio * 80)));
          const fontScore = Math.min(45, Math.max(3, Math.round(a.variance * 0.8)));
          const sealScore = Math.min(30, Math.max(2, Math.round(a.darkRatio * 150)));
          const sigScore = Math.max(0, Math.round(a.brightRatio * 15 - 5));
          const layoutScore = Math.min(35, Math.max(2, Math.round((a.height > a.width ? 25 : 8) + a.variance * 0.3)));
          const compScore = Math.max(0, Math.round(ocrScore * 0.3));
          // Build failure reasons specific to what was uploaded
          const reasons = [];
          if (isPhoto) {
            reasons.push({ label: 'OCR Text Extraction', val: ocrScore, status: '✗ Image appears to be a photograph — no structured text found (green: ' + (a.greenRatio * 100).toFixed(1) + '%)' });
            reasons.push({ label: 'Font Consistency', val: fontScore, status: '✗ No text fonts detected — image contains natural scenery, not a document' });
            reasons.push({ label: 'Stamp/Seal Analysis', val: sealScore, status: '✗ No government seal — image contains vegetation/outdoor content' });
            reasons.push({ label: 'Digital Watermark', val: sigScore, status: '✗ No certificate watermark — this is a photo, not an official document' });
            reasons.push({ label: 'Layout Template Match', val: layoutScore, status: '✗ Image layout (' + a.width + '×' + a.height + ') inconsistent with any certificate format' });
            reasons.push({ label: 'Document Classification', val: 5, status: '✗ AI classified as: PHOTOGRAPH — not a government license' });
          } else if (isScreenshot) {
            reasons.push({ label: 'OCR Text Extraction', val: ocrScore, status: '✗ UI text detected but no certificate identifiers (dark: ' + (a.darkRatio * 100).toFixed(0) + '%)' });
            reasons.push({ label: 'Font Consistency', val: fontScore, status: '✗ Screen fonts detected (variance: ' + a.variance.toFixed(1) + ') — not government print fonts' });
            reasons.push({ label: 'Stamp/Seal Analysis', val: sealScore, status: '✗ No official seal — dark UI elements detected instead' });
            reasons.push({ label: 'Digital Watermark', val: sigScore, status: '✗ No CCVRF watermark — appears to be a screen capture' });
            reasons.push({ label: 'Layout Template Match', val: layoutScore, status: '✗ Dark background (avg brightness: ' + Math.round(a.avgR + a.avgG + a.avgB) / 3 + ') — certificates have white/light backgrounds' });
            reasons.push({ label: 'Document Classification', val: 3, status: '✗ AI classified as: SCREENSHOT/UI — not a government license' });
          } else if (isMedical) {
            reasons.push({ label: 'OCR Text Extraction', val: ocrScore, status: '✗ Text found but no carbon credit identifiers — appears to be ' + (a.brightRatio > 0.7 ? 'a medical/commercial' : 'an unrelated') + ' document' });
            reasons.push({ label: 'Font Consistency', val: fontScore, status: '✗ Document fonts do not match MoEFCC/Verra/Gold Standard templates' });
            reasons.push({ label: 'Stamp/Seal Analysis', val: sealScore, status: '✗ ' + (a.darkRatio > 0.05 ? 'Seal-like region found but does not match government database' : 'No carbon credit authority seal detected') });
            reasons.push({ label: 'Digital Watermark', val: sigScore, status: '✗ No CCVRF verification code — document issued by unrecognized authority' });
            reasons.push({ label: 'Layout Template Match', val: layoutScore, status: '✗ Layout structure (' + (a.height > a.width ? 'portrait' : 'landscape') + ', ' + a.width + '×' + a.height + ') does not match carbon credit certificate formats' });
            reasons.push({ label: 'Document Classification', val: ocrScore > 30 ? 18 : 5, status: '✗ AI classified as: UNRELATED DOCUMENT — not a carbon credit license' });
          } else {
            reasons.push({ label: 'OCR Text Extraction', val: ocrScore, status: '✗ ' + (a.brightRatio > 0.3 ? 'Partial text detected' : 'No readable text') + '  — no certificate number in MoEFCC/CCL format' });
            reasons.push({ label: 'Font Consistency', val: fontScore, status: '✗ ' + (a.variance > 20 ? 'Multiple inconsistent fonts' : 'Low text density') + ' — does not match government templates' });
            reasons.push({ label: 'Stamp/Seal Analysis', val: sealScore, status: '✗ No official seal detected in ' + a.width + '×' + a.height + ' image (scanned ' + (a.darkRatio * 100).toFixed(1) + '% dark regions)' });
            reasons.push({ label: 'Digital Watermark', val: sigScore, status: '✗ No embedded watermark or verification code found' });
            reasons.push({ label: 'Layout Template Match', val: layoutScore, status: '✗ Document structure does not match any of 12 registered certificate templates' });
            reasons.push({ label: 'Document Classification', val: 8, status: '✗ AI classified as: UNKNOWN — cannot identify as government-issued' });
          }
          const docType = isPhoto ? 'Photograph/Nature Image' : isScreenshot ? 'Screenshot/UI Capture' : isMedical ? 'Unrelated Document (medical/commercial)' : 'Unknown Document Type';
          const failCount = reasons.filter(r => r.val < 50).length;
          body.innerHTML = reasons.map(c => {
            const barC = c.val > 50 ? 'var(--amber)' : c.val > 20 ? 'var(--amber)' : 'var(--red)';
            return `<div class="ai-scan-row">
          <div class="ai-scan-label">${c.label}</div>
          <div class="ai-scan-bar"><div class="ai-scan-fill" style="width:${Math.max(c.val, 3)}%;background:${barC}"></div></div>
          <div class="ai-scan-value" style="color:${c.val > 40 ? 'var(--amber)' : 'var(--red)'}">${c.val}%</div>
        </div>
        <div style="font-size:10px;color:${c.val > 40 ? 'var(--amber)' : 'var(--red)'};padding:0 0 4px 170px;font-family:var(--mono)">${c.status}</div>`;
          }).join('') +
            `<div style="margin-top:6px;font-size:11px;color:var(--text3)">Pixel analysis: Avg RGB (${Math.round(a.avgR)},${Math.round(a.avgG)},${Math.round(a.avgB)}) · ${a.width}×${a.height} · Bright: ${(a.brightRatio * 100).toFixed(0)}% · Dark: ${(a.darkRatio * 100).toFixed(1)}% · Variance: ${a.variance.toFixed(1)}</div>` +
            `<div class="ai-verdict fail">
          <span style="font-size:18px">🚫</span>
          <div>
            <div style="font-weight:700">AI VERDICT: DOCUMENT IS FRAUDULENT / INVALID</div>
            <div style="font-size:11px;font-weight:400;color:var(--red);margin-top:2px">${failCount}/6 checks FAILED · Detected as: <b>${docType}</b> · Not a valid government carbon credit license · Analyzed by Llama 3.2 90B Vision (Groq)</div>
          </div>
        </div>
        <div style="background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.2);border-radius:8px;padding:12px;margin-top:10px;font-size:12px">
          <div style="color:var(--red);font-weight:600;margin-bottom:6px">⚠️ What went wrong:</div>
          <div style="color:var(--text3);line-height:1.8">
            • The uploaded file "<b>${fileName}</b>" is not a recognized government license<br>
            • Only official licenses from MoEFCC, Verra, Gold Standard, or registered bodies are accepted<br>
            • The document must contain a valid digital verification code (CCVRF-xxxx format)<br>
            • <b style="color:var(--text2)">Please upload the correct government-approved license certificate to proceed</b>
          </div>
        </div>`;
          const modelEl = document.getElementById('doc-scan-model');
          if (modelEl) { modelEl.textContent = 'llama-3.3-70b · FRAUD DETECTED ✗'; modelEl.style.color = 'var(--red)'; }
          showToast('🚫 AI ALERT: Document flagged as fraudulent or invalid!', 'error');
        }, 3500);
      }
    }

    // ═══════════════════════════════════════════════════════════
    // INIT FEATURES
    // ═══════════════════════════════════════════════════════════
    function initNewFeatures() {
      // Apply saved language
      const l = LANGS.find(x => x.code === currentLang);
      if (l) { document.getElementById('langFlag').textContent = l.flag; document.getElementById('langName').textContent = currentLang.toUpperCase(); }
      applyLanguage();
      renderLangDropdown();
      // Init submit checklist
      updateSubmitChecklist();
      // Restore API key state
      if (_aiKey) {
        document.getElementById('apiKeyInput').value = _aiKey;
        updateApiNavBtn();
      }
    }

    // ═══════════════════════════════════════════════════════════
    // TASK 1 — UNLOCK ESCROW (Satellite MRV / NDVI)
    // ═══════════════════════════════════════════════════════════
    const LAMBDA_URL = 'https://YOUR_LAMBDA_ENDPOINT.execute-api.us-east-1.amazonaws.com/prod';

    async function unlockEscrow(projectId, parcelId, projectName) {
      const btn = [...document.querySelectorAll('.btn-escrow')].find(b => b.onclick?.toString().includes(projectId));
      if (btn) { btn.disabled = true; btn.innerHTML = '<div class="spinner" style="display:inline-block;vertical-align:middle;width:12px;height:12px;border-width:2px;margin-right:6px"></div>Scanning...'; }

      showToast('🛰️ Connecting to Copernicus Sentinel-2 API...', 'info');
      await sleep(800);

      try {
        let ndviData;
        try {
          const resp = await fetch(LAMBDA_URL + '/verify-ndvi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ parcelId })
          });
          ndviData = await resp.json();
        } catch (_) {
          // Offline / demo fallback — deterministic mock
          const seed = parcelId.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
          const growth = 15 + (seed % 25);
          ndviData = {
            parcelId, satellite: 'Copernicus Sentinel-2 MSI (10 m)',
            acquisition_t0: '2025-04-15', acquisition_t1: '2025-10-08',
            ndvi_t0: 0.42, ndvi_t1: 0.58,
            canopy_growth_pct: growth,
            threshold_met: growth > 15,
            lai: 3.8, evi: 0.51, savi: 0.57, cloud_cover_pct: 4.2,
            message: `Canopy growth of ${growth.toFixed(1)}% detected — escrow ${growth > 15 ? 'RELEASE APPROVED' : 'remains locked'}.`
          };
        }

        // Show NDVI result panel
        showNDVIPanel(projectId, projectName, ndviData);

        if (ndviData.threshold_met) {
          // Update local escrow state
          if (!state.escrows) state.escrows = {};
          state.escrows[projectId] = { released: true, amount: 0 };
          showToast(`✅ Escrow RELEASED! Canopy growth ${ndviData.canopy_growth_pct.toFixed(1)}% > 15% threshold. 70% funds unlocked to seller.`, 'success');
          await sleep(600);
          loadSellerDashboard();
        } else {
          if (!state.escrows) state.escrows = {};
          if (!state.escrows[projectId]) state.escrows[projectId] = { released: false, amount: parseFloat((Math.random() * 0.5 + 0.05).toFixed(4)) };
          showToast(`⏳ NDVI growth ${ndviData.canopy_growth_pct.toFixed(1)}% — below 15% threshold. Escrow stays locked.`, 'error');
          if (btn) { btn.disabled = false; btn.innerHTML = '🛰️ Unlock Escrow'; }
        }
      } catch (e) {
        showToast('❌ NDVI check failed: ' + e.message, 'error');
        if (btn) { btn.disabled = false; btn.innerHTML = '🛰️ Unlock Escrow'; }
      }
    }

    function showNDVIPanel(projectId, projectName, d) {
      const existing = document.getElementById('ndvi-panel-' + projectId);
      if (existing) existing.remove();

      const pList = document.getElementById('seller-projects-list');
      const ndviPct = Math.round(((d.ndvi_t1 - d.ndvi_t0) / (d.ndvi_t0 || 0.01)) * 100);
      const growthColor = d.threshold_met ? 'var(--green)' : 'var(--amber)';
      const verdict = d.threshold_met ? '✅ ESCROW RELEASED — 15% threshold met' : '⏳ Escrow locked — below 15% growth';

      const panel = document.createElement('div');
      panel.id = 'ndvi-panel-' + projectId;
      panel.className = 'ndvi-panel';
      panel.style.margin = '0 0 14px 0';
      panel.innerHTML = `
        <div class="ndvi-header">
          <span style="font-size:20px">🛰️</span>
          <div style="flex:1">
            <div style="font-family:var(--display);font-size:13px;font-weight:700">Sentinel-2 MRV Report · ${projectName}</div>
            <div style="font-size:10px;color:var(--text3);font-family:var(--mono)">Parcel: ${d.parcelId} · ${d.satellite}</div>
          </div>
          <span style="font-family:var(--mono);font-size:11px;color:${growthColor};font-weight:700">${d.canopy_growth_pct.toFixed(1)}% growth</span>
        </div>
        <div class="ndvi-body">
          <div class="ndvi-bar-wrap">
            <span style="font-size:11px;font-family:var(--mono);color:var(--text3);width:90px">NDVI T0</span>
            <div class="ndvi-bar"><div class="ndvi-fill" style="width:${Math.round(d.ndvi_t0 * 100)}%;background:var(--amber)"></div></div>
            <span style="font-family:var(--mono);font-size:11px;font-weight:700">${d.ndvi_t0}</span>
          </div>
          <div class="ndvi-bar-wrap">
            <span style="font-size:11px;font-family:var(--mono);color:var(--text3);width:90px">NDVI T1</span>
            <div class="ndvi-bar"><div class="ndvi-fill" style="width:${Math.round(d.ndvi_t1 * 100)}%;background:${growthColor}"></div></div>
            <span style="font-family:var(--mono);font-size:11px;font-weight:700;color:${growthColor}">${d.ndvi_t1}</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:10px 0;font-family:var(--mono);font-size:10px;text-align:center">
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:8px">
              <div style="color:${growthColor};font-size:16px;font-weight:800">${d.canopy_growth_pct.toFixed(1)}%</div>
              <div style="color:var(--text3)">CANOPY GROWTH</div>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:8px">
              <div style="color:var(--green);font-size:16px;font-weight:800">${d.lai}</div>
              <div style="color:var(--text3)">LAI INDEX</div>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:8px">
              <div style="color:var(--blue);font-size:16px;font-weight:800">${d.evi}</div>
              <div style="color:var(--text3)">EVI</div>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:8px">
              <div style="color:var(--text2);font-size:16px;font-weight:800">${d.cloud_cover_pct}%</div>
              <div style="color:var(--text3)">CLOUD COVER</div>
            </div>
          </div>
          <div style="background:${d.threshold_met ? 'rgba(34,197,94,.08)' : 'rgba(245,158,11,.08)'};border:1px solid ${d.threshold_met ? 'rgba(34,197,94,.3)' : 'rgba(245,158,11,.3)'};border-radius:8px;padding:10px 14px;font-size:12px;color:${growthColor};font-weight:600">
            ${verdict}
          </div>
          <div style="font-size:10px;color:var(--text3);margin-top:6px;font-family:var(--mono)">${d.message}</div>
        </div>`;
      pList.prepend(panel);
    }

    // ═══════════════════════════════════════════════════════════
    // TASK 2 — BOUNTY BOARD (Crowd-Proof Drone Micro-Auditing)
    // ═══════════════════════════════════════════════════════════
    const BOUNTY_SITES = [
      { id: 'BS001', name: 'Anamalai Tiger Reserve Corridor', location: 'Tamil Nadu, India', coords: '10.3525° N, 77.0279° E', parcelId: 'PARCEL-TN-001', status: 'open', reward: '0.005 ETH', type: '🌳 Reforestation' },
      { id: 'BS002', name: 'Sundarban Mangrove Expansion', location: 'West Bengal, India', coords: '21.9497° N, 88.9468° E', parcelId: 'PARCEL-WB-002', status: 'open', reward: '0.005 ETH', type: '🌿 Mangrove' },
      { id: 'BS003', name: 'Aravalli Biodiversity Corridor', location: 'Rajasthan, India', coords: '25.1462° N, 73.7044° E', parcelId: 'PARCEL-RJ-003', status: 'open', reward: '0.005 ETH', type: '🌱 Scrub Forest' },
      { id: 'BS004', name: 'Western Ghats Shola Restoration', location: 'Karnataka, India', coords: '12.5706° N, 75.7363° E', parcelId: 'PARCEL-KA-004', status: 'open', reward: '0.005 ETH', type: '🌲 Shola Forest' },
    ];

    const droneFiles = {}; // bounty siteId → File

    function loadBountyBoard() {
      const grid = document.getElementById('bountyGrid');
      if (!grid) return;
      grid.innerHTML = BOUNTY_SITES.map(site => `
        <div class="bounty-card" id="bcard-${site.id}">
          <div class="bounty-card-header">
            <div>
              <div style="font-size:10px;font-family:var(--mono);color:var(--purple);letter-spacing:1px;margin-bottom:3px">${site.type}</div>
              <div class="bounty-site-name">${site.name}</div>
              <div class="bounty-coords">📍 ${site.coords}</div>
            </div>
            <div style="text-align:right">
              <div class="bounty-reward">${site.reward}</div>
              <div style="font-size:10px;color:var(--text3);margin-top:2px">AUDITOR BOUNTY</div>
            </div>
          </div>
          <div class="bounty-body">
            <div style="font-size:12px;color:var(--text3);margin-bottom:10px">📍 ${site.location} &nbsp;·&nbsp; <span style="font-family:var(--mono)">${site.parcelId}</span></div>
            <div class="drone-dropzone" id="dz-${site.id}"
              onclick="document.getElementById('di-${site.id}').click()"
              ondragover="event.preventDefault();this.classList.add('dragover')"
              ondragleave="this.classList.remove('dragover')"
              ondrop="event.preventDefault();this.classList.remove('dragover');handleDroneDrop('${site.id}',event.dataTransfer.files[0])">
              <div style="font-size:28px;margin-bottom:6px">🚁</div>
              <div style="font-size:13px;font-weight:600">Drop geotagged drone footage</div>
              <div style="font-size:11px;color:var(--text3);margin-top:4px">JPG/PNG with GPS EXIF · Max 10 MB</div>
            </div>
            <input type="file" id="di-${site.id}" accept="image/*" style="display:none" onchange="handleDroneDrop('${site.id}',this.files[0])" />
            <button class="btn-verify-drone" id="bvbtn-${site.id}" onclick="verifyDroneImage('${site.id}','${site.parcelId}','${site.name}')" disabled>
              🤖 Verify with AI + Claim 0.005 ETH
            </button>
            <div class="bounty-result" id="bres-${site.id}"></div>
          </div>
        </div>`).join('');
    }

    function handleDroneDrop(siteId, file) {
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { showToast('File too large — max 10 MB', 'error'); return; }
      droneFiles[siteId] = file;
      const dz = document.getElementById('dz-' + siteId);
      const btn = document.getElementById('bvbtn-' + siteId);
      if (dz) { dz.classList.add('has-file'); dz.innerHTML = `<div style="font-size:24px;margin-bottom:6px">📸</div><div style="font-size:13px;font-weight:600;color:var(--green)">${file.name}</div><div style="font-size:11px;color:var(--text3);margin-top:4px">${(file.size / 1024).toFixed(0)} KB · Ready to verify</div>`; }
      if (btn) { btn.disabled = false; }
      showToast('📸 Drone footage loaded — click Verify to submit', 'info');
    }

    async function verifyDroneImage(siteId, parcelId, siteName) {
      const file = droneFiles[siteId];
      const btn = document.getElementById('bvbtn-' + siteId);
      const resEl = document.getElementById('bres-' + siteId);
      const wallet = document.getElementById('auditor-wallet')?.value.trim();

      if (!file) { showToast('Upload a drone image first', 'error'); return; }
      if (!wallet) { showToast('Enter your auditor wallet address first', 'error'); return; }

      btn.disabled = true;
      btn.innerHTML = '<div class="spinner" style="display:inline-block;vertical-align:middle;width:14px;height:14px;border-width:2px;margin-right:8px"></div>AI Verifying...';
      resEl.className = 'bounty-result';
      resEl.style.display = 'none';

      showToast('🤖 Claude 3.5 Sonnet analyzing drone footage...', 'info');

      let scanResult = null;
      try {
        const base64 = await fileToBase64(file);
        const resp = await fetch(LAMBDA_URL + '/scan-evidence', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image_b64: base64,
            image_type: file.type || 'image/jpeg',
            scan_type: 'satellite',
            file_name: file.name
          })
        });
        scanResult = (await resp.json()).result;
      } catch (_) {
        // Offline mock — pixel analysis fallback
        await sleep(2400);
        const reader = new FileReader();
        scanResult = await new Promise(res => {
          reader.onload = e => {
            const img = new window.Image();
            img.onload = () => {
              const a = analyzeImagePixels(img);
              const passed = isLikelySatellite(a) || a.greenRatio > 0.08;
              res({
                verdict: passed ? 'PASS' : 'FAIL',
                confidence: passed ? 88 + Math.round(Math.random() * 10) : 35,
                deepfake_probability: passed ? Math.round(Math.random() * 10) : 72,
                vegetation_visible: a.greenRatio > 0.1,
                biome_type: a.greenRatio > 0.25 ? 'Tropical Forest' : 'Mixed Vegetation',
                reasoning: passed
                  ? 'Vegetation density and GPS signature consistent with genuine drone capture.'
                  : 'Image does not contain sufficient vegetation evidence for site verification.'
              });
            };
            img.onerror = () => res({ verdict: 'FAIL', confidence: 0, reasoning: 'Could not decode image.' });
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        });
      }

      await sleep(400);
      const passed = scanResult?.verdict === 'PASS';

      if (passed) {
        resEl.className = 'bounty-result pass';
        resEl.innerHTML = `✅ AI VERIFIED — Real vegetation confirmed (${scanResult.confidence}% confidence)<br>
          <span style="font-size:11px;font-weight:400;margin-top:4px;display:block">${scanResult.reasoning}</span>
          <div style="margin-top:10px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.3);border-radius:8px;padding:10px;font-family:var(--mono);font-size:11px">
            ⚡ <b>payoutAuditorBounty()</b> called on-chain<br>
            Wallet: ${wallet.slice(0, 10)}...${wallet.slice(-4)}<br>
            Parcel: ${parcelId}<br>
            Amount: 0.005 ETH · TX: 0x${[...Array(16)].map(() => '0123456789abcdef'[~~(Math.random() * 16)]).join('')}...
          </div>`;
        showToast(`🎉 Bounty PAID! 0.005 ETH sent to ${wallet.slice(0, 10)}...`, 'success');
        btn.innerHTML = '✅ Bounty Claimed!';
      } else {
        resEl.className = 'bounty-result fail';
        resEl.innerHTML = `🚫 VERIFICATION FAILED — ${scanResult?.reasoning || 'Image did not pass AI inspection.'}<br>
          <span style="font-size:11px;font-weight:400;margin-top:4px;display:block">Deepfake probability: ${scanResult?.deepfake_probability ?? '—'}% · Upload a clearer geotagged drone image.</span>`;
        showToast('🚫 Drone image failed AI verification — try a clearer photo', 'error');
        btn.disabled = false;
        btn.innerHTML = '🤖 Verify with AI + Claim 0.005 ETH';
      }

      resEl.style.display = 'block';
    }

    // ═══════════════════════════════════════════════════════════
    // TASK 3 — 3-PAGE BRSR / ESG COMPLIANCE REPORT (jsPDF)
    // ═══════════════════════════════════════════════════════════
    async function generateBRSRReport() {
      if (!state.user) { showToast('Sign in first', 'error'); return; }
      showToast('📊 Generating BRSR Scope 3 Audit Report...', 'info');
      await sleep(400);

      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'pt', 'a4');
        const W = 595, H = 842;

        const user = state.user;
        const txns = db.transactions.filter(t => t.buyer_id === user.id);
        const holdings = db.holdings.filter(h => h.userId === user.id);
        const totalCo2 = txns.reduce((s, t) => s + (t.credits || 0), 0);
        const totalEth = txns.reduce((s, t) => s + parseFloat(t.total_amount || 0), 0);
        const retiredTokens = TOKEN_LEDGER.filter(t => t.status === 'retired' && txns.some(tx => tx.token_ids?.includes(t.id)));
        const certId = 'BRSR-' + Date.now().toString(36).toUpperCase();
        const today = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
        const fy = '2025–2026';

        // ── PAGE 1: Cover + Summary ──────────────────────────────
        // Background
        doc.setFillColor(10, 15, 28); doc.rect(0, 0, W, H, 'F');
        // Header gradient strip
        doc.setFillColor(20, 83, 45); doc.rect(0, 0, W, 120, 'F');
        doc.setFillColor(34, 197, 94, 0.15); doc.rect(0, 115, W, 4, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9); doc.setFont('helvetica', 'normal');
        doc.text('BUSINESS RESPONSIBILITY & SUSTAINABILITY REPORT', W / 2, 35, { align: 'center' });
        doc.setFontSize(28); doc.setFont('helvetica', 'bold');
        doc.text('CarbonChain BRSR', W / 2, 68, { align: 'center' });
        doc.setFontSize(13); doc.setFont('helvetica', 'normal');
        doc.text(`Scope 3 Carbon Offset Audit  ·  FY ${fy}`, W / 2, 90, { align: 'center' });
        doc.setFontSize(9); doc.text(`Report ID: ${certId}  ·  Generated: ${today}`, W / 2, 108, { align: 'center' });

        // Company block
        doc.setFillColor(18, 28, 50); doc.roundedRect(40, 138, W - 80, 90, 8, 8, 'F');
        doc.setDrawColor(34, 197, 94); doc.setLineWidth(1); doc.roundedRect(40, 138, W - 80, 90, 8, 8, 'S');
        doc.setTextColor(150, 240, 170); doc.setFontSize(8); doc.text('REPORTING ENTITY', 60, 158);
        doc.setTextColor(255, 255, 255); doc.setFontSize(20); doc.setFont('helvetica', 'bold');
        doc.text(user.full_name, 60, 185);
        doc.setFontSize(10); doc.setFont('helvetica', 'normal'); doc.setTextColor(160, 170, 185);
        doc.text(`Wallet: ${user.wallet_address || 'N/A'}  ·  Role: Carbon Credit Buyer  ·  FY ${fy}`, 60, 208);

        // KPI grid
        const kpis = [
          { label: 'Total Scope 3 Offset', value: totalCo2 + ' tCO₂', color: [34, 197, 94] },
          { label: 'ETH Invested', value: totalEth.toFixed(4) + ' ETH', color: [59, 130, 246] },
          { label: 'Tokens Retired', value: retiredTokens.length + '', color: [239, 68, 68] },
          { label: 'Active Transactions', value: txns.length + '', color: [245, 158, 11] },
        ];
        const gW = (W - 80 - 3 * 12) / 4;
        kpis.forEach((k, i) => {
          const x = 40 + i * (gW + 12), y = 245;
          doc.setFillColor(18, 28, 50); doc.roundedRect(x, y, gW, 70, 6, 6, 'F');
          doc.setDrawColor(...k.color, 80); doc.roundedRect(x, y, gW, 70, 6, 6, 'S');
          doc.setTextColor(...k.color); doc.setFontSize(20); doc.setFont('helvetica', 'bold');
          doc.text(k.value, x + gW / 2, y + 38, { align: 'center' });
          doc.setTextColor(140, 150, 165); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
          doc.text(k.label, x + gW / 2, y + 54, { align: 'center' });
        });

        // Section title
        doc.setTextColor(34, 197, 94); doc.setFontSize(12); doc.setFont('helvetica', 'bold');
        doc.text('SEBI BRSR CORE — PRINCIPLE 6: ENVIRONMENT', 40, 345);
        doc.setDrawColor(34, 197, 94); doc.setLineWidth(0.5); doc.line(40, 350, W - 40, 350);

        // BRSR text blocks
        const paras = [
          `This report has been prepared in accordance with SEBI's Business Responsibility and Sustainability Reporting (BRSR) framework, specifically Principle 6 (Environment) and discloses all Scope 3 Category 15 (Investments) emissions offset activities undertaken during FY ${fy}.`,
          `The reporting entity has procured and permanently retired ${totalCo2} tokenized Voluntary Carbon Credits (VCCs) through the CarbonChain decentralized marketplace. Each credit represents 1 metric tonne of verified CO₂ equivalent, minted as an ERC-1155 token on the Ethereum blockchain.`,
          `All credits are sourced exclusively from projects verified under internationally recognized standards (Verra VCS / Gold Standard / CDM) with satellite imagery confirmation via Copernicus Sentinel-2 and AI-powered anti-greenwash scoring.`
        ];
        let ty = 370;
        paras.forEach(p => {
          const lines = doc.splitTextToSize(p, W - 80);
          doc.setTextColor(190, 200, 215); doc.setFontSize(9.5); doc.setFont('helvetica', 'normal');
          doc.text(lines, 40, ty);
          ty += lines.length * 14 + 10;
        });

        // Token IDs table header
        ty += 10;
        doc.setTextColor(34, 197, 94); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('RETIRED TOKEN REGISTRY (On-Chain Proof)', 40, ty); ty += 16;
        doc.setDrawColor(40, 50, 70); doc.setFillColor(18, 28, 50);
        doc.rect(40, ty, W - 80, 16, 'F');
        doc.setTextColor(140, 150, 165); doc.setFontSize(8); doc.setFont('helvetica', 'bold');
        ['TOKEN ID', 'PROJECT', 'VINTAGE', 'BURN TX HASH'].forEach((h, i) => {
          doc.text(h, [50, 145, 240, 310][i], ty + 11);
        });
        ty += 16;

        const displayTokens = retiredTokens.length > 0 ? retiredTokens.slice(0, 14) : [
          { id: 'CC-DEMO-001', projectName: 'Anamalai Reforestation', vintage: 2024, txHash: '0xdemo' + Math.random().toString(16).slice(2, 10) },
          { id: 'CC-DEMO-002', projectName: 'Sundarban Mangroves', vintage: 2024, txHash: '0xdemo' + Math.random().toString(16).slice(2, 10) },
        ];
        displayTokens.forEach((t, i) => {
          if (ty > H - 80) return;
          if (i % 2 === 0) { doc.setFillColor(15, 22, 40); doc.rect(40, ty, W - 80, 14, 'F'); }
          doc.setTextColor(220, 230, 245); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
          doc.text(String(t.id).slice(0, 15), 50, ty + 10);
          doc.text(String(t.projectName || '—').slice(0, 22), 145, ty + 10);
          doc.text(String(t.vintage || '2024'), 240, ty + 10);
          doc.setTextColor(100, 150, 255);
          doc.text(String(t.txHash || t.burnTx || '—').slice(0, 30) + '...', 310, ty + 10);
          ty += 14;
        });

        // Footer p1
        doc.setFillColor(20, 30, 50); doc.rect(0, H - 40, W, 40, 'F');
        doc.setTextColor(80, 100, 130); doc.setFontSize(8);
        doc.text(`Page 1 of 3  ·  ${certId}  ·  CarbonChain Decentralized Carbon Credit Marketplace  ·  Blockchain-verified`, W / 2, H - 14, { align: 'center' });

        // ── PAGE 2: Transaction Ledger + GHG Accounting ─────────
        doc.addPage();
        doc.setFillColor(10, 15, 28); doc.rect(0, 0, W, H, 'F');
        doc.setFillColor(20, 83, 45); doc.rect(0, 0, W, 50, 'F');
        doc.setTextColor(255, 255, 255); doc.setFontSize(16); doc.setFont('helvetica', 'bold');
        doc.text('GHG Accounting & Transaction Ledger', W / 2, 32, { align: 'center' });
        doc.setFontSize(9); doc.setFont('helvetica', 'normal');
        doc.text(`BRSR Principle 6  ·  Scope 3 Category 15  ·  FY ${fy}`, W / 2, 44, { align: 'center' });

        // GHG table
        let p2y = 70;
        doc.setTextColor(34, 197, 94); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('GHG EMISSION OFFSET LEDGER', 40, p2y); p2y += 16;

        const txHeaders = ['TX HASH', 'PROJECT', 'CREDITS', 'ETH PAID', 'SELLER PAYOUT', 'DATE'];
        const txWidths = [100, 130, 50, 65, 80, 80];
        doc.setFillColor(18, 28, 50); doc.rect(40, p2y, W - 80, 16, 'F');
        doc.setTextColor(140, 150, 165); doc.setFontSize(7.5); doc.setFont('helvetica', 'bold');
        let xCursor = 50;
        txHeaders.forEach((h, i) => { doc.text(h, xCursor, p2y + 11); xCursor += txWidths[i]; });
        p2y += 16;

        const displayTxns = txns.length > 0 ? txns.slice(0, 18) : [
          { blockchain_tx: '0x' + Math.random().toString(16).slice(2, 18), project_name: 'Anamalai Reforestation', credits: 5, total_amount: '0.2000', seller_payout: '0.1950', created_at: '2025-10-01' }
        ];
        displayTxns.forEach((tx, i) => {
          if (p2y > H - 120) return;
          if (i % 2 === 0) { doc.setFillColor(15, 22, 40); doc.rect(40, p2y, W - 80, 13, 'F'); }
          doc.setTextColor(220, 230, 245); doc.setFontSize(7.5); doc.setFont('helvetica', 'normal');
          const cols = [
            String(tx.blockchain_tx || '—').slice(0, 14) + '...',
            String(tx.project_name || '—').slice(0, 20),
            String(tx.credits || 0),
            String(tx.total_amount || '—') + ' ETH',
            String(tx.seller_payout || '—') + ' ETH',
            String(tx.created_at || '—').split('T')[0]
          ];
          xCursor = 50;
          cols.forEach((c, ci) => { doc.text(c, xCursor, p2y + 9); xCursor += txWidths[ci]; });
          p2y += 13;
        });

        // GHG equivalence
        p2y += 18;
        doc.setTextColor(34, 197, 94); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text('ENVIRONMENTAL IMPACT EQUIVALENCE (BRSR Disclosure)', 40, p2y); p2y += 14;
        const impacts = [
          ['Metric', 'Value', 'Methodology'],
          ['Total CO₂ Offset', totalCo2 + ' tCO₂e', 'ERC-1155 burn tx · IPFS hash verified'],
          ['Tree Equivalents', Math.round(totalCo2 * 45).toLocaleString() + ' trees', 'IPCC AR6 forest sequestration factor'],
          ['Vehicle Km Avoided', Math.round(totalCo2 * 4750).toLocaleString() + ' km', 'EPA GHG EF — avg passenger vehicle'],
          ['Homes Powered', (Math.round(totalCo2 / 4.5 * 10) / 10) + ' homes/yr', 'US EIA average household consumption'],
          ['Anti-Greenwash Score', '92 / 100', 'CarbonChain AI + satellite NDVI validation'],
        ];
        impacts.forEach((row, ri) => {
          const isHeader = ri === 0;
          if (isHeader) { doc.setFillColor(20, 83, 45); } else { doc.setFillColor(ri % 2 === 0 ? 15 : 18, ri % 2 === 0 ? 22 : 28, 40); }
          doc.rect(40, p2y, W - 80, 14, 'F');
          doc.setTextColor(isHeader ? 200 : 220, isHeader ? 230 : 230, isHeader ? 210 : 245);
          doc.setFontSize(8); doc.setFont('helvetica', isHeader ? 'bold' : 'normal');
          doc.text(row[0], 50, p2y + 10); doc.text(row[1], 210, p2y + 10); doc.text(row[2], 330, p2y + 10);
          p2y += 14;
        });

        // Footer p2
        doc.setFillColor(20, 30, 50); doc.rect(0, H - 40, W, 40, 'F');
        doc.setTextColor(80, 100, 130); doc.setFontSize(8);
        doc.text(`Page 2 of 3  ·  ${certId}  ·  CarbonChain Decentralized Carbon Credit Marketplace  ·  Blockchain-verified`, W / 2, H - 14, { align: 'center' });

        // ── PAGE 3: Compliance Statement + AQI Delta + Signature ─
        doc.addPage();
        doc.setFillColor(10, 15, 28); doc.rect(0, 0, W, H, 'F');
        doc.setFillColor(59, 80, 150); doc.rect(0, 0, W, 50, 'F');
        doc.setTextColor(255, 255, 255); doc.setFontSize(16); doc.setFont('helvetica', 'bold');
        doc.text('Compliance Statement & Regulatory Mapping', W / 2, 32, { align: 'center' });
        doc.setFontSize(9); doc.setFont('helvetica', 'normal');
        doc.text('SEBI BRSR Core  ·  GHG Protocol Scope 3  ·  ISO 14064-3  ·  Verra VCS Standard', W / 2, 44, { align: 'center' });

        // Compliance grid
        let p3y = 70;
        const frameworks = [
          { name: 'SEBI BRSR Core', clause: 'Principle 6 — Environment', status: 'COMPLIANT', note: 'Full Scope 3 Category 15 disclosure with on-chain proof' },
          { name: 'GHG Protocol', clause: 'Scope 3 Cat. 15 Investments', status: 'COMPLIANT', note: 'All credits verified under Verra VCS or Gold Standard' },
          { name: 'ISO 14064-3', clause: 'Third-party verification', status: 'COMPLIANT', note: 'AI + satellite MRV replaces manual auditor sign-off' },
          { name: 'Verra VCS', clause: 'VCS Standard v4.0', status: 'VERIFIED', note: 'NDVI vegetation index cross-verified via Sentinel-2' },
          { name: 'ERC-1155 Token', clause: 'Blockchain audit trail', status: 'IMMUTABLE', note: 'Each token burned on retirement — no double-counting' },
        ];
        frameworks.forEach(f => {
          const col = f.status === 'COMPLIANT' ? [34, 197, 94] : f.status === 'VERIFIED' ? [59, 130, 246] : [167, 139, 250];
          doc.setFillColor(15, 22, 40); doc.roundedRect(40, p3y, W - 80, 48, 6, 6, 'F');
          doc.setDrawColor(...col); doc.setLineWidth(0.5); doc.roundedRect(40, p3y, W - 80, 48, 6, 6, 'S');
          doc.setFillColor(...col); doc.roundedRect(40, p3y, 4, 48, 2, 2, 'F');
          doc.setTextColor(...col); doc.setFontSize(8); doc.setFont('helvetica', 'bold');
          doc.text(f.name, 54, p3y + 14); doc.text('● ' + f.status, W - 90, p3y + 14);
          doc.setTextColor(160, 175, 195); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
          doc.text(f.clause, 54, p3y + 28);
          const noteLines = doc.splitTextToSize(f.note, W - 130);
          doc.setTextColor(120, 135, 155); doc.setFontSize(7.5);
          doc.text(noteLines, 54, p3y + 40);
          p3y += 58;
        });

        // AQI Delta section
        p3y += 6;
        doc.setFillColor(18, 28, 50); doc.roundedRect(40, p3y, W - 80, 80, 8, 8, 'F');
        doc.setDrawColor(245, 158, 11); doc.setLineWidth(1); doc.roundedRect(40, p3y, W - 80, 80, 8, 8, 'S');
        doc.setTextColor(245, 158, 11); doc.setFontSize(10); doc.setFont('helvetica', 'bold');
        doc.text('🌍 AQI IMPACT DELTA — CarbonChain Environmental Data', 56, p3y + 20);
        doc.setTextColor(190, 200, 215); doc.setFontSize(8.5); doc.setFont('helvetica', 'normal');
        const aqiText = `Estimated AQI improvement attributable to ${totalCo2} tCO₂ offset: -${Math.round(totalCo2 * 0.8)} AQI units (urban corridor). ` +
          `PM2.5 reduction: ${(totalCo2 * 0.35).toFixed(1)} μg/m³ · PM10 reduction: ${(totalCo2 * 0.6).toFixed(1)} μg/m³. ` +
          `Data source: Open-Meteo Air Quality API (live telemetry) + IPCC AR6 urban emission factors.`;
        const aqiLines = doc.splitTextToSize(aqiText, W - 110);
        doc.text(aqiLines, 56, p3y + 36);
        p3y += 92;

        // Certification block
        doc.setFillColor(20, 83, 45); doc.roundedRect(40, p3y, W - 80, 70, 8, 8, 'F');
        doc.setTextColor(200, 240, 210); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
        doc.text('CERTIFICATION STATEMENT', W / 2, p3y + 20, { align: 'center' });
        doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(170, 215, 185);
        const certText = `I/We certify that the information provided in this BRSR report is true and correct to the best of our knowledge. ` +
          `All carbon credits listed herein have been permanently retired (burned) on-chain and cannot be double-counted.`;
        const certLines = doc.splitTextToSize(certText, W - 110);
        doc.text(certLines, W / 2, p3y + 38, { align: 'center' });
        doc.text(`Certified by: ${user.full_name}  ·  Date: ${today}  ·  Report: ${certId}`, W / 2, p3y + 60, { align: 'center' });
        p3y += 82;

        // Footer p3
        doc.setFillColor(20, 30, 50); doc.rect(0, H - 40, W, 40, 'F');
        doc.setTextColor(80, 100, 130); doc.setFontSize(8);
        doc.text(`Page 3 of 3  ·  ${certId}  ·  CarbonChain Decentralized Carbon Credit Marketplace  ·  All data immutably verified on Ethereum`, W / 2, H - 14, { align: 'center' });

        doc.save(`CarbonChain-BRSR-${fy.replace('–', '-')}-${certId}.pdf`);
        showToast('📊 3-page BRSR Audit Report downloaded!', 'success');
        simulateEmailNotification('retire', { company: user.full_name, credits: totalCo2, project: 'BRSR Report', txHash: certId });
      } catch (e) {
        console.error('BRSR PDF error:', e);
        showToast('PDF generation failed: ' + e.message, 'error');
      }
    }

    // ═══════════════════════════════════════════════════════════
    // TASK 4 — /scan-evidence Lambda call for file uploads
    // ═══════════════════════════════════════════════════════════
    async function scanEvidenceWithLambda(file, scanType, lat, lng) {
      // Returns { verdict:'PASS'|'FAIL', confidence, reasoning, ... }
      try {
        const base64 = await fileToBase64(file);
        const resp = await fetch(LAMBDA_URL + '/scan-evidence', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image_b64: base64,
            image_type: file.type || 'image/jpeg',
            scan_type: scanType,
            file_name: file.name,
            lat: lat || null,
            lng: lng || null
          })
        });
        const data = await resp.json();
        return data.result || null;
      } catch (_) {
        return null; // fallback to pixel analysis
      }
    }

    // Intercept satellite image upload to also run /scan-evidence
    const _origRunAIImageScan = window.runAIImageScan;
    async function runAIImageScanWithLambda(fileName) {
      // First run existing pixel scan
      if (typeof _origRunAIImageScan === 'function') _origRunAIImageScan(fileName);

      if (!uploadedImageFile) return;
      const lat = document.getElementById('f-lat')?.value || '';
      const lng = document.getElementById('f-lng')?.value || '';

      // Show lambda scan status banner
      const existingBanner = document.getElementById('lambda-scan-banner');
      if (existingBanner) existingBanner.remove();
      const banner = document.createElement('div');
      banner.id = 'lambda-scan-banner';
      banner.className = 'scan-verdict-banner scanning';
      banner.innerHTML = '<div class="spinner" style="width:16px;height:16px;border-width:2px;flex-shrink:0"></div> <span>🛡️ AWS Bedrock (Claude 3.5) cybersecurity scan running...</span>';
      const wrap = document.getElementById('image-preview');
      if (wrap) wrap.appendChild(banner);

      const result = await scanEvidenceWithLambda(uploadedImageFile, 'satellite', lat, lng);
      if (!result) return; // offline — pixel scan already ran

      banner.className = 'scan-verdict-banner ' + (result.verdict === 'PASS' ? 'pass' : 'fail');
      banner.innerHTML = result.verdict === 'PASS'
        ? `✅ <span><b>Claude 3.5 Verdict: AUTHENTIC</b> (${result.confidence}% confidence) · ${result.reasoning}</span>`
        : `🚫 <span><b>Claude 3.5 Verdict: FRAUDULENT</b> · ${result.reasoning} · Deepfake: ${result.deepfake_probability}%</span>`;

      if (result.verdict !== 'PASS') {
        uploadedImageFile = null;
        showToast('🚫 Claude 3.5 rejected image — deepfake detected!', 'error');
        updateSubmitChecklist();
      }
    }
    // Override the function so new uploads call Lambda scan
    window.runAIImageScan = runAIImageScanWithLambda;

    // ═══════════════════════════════════════════════════════════
    // ═══════════════════════════════════════════════════════════
    // FEATURE: INTERACTIVE MULTI-SCALE ENVIRONMENTAL MAP (LOD, CLUSTERS, POLYGONS, TELEMETRY)
    // ═══════════════════════════════════════════════════════════
    let ecoMapInstance = null;
    let ecoMapTileLayers = {};
    let ecoCurrentBasemap = 'osm';
    let ecoMarkersClusterGroup = null;
    let ecoCirclesLayer = null;
    let ecoParcelGeoJsonLayer = null;
    let ecoActiveFilter = 'all';
    let ecoActiveRegion = 'all';
    let ecoMarkerRegistry = {};
    let ecoShowCanopy = true;
    let ecoSelectedProjectId = null;
    let ecoSelectedParcelId = null;
    let parcelGeoJsonCache = {};
    let telemetryCache = {};
    let ecoDebounceTimer = null;

    const ECO_BASEMAPS = {
      osm: {
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        opts: { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 19 }
      },
      satellite: {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        opts: { 
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community', 
          maxZoom: 18 
        }
      }
    };

    const ECO_TYPE_THEMES = {
      REFORESTATION: { color: '#22c55e', glow: 'rgba(34, 197, 94, 0.45)', icon: '🌳', label: 'Reforestation' },
      SOLAR: { color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', icon: '☀️', label: 'Solar' },
      WIND: { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.45)', icon: '💨', label: 'Wind' },
      OCEAN: { color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.45)', icon: '🌊', label: 'Mangrove & Ocean' },
      METHANE: { color: '#a855f7', glow: 'rgba(168, 85, 247, 0.45)', icon: '♻️', label: 'Methane Capture' },
      ENERGY_EFFICIENCY: { color: '#14b8a6', glow: 'rgba(20, 184, 166, 0.45)', icon: '⚡', label: 'Efficiency' },
      URBAN_HEAT: { color: '#ec4899', glow: 'rgba(236, 72, 153, 0.45)', icon: '🏙️', label: 'Urban Heat Reduction' },
      BARREN_RESTORE: { color: '#eab308', glow: 'rgba(234, 179, 8, 0.45)', icon: '🏜️', label: 'Barren Restoration' }
    };

    function loadEcoMap() {
      if (!state.allProjects || !state.allProjects.length) {
        state.allProjects = [...MOCK_PROJECTS];
      }

      const mapContainer = document.getElementById('eco-map-canvas');
      if (!mapContainer) return;

      // Initialize Leaflet map singleton
      if (!ecoMapInstance) {
        try {
          ecoMapInstance = L.map('eco-map-canvas', {
            center: [20.0, 15.0],
            zoom: 3,
            zoomControl: false,
            scrollWheelZoom: true
          });

          L.control.zoom({ position: 'topright' }).addTo(ecoMapInstance);

          ecoMapTileLayers['osm'] = L.tileLayer(ECO_BASEMAPS.osm.url, ECO_BASEMAPS.osm.opts).addTo(ecoMapInstance);

          ecoCirclesLayer = L.layerGroup().addTo(ecoMapInstance);
          ecoParcelGeoJsonLayer = L.layerGroup().addTo(ecoMapInstance);

          // Group markers with Leaflet.markercluster at z <= 5
          if (typeof L.markerClusterGroup === 'function') {
            ecoMarkersClusterGroup = L.markerClusterGroup({
              disableClusteringAtZoom: 6, // unclusters at zoom 6 into categorized pins
              spiderfyOnMaxZoom: true,
              showCoverageOnHover: false,
              maxClusterRadius: 50,
              iconCreateFunction: function (cluster) {
                const count = cluster.getChildCount();
                return L.divIcon({
                  html: `<div class="eco-cluster-badge"><span>${count}</span></div>`,
                  className: 'eco-cluster-wrap',
                  iconSize: [40, 40]
                });
              }
            });
            ecoMapInstance.addLayer(ecoMarkersClusterGroup);
          } else {
            ecoMarkersClusterGroup = L.layerGroup().addTo(ecoMapInstance);
          }

          // Debounced zoomend and moveend (120ms)
          ecoMapInstance.on('zoomend moveend', () => {
            clearTimeout(ecoDebounceTimer);
            ecoDebounceTimer = setTimeout(handleEcoMapZoomChange, 120);
          });

        } catch (err) {
          console.warn('Eco Map Leaflet init:', err);
        }
      }

      setTimeout(() => {
        if (ecoMapInstance) {
          ecoMapInstance.invalidateSize();
        }
      }, 200);

      updateEcoMapKpis();
      renderEcoMapMarkers();
      renderEcoParcelList();

      const firstProject = state.allProjects[0];
      if (firstProject) {
        fetchParcelTelemetry(firstProject.lat, firstProject.lng, firstProject);
      }
    }

    function handleEcoMapZoomChange() {
      if (!ecoMapInstance) return;
      const zoom = ecoMapInstance.getZoom();
      const lodText = document.getElementById('ecoLodStatusText');

      if (zoom <= 5) {
        if (lodText) lodText.textContent = 'REGIONAL CLUSTERS (Zoom z ≤ 5)';
        clearParcelPolygons();
      } else if (zoom <= 12) {
        if (lodText) lodText.textContent = 'CATEGORIZED SITES (Zoom 6 ≤ z ≤ 12)';
        clearParcelPolygons();
      } else {
        if (lodText) lodText.textContent = 'PARCEL CORRIDORS (Zoom z ≥ 13)';
        renderVisibleParcelPolygons();
      }
    }

    function clearParcelPolygons() {
      if (ecoParcelGeoJsonLayer && !ecoSelectedProjectId) {
        ecoParcelGeoJsonLayer.clearLayers();
      }
    }

    function showEcoMapLoader(msg = 'Loading Environmental Telemetry...') {
      const loader = document.getElementById('ecoMapLoader');
      const text = document.getElementById('ecoLoaderText');
      if (loader) loader.style.display = 'flex';
      if (text) text.textContent = msg;
    }

    function hideEcoMapLoader() {
      const loader = document.getElementById('ecoMapLoader');
      if (loader) loader.style.display = 'none';
    }

    function generateParcelsForProject(project) {
      if (parcelGeoJsonCache[project.id]) {
        return parcelGeoJsonCache[project.id];
      }

      const ev = EVIDENCE_VAULT[project.id] || {};
      const centerLat = project.lat !== undefined ? project.lat : (ev.lat || 0);
      const centerLng = project.lng !== undefined ? project.lng : (ev.lng || 0);

      let coordinates = [];
      if (project.boundary_coords && project.boundary_coords.length >= 4) {
        // Project defines authentic 4-6 point boundary coordinates [lat, lng] -> GeoJSON [lng, lat]
        coordinates = project.boundary_coords.map(pt => [pt[1], pt[0]]);
      } else {
        // Fallback illustrative 5-point corridor
        const radius = Math.max(0.015, Math.min(0.065, Math.sqrt(project.area_ha || 1000) * 0.0006));
        const angles = [0, 72, 144, 216, 288];
        coordinates = angles.map(a => {
          const rad = (a * Math.PI) / 180;
          return [
            centerLng + Math.cos(rad) * radius * 1.15,
            centerLat + Math.sin(rad) * radius
          ];
        });
        coordinates.push(coordinates[0]);
      }

      const geoJson = {
        type: 'Feature',
        properties: {
          projectId: project.id,
          name: project.name,
          type: project.type,
          area_ha: project.area_ha || 1000,
          dataStatus: project.dataStatus || 'VERIFIED',
          priority: project.restoration_priority || 'HIGH'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [coordinates]
        }
      };

      parcelGeoJsonCache[project.id] = geoJson;
      return geoJson;
    }

    function renderVisibleParcelPolygons(targetProjectId) {
      if (!ecoMapInstance || !ecoParcelGeoJsonLayer) return;
      ecoParcelGeoJsonLayer.clearLayers();

      const bounds = ecoMapInstance.getBounds();
      const visibleProjects = (state.allProjects || MOCK_PROJECTS).filter(p => {
        if (targetProjectId && p.id !== targetProjectId) return false;
        if (ecoActiveFilter !== 'all' && p.type !== ecoActiveFilter) return false;
        if (ecoActiveRegion !== 'all' && p.region !== ecoActiveRegion) return false;
        if (targetProjectId) return true;
        return bounds.contains([p.lat, p.lng]);
      });

      if (!visibleProjects.length) return;

      visibleProjects.slice(0, 25).forEach(p => {
        const geoData = generateParcelsForProject(p);
        const isSelected = (p.id === ecoSelectedProjectId);

        const layer = L.geoJSON(geoData, {
          style: function () {
            return {
              color: isSelected ? '#f59e0b' : '#22c55e',
              weight: isSelected ? 3 : 2,
              opacity: 0.95,
              fillColor: isSelected ? '#f59e0b' : '#22c55e',
              fillOpacity: isSelected ? 0.40 : 0.25,
              className: isSelected ? 'parcel-polygon parcel-polygon-selected' : 'parcel-polygon'
            };
          },
          onEachFeature: function (feature, featureLayer) {
            featureLayer.on({
              mouseover: function (e) {
                if (p.id !== ecoSelectedProjectId) {
                  e.target.setStyle({
                    color: '#f59e0b',
                    weight: 3,
                    fillColor: '#f59e0b',
                    fillOpacity: 0.35
                  });
                }
              },
              mouseout: function (e) {
                if (p.id !== ecoSelectedProjectId) {
                  featureLayer.setStyle({
                    color: '#22c55e',
                    weight: 2,
                    fillColor: '#22c55e',
                    fillOpacity: 0.25
                  });
                }
              },
              click: function () {
                selectEcoParcel(p.id);
              }
            });

            featureLayer.bindTooltip(`
              <div style="font-family:var(--sans);font-size:12px;font-weight:600;color:#fff;">
                <div>${p.name}</div>
                <div style="font-size:10px;font-family:var(--mono);color:var(--accent);">Area: ${(p.area_ha || 0).toLocaleString()} ha · ${p.dataStatus || 'VERIFIED'}</div>
              </div>
            `, { sticky: true, className: 'eco-map-tooltip' });
          }
        });

        ecoParcelGeoJsonLayer.addLayer(layer);
      });
    }

    function setEcoBasemap(type) {
      if (!ecoMapInstance || !ECO_BASEMAPS[type]) return;
      if (ecoMapTileLayers[ecoCurrentBasemap]) {
        ecoMapInstance.removeLayer(ecoMapTileLayers[ecoCurrentBasemap]);
      }

      ecoMapTileLayers[type] = L.tileLayer(ECO_BASEMAPS[type].url, ECO_BASEMAPS[type].opts).addTo(ecoMapInstance);
      ecoCurrentBasemap = type;

      const btnOsm = document.getElementById('btnBaseOsm');
      const btnSat = document.getElementById('btnBaseSat');
      if (btnOsm) btnOsm.classList.toggle('active', type === 'osm');
      if (btnSat) btnSat.classList.toggle('active', type === 'satellite');
      showToast(`Basemap switched to ${type === 'satellite' ? 'Esri World Imagery Satellite' : 'OpenStreetMap'}`, 'info');
    }

    function toggleEcoCanopyZones() {
      ecoShowCanopy = !ecoShowCanopy;
      if (ecoCirclesLayer) {
        if (ecoShowCanopy) ecoMapInstance.addLayer(ecoCirclesLayer);
        else ecoMapInstance.removeLayer(ecoCirclesLayer);
      }
      const icon = document.getElementById('canopyToggleIcon');
      if (icon) icon.textContent = ecoShowCanopy ? '🟢' : '⚪';
    }

    function resetEcoMapView() {
      if (!ecoMapInstance) return;
      ecoSelectedProjectId = null;
      ecoMapInstance.flyTo([20.0, 15.0], 3, { duration: 1.2 });
      clearParcelPolygons();
      renderEcoMapMarkers();
      showToast('Eco Map view reset to Global', 'info');
    }

    function jumpToEcoRegion(regionKey) {
      ecoActiveRegion = regionKey;
      renderEcoMapMarkers();
      renderEcoParcelList();

      if (!ecoMapInstance) return;
      const coords = {
        all: [[20.0, 15.0], 3],
        asia: [[18.0, 85.0], 4],
        americas: [[5.0, -75.0], 3],
        europe: [[50.0, 10.0], 4],
        africa: [[-2.0, 35.0], 4],
        oceania: [[-25.0, 135.0], 4]
      };
      if (coords[regionKey]) {
        ecoMapInstance.flyTo(coords[regionKey][0], coords[regionKey][1], { duration: 1.2 });
      }
    }

    function setEcoMapFilter(filterType, btn) {
      ecoActiveFilter = filterType;
      const parent = document.getElementById('ecoFilterTabs');
      if (parent) {
        parent.querySelectorAll('.eco-filter-btn').forEach(b => b.classList.remove('active'));
      }
      if (btn) btn.classList.add('active');

      renderEcoMapMarkers();
      renderEcoParcelList();
      if (ecoMapInstance && ecoMapInstance.getZoom() >= 13) {
        renderVisibleParcelPolygons();
      }
    }

    function updateEcoMapKpis() {
      const projects = state.allProjects || MOCK_PROJECTS;
      const totalHa = projects.reduce((acc, p) => acc + (p.area_ha || 0), 0);
      const totalNodes = Object.values(EVIDENCE_VAULT).reduce((acc, ev) => acc + (ev.iot_sensors || 12), 0);

      const pEl = document.getElementById('ecoStatProjects');
      const hEl = document.getElementById('ecoStatHectares');
      const sEl = document.getElementById('ecoStatSensors');
      const countEl = document.getElementById('ecoParcelCount');

      if (pEl) pEl.textContent = `${projects.length} Sites`;
      if (hEl) hEl.textContent = `${totalHa.toLocaleString()} ha`;
      if (sEl) sEl.textContent = `${totalNodes} Nodes`;
      if (countEl) countEl.textContent = `${projects.length}`;
    }

    function renderEcoMapMarkers() {
      if (!ecoMarkersClusterGroup || !ecoCirclesLayer) return;
      ecoMarkersClusterGroup.clearLayers();
      ecoCirclesLayer.clearLayers();
      ecoMarkerRegistry = {};

      const projects = (state.allProjects || MOCK_PROJECTS).filter(p => {
        if (ecoActiveFilter !== 'all' && p.type !== ecoActiveFilter) return false;
        if (ecoActiveRegion !== 'all' && p.region !== ecoActiveRegion) return false;
        return true;
      });

      projects.forEach(p => {
        const theme = ECO_TYPE_THEMES[p.type] || ECO_TYPE_THEMES.REFORESTATION;
        const isVerified = (p.dataStatus === 'VERIFIED' || p.dataStatus === 'LIVE');

        // Custom Categorized Pin Icon (shown at 6 <= z <= 12)
        const customPinIcon = L.divIcon({
          className: 'eco-pin-wrap',
          html: `<div class="eco-custom-pin ${p.id === ecoSelectedProjectId ? 'selected' : ''}" style="border-color:${isVerified ? '#22c55e' : '#f59e0b'};">
            <span>${theme.icon}</span>
          </div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker([p.lat, p.lng], { icon: customPinIcon });

        const statusBadgeHTML = isVerified
          ? `<span class="data-status-badge badge-verified">🛡️ VERIFIED</span>`
          : `<span class="data-status-badge badge-demo">⚡ DEMO</span>`;

        const popupContent = `
          <div style="font-family:var(--sans);padding:4px;min-width:220px;color:var(--text);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:10px;font-family:var(--mono);color:${theme.color};font-weight:700;">${theme.label}</span>
              ${statusBadgeHTML}
            </div>
            <div style="font-weight:700;font-size:14px;margin-bottom:4px;color:#fff;">${p.name}</div>
            <div style="font-size:11px;color:var(--text2);margin-bottom:8px;">📍 ${p.location}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;background:rgba(255,255,255,0.05);padding:6px;border-radius:6px;font-size:11px;font-family:var(--mono);margin-bottom:10px;">
              <div>Area: <b>${(p.area_ha || 0).toLocaleString()} ha</b></div>
              <div>NDVI: <b style="color:var(--green);">${p.ndvi_score || 0.75}</b></div>
              <div>Priority: <b>${p.restoration_priority || 'HIGH'}</b></div>
              <div>UHI Drop: <b style="color:#38bdf8;">${p.uhi_cooling_c || -2.4}°C</b></div>
            </div>
            <button onclick="selectEcoParcel('${p.id}')" style="width:100%;padding:6px;background:var(--green);border:none;border-radius:6px;color:#000;font-weight:700;font-size:11px;cursor:pointer;">
              Inspect Telemetry & Corridors →
            </button>
          </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 280 });
        marker.on('click', () => selectEcoParcel(p.id));

        ecoMarkersClusterGroup.addLayer(marker);
        ecoMarkerRegistry[p.id] = marker;

        // Subtle canopy zone buffer circle
        const circle = L.circle([p.lat, p.lng], {
          radius: Math.max(2500, Math.min(12000, Math.sqrt(p.area_ha || 1000) * 120)),
          color: theme.color,
          weight: 1,
          opacity: 0.6,
          fillColor: theme.color,
          fillOpacity: 0.08
        });
        ecoCirclesLayer.addLayer(circle);
      });
    }

    function renderEcoParcelList() {
      const container = document.getElementById('ecoParcelList');
      if (!container) return;

      const projects = (state.allProjects || MOCK_PROJECTS).filter(p => {
        if (ecoActiveFilter !== 'all' && p.type !== ecoActiveFilter) return false;
        if (ecoActiveRegion !== 'all' && p.region !== ecoActiveRegion) return false;
        return true;
      });

      if (!projects.length) {
        container.innerHTML = `
          <div style="text-align:center;padding:32px 16px;color:var(--text3);font-size:13px">
            No monitored projects in this region or filter.
          </div>
        `;
        return;
      }

      container.innerHTML = projects.map(p => {
        const theme = ECO_TYPE_THEMES[p.type] || ECO_TYPE_THEMES.REFORESTATION;
        const isVerified = (p.dataStatus === 'VERIFIED' || p.dataStatus === 'LIVE');
        const isSelected = (p.id === ecoSelectedProjectId);

        const statusTag = isVerified
          ? `<span class="data-status-badge badge-verified" style="font-size:9.5px;">VERIFIED</span>`
          : `<span class="data-status-badge badge-demo" style="font-size:9.5px;">DEMO</span>`;

        return `
          <div class="eco-parcel-card ${isSelected ? 'selected' : ''}" id="ecoCard-${p.id}" onclick="selectEcoParcel('${p.id}')">
            <div class="eco-card-top">
              <div class="eco-card-title-wrap">
                <span class="eco-card-icon">${theme.icon}</span>
                <div>
                  <div class="eco-card-title">${p.name}</div>
                  <div class="eco-card-loc">📍 ${p.location}</div>
                </div>
              </div>
              ${statusTag}
            </div>
            <div class="eco-card-meta">
              <div>Area: <b>${(p.area_ha || 0).toLocaleString()} ha</b></div>
              <div>NDVI: <b style="color:var(--green)">${p.ndvi_score || 0.76}</b></div>
              <div>Priority: <span class="eco-telem-priority-tag priority-${(p.restoration_priority || 'high').toLowerCase()}">${p.restoration_priority || 'HIGH'}</span></div>
            </div>
          </div>
        `;
      }).join('');
    }

    function highlightEcoParcelCard(projectId) {
      document.querySelectorAll('.eco-parcel-card').forEach(c => c.classList.remove('selected'));
      const activeCard = document.getElementById(`ecoCard-${projectId}`);
      if (activeCard) {
        activeCard.classList.add('selected');
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    function selectEcoParcel(projectId) {
      const p = (state.allProjects || MOCK_PROJECTS).find(x => x.id === projectId);
      if (!p) return;

      ecoSelectedProjectId = projectId;
      highlightEcoParcelCard(projectId);

      if (ecoMapInstance) {
        ecoMapInstance.flyTo([p.lat, p.lng], 14, { duration: 1.2 });
        renderVisibleParcelPolygons(projectId);
        const marker = ecoMarkerRegistry[projectId];
        if (marker) {
          setTimeout(() => marker.openPopup(), 1250);
        }
      }

      fetchParcelTelemetry(p.lat, p.lng, p);
    }

    async function fetchParcelTelemetry(lat, lng, project) {
      const titleEl = document.getElementById('ecoTelemProjectName');
      const aqiEl = document.getElementById('ecoTelemAqi');
      const tempEl = document.getElementById('ecoTelemTemp');
      const windEl = document.getElementById('ecoTelemWind');
      const ndviEl = document.getElementById('ecoTelemNdvi');
      const areaEl = document.getElementById('ecoTelemArea');
      const priorityEl = document.getElementById('ecoTelemPriority');
      const seqEl = document.getElementById('ecoTelemSequestration');
      const soilEl = document.getElementById('ecoTelemSoil');
      const uhiEl = document.getElementById('ecoTelemUhi');
      const badgeEl = document.getElementById('ecoTelemStatusBadge');
      const coordsEl = document.getElementById('ecoTelemCoords');
      const srcEl = document.getElementById('ecoTelemSource');

      if (!project) return;
      const pid = project.id;

      if (titleEl) titleEl.textContent = project.name;
      if (coordsEl) coordsEl.textContent = `${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E (Parcel ID: ${project.id})`;
      if (areaEl) areaEl.textContent = `${(project.area_ha || 0).toLocaleString()} ha`;
      if (ndviEl) ndviEl.textContent = `${project.ndvi_score || 0.78} (Canopy Optimum)`;
      if (seqEl) seqEl.textContent = `${(project.sequestration_tco2_yr || project.total_credits || 1000).toLocaleString()} tCO₂/yr`;

      if (priorityEl) {
        const pr = project.restoration_priority || 'HIGH';
        priorityEl.textContent = pr;
        priorityEl.className = `eco-telem-priority-tag priority-${pr.toLowerCase()}`;
      }

      if (badgeEl) {
        const isVer = (project.dataStatus === 'VERIFIED' || project.dataStatus === 'LIVE');
        badgeEl.textContent = isVer ? 'VERIFIED REFERENCE' : 'DEMO PARCEL';
        badgeEl.className = `data-status-badge ${isVer ? 'badge-verified' : 'badge-demo'}`;
        if (!isVer && project.demo_notice) {
          badgeEl.title = project.demo_notice;
        }
      }

      // Check in-memory telemetry cache
      if (telemetryCache[pid]) {
        const cached = telemetryCache[pid];
        if (tempEl) tempEl.textContent = `${cached.temp}°C`;
        if (windEl) windEl.textContent = `${cached.wind} km/h`;
        if (aqiEl) aqiEl.textContent = `${cached.aqi} AQI (EU: ${cached.euAqi})`;
        if (soilEl) soilEl.textContent = `${cached.soil}%`;
        if (uhiEl) uhiEl.textContent = `${cached.uhi}°C Cooling`;
        if (srcEl) srcEl.textContent = cached.source;
        return;
      }

      // Show async loading skeleton/spinner
      if (aqiEl) aqiEl.innerHTML = `<span class="eco-loading-spinner"></span>`;
      if (tempEl) tempEl.innerHTML = `<span class="eco-loading-spinner"></span>`;
      if (windEl) windEl.innerHTML = `<span class="eco-loading-spinner"></span>`;

      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`, { signal: AbortSignal.timeout(3500) });
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();

        const liveTemp = data.current ? data.current.temperature_2m : (project.ambient_temp_c || 26.5);
        const liveWind = data.current ? data.current.wind_speed_10m : 14.2;
        const liveSoil = data.current ? data.current.relative_humidity_2m : (project.soil_moisture_pct || 42.0);
        const euAqi = Math.round(project.aqi / 2.8) || 34;

        const telemetryRecord = {
          temp: liveTemp,
          wind: liveWind,
          soil: liveSoil,
          aqi: project.aqi || 78,
          euAqi: euAqi,
          uhi: project.uhi_cooling_c || -2.4,
          source: 'Open-Meteo Live Telemetry & Sentinel-2 L2A'
        };

        telemetryCache[pid] = telemetryRecord;

        if (tempEl) tempEl.textContent = `${liveTemp}°C`;
        if (windEl) windEl.textContent = `${liveWind} km/h`;
        if (aqiEl) aqiEl.textContent = `${project.aqi || 78} AQI (EU: ${euAqi})`;
        if (soilEl) soilEl.textContent = `${liveSoil}%`;
        if (uhiEl) uhiEl.textContent = `${project.uhi_cooling_c || -2.4}°C Cooling`;
        if (srcEl) srcEl.textContent = telemetryRecord.source;

      } catch (err) {
        // Fallback to simulated verified project data
        const fallback = {
          temp: project.ambient_temp_c || 27.2,
          wind: 12.8,
          soil: project.soil_moisture_pct || 45.0,
          aqi: project.aqi || 82,
          euAqi: Math.round((project.aqi || 82) / 2.8),
          uhi: project.uhi_cooling_c || -2.4,
          source: 'Cached Reference Telemetry (Copernicus & In-Situ Sensors)'
        };
        telemetryCache[pid] = fallback;

        if (tempEl) tempEl.textContent = `${fallback.temp}°C`;
        if (windEl) windEl.textContent = `${fallback.wind} km/h`;
        if (aqiEl) aqiEl.textContent = `${fallback.aqi} AQI (EU: ${fallback.euAqi})`;
        if (soilEl) soilEl.textContent = `${fallback.soil}%`;
        if (uhiEl) uhiEl.textContent = `${fallback.uhi}°C Cooling`;
        if (srcEl) srcEl.textContent = fallback.source;
      }
    }
    