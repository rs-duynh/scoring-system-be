// Backend - src/backend/server.js
import express from "express";
import fs from "fs/promises";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://gmo-runsystem-scoring.vercel.app",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

const scoresFilePath = path.join(__dirname, "data/scores.json");

const defaultScores = {
  "Team 1": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  },
  "Team 2": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  },
  "Team 3": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  },
  "Team 4": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  },
  "Team 5": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  },
  "Team 6": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  },
  "Team 7": {
    "scores": {
      "test1@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test2@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test3@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test4@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test5@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test6@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      },
      "test7@runsystem.net": {
        "branding": {
          "uniformity": 0,
          "props": 0
        },
        "content": {
          "introduction": 0,
          "theme": 0,
          "creativity": 0
        },
        "technical": {
          "videoEffect": 0,
          "videoQuality": 0,
          "audioQuality": 0
        },
        "ai": {
          "imageQuality": 0,
          "audioQuality": 0,
          "scriptIdea": 0,
          "creativity": 0
        },
        "presentation": {
          "speaking": 0,
          "confidence": 0,
          "timing": 0
        },
        "submitted": false
      }

    }
  }
}

const initializeScoresFile = async () => {
  try {
    await fs.access(scoresFilePath);
  } catch {
    await fs.writeFile(
      scoresFilePath,
      JSON.stringify(defaultScores, null, 2),
      "utf-8"
    );
  }
};

const router = express.Router();

router.post("/submit-scores", async (req, res) => {
  const { scores } = req.body;
  try {
    await fs.writeFile(
      scoresFilePath,
      JSON.stringify(scores, null, 2),
      "utf-8"
    );
    res.json({ message: "Scores saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving scores", error });
  }
});

router.get("/get-scores", async (req, res) => {
  try {
    let scores = defaultScores;
    console.log("🚀 ~ app.get ~ scores:", scores);
    try {
      const data = await fs.readFile(scoresFilePath, "utf-8");
      scores = JSON.parse(data);
    } catch {
      await fs.writeFile(
        scoresFilePath,
        JSON.stringify(defaultScores, null, 2),
        "utf-8"
      );
    }
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: "Error reading scores", error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const accountsData = await fs.readFile(
      path.join(__dirname, "data/accounts.json"),
      "utf-8"
    );
    const accounts = JSON.parse(accountsData);

    const user = accounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (user) {
      // Create a simple token (should use JWT in practice)
      const token = Buffer.from(`${email}-${Date.now()}`).toString("base64");

      res.json({
        success: true,
        user: {
          email: user.email,
          role: user.role,
          name: user.name,
        },
        token,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
});

// Middleware to check token
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  // Should verify JWT token in practice
  next();
};

// Add middleware for protected routes
router.get("/get-scores", authMiddleware, async (req, res) => {
  try {
    let scores = defaultScores;
    console.log("🚀 ~ app.get ~ scores:", scores);
    try {
      const data = await fs.readFile(scoresFilePath, "utf-8");
      scores = JSON.parse(data);
    } catch {
      await fs.writeFile(
        scoresFilePath,
        JSON.stringify(defaultScores, null, 2),
        "utf-8"
      );
    }
    res.json(scores);
  } catch (error) {
    res.status(500).json({ message: "Error reading scores", error });
  }
});

router.post("/submit-scores", authMiddleware, async (req, res) => {
  const { scores } = req.body;
  try {
    await fs.writeFile(
      scoresFilePath,
      JSON.stringify(scores, null, 2),
      "utf-8"
    );
    res.json({ message: "Scores saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving scores", error });
  }
});
router.get("/scoring-status", authMiddleware, async (req, res) => {
  try {
    const configPath = path.join(__dirname, "data/config.json");
    let config = { isLocked: false };

    try {
      const data = await fs.readFile(configPath, "utf-8");
      config = JSON.parse(data);
    } catch {
      await fs.writeFile(configPath, JSON.stringify(config), "utf-8");
    }

    res.json({ isLocked: config.isLocked });
  } catch (error) {
    res.status(500).json({ message: "Error getting lock status", error });
  }
});
router.post("/reset-scores", authMiddleware, async (req, res) => {
  try {
    const defaultScores = {
      "Team 1": {
        scores: {
          "test1@runsystem.net": {
            branding: {
              uniformity: 0,
              props: 0
            },
            content: {
              introduction: 0,
              theme: 0,
              creativity: 0
            },
            technical: {
              videoEffect: 0,
              videoQuality: 0,
              audioQuality: 0
            },
            ai: {
              imageQuality: 0,
              audioQuality: 0,
              scriptIdea: 0,
              creativity: 0
            },
            presentation: {
              speaking: 0,
              confidence: 0,
              timing: 0
            },
            submitted: false
          }
        }
      }
    };

    // Tạo template cho một user
    const createUserTemplate = () => ({
      branding: {
        uniformity: 0,
        props: 0
      },
      content: {
        introduction: 0,
        theme: 0,
        creativity: 0
      },
      technical: {
        videoEffect: 0,
        videoQuality: 0,
        audioQuality: 0
      },
      ai: {
        imageQuality: 0,
        audioQuality: 0,
        scriptIdea: 0,
        creativity: 0
      },
      presentation: {
        speaking: 0,
        confidence: 0,
        timing: 0
      },
      submitted: false
    });

    // Danh sách users và teams
    const users = [
      "test1@runsystem.net",
      "test2@runsystem.net", 
      "test3@runsystem.net",
      "test4@runsystem.net",
      "test5@runsystem.net",
      "test6@runsystem.net",
      "test7@runsystem.net"
    ];
    
    const teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7"];

    // Tạo cấu trúc điểm mới
    const newScores = {};
    teams.forEach(team => {
      newScores[team] = {
        scores: {}
      };
      users.forEach(user => {
        newScores[team].scores[user] = createUserTemplate();
      });
    });

    await fs.writeFile(
      scoresFilePath,
      JSON.stringify(newScores, null, 2),
      "utf-8"
    );

    res.json({ message: "Scores reset successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error resetting scores", error });
  }
});
router.get("/get-accounts", authMiddleware, async (req, res) => {
  const accountsData = await fs.readFile(
    path.join(__dirname, "data/accounts.json"),
    "utf-8"
  );
  res.json(JSON.parse(accountsData));
});
app.use("/api", router);

// app.use(express.static(path.join(__dirname, '../../build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../build', 'index.html'));
// });

app.listen(5000, async () => {
  await initializeScoresFile();
  console.log("Server running on port 5000");
});
