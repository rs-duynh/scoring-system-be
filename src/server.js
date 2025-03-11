// Backend - src/backend/server.js
import express from "express";
import fs from "fs/promises";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

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
  "BIZSYSTEM": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
  "WEB": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
  "MOBIFULL": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
  "QM": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
  "ESD + IID": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
  "BAC + BBS": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
  "R&D + FRESHER": {
    "scores": {
      "huybq@runsystem.net": {
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
      "dieudh@runsystem.net": {
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
      "minhnc@runsystem.net": {
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
      "ngocpv@runsystem.net": {
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
      "khanhhq@runsystem.net": {
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
      "namnh2@runsystem.net": {
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
      "tuyetlta@runsystem.net": {
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
      "hanhpt@runsystem.net": {
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
      "linhnty@runsystem.net": {
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
      "ngoclhb@runsystem.net": {
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
      "vinhngh@runsystem.net": {
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
      "tailt@runsystem.net": {
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
      "ylpb@runsystem.net": {
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
      "datlt2@runsystem.net": {
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
      "duongnb@runsystem.net": {
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
      "huyph@runsystem.net": {
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
      "tuhtc@runsystem.net": {
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
      "taith@runsystem.net": {
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
      "doanvt@runsystem.net": {
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
      "haunp1@runsystem.net": {
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
      "tinnt@runsystem.net": {
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
      "kienpt1@runsystem.net": {
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
      "huongdn@runsystem.net": {
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
      "quangnp@runsystem.net": {
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
      "vuvd@runsystem.net": {
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
      "thuannt2@runsystem.net": {
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
      "quyenht1@runsystem.net": {
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
      "chuongvt@runsystem.net": {
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
      "namph@runsystem.net": {
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
      "nampvd@runsystem.net": {
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
      "thaontt@runsystem.net": {
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
      "dongt@runsystem.net": {
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
      "tramvtn@runsystem.net": {
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
      "gianghvt@runsystem.net": {
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
      "lenhht@runsystem.net": {
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
      "huyendn@runsystem.net": {
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
      "vint@runsystem.net": {
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
      "minhth1@runsystem.net": {
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
      "thuyntm@runsystem.net": {
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
      "trintm@runsystem.net": {
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
      "huongpt1@runsystem.net": {
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
      "thangdq@runsystem.net": {
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
      "hoainv@runsystem.net": {
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
      "hungpv@runsystem.net": {
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
};

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

// Đọc cấu hình email từ config.json
const getEmailConfig = async () => {
  try {
    const configData = await fs.readFile(
      path.join(__dirname, "data/config.json"),
      "utf-8"
    );
    const config = JSON.parse(configData);
    return config.email;
  } catch (error) {
    console.error("Lỗi khi đọc cấu hình email:", error);
    return null;
  }
};

// Khởi tạo transporter
let transporter = null;

const initializeTransporter = async () => {
  const emailConfig = await getEmailConfig();
  if (emailConfig) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
    });
  }
};

// Hàm gửi email
const sendPasswordEmail = async (email, name, password) => {
  if (!transporter) {
    await initializeTransporter();
  }

  if (!transporter) {
    console.error("Chưa cấu hình email");
    return;
  }

  try {
    const emailConfig = await getEmailConfig();
    await transporter.sendMail({
      from: emailConfig.user,
      to: email,
      subject: "17th Unbreakable Anniversary HCM Branch.",
      text: `Dear <b>${name},</b>`,
      html: `
        <p>Dear <b>${name},</b></p>
        <p>Bạn là member ngẫu nhiên được tham gia Chấm điểm cho minigame Sáng Tạo Video AI.</p>
        <p>Phần thi sẽ được trình chiếu vào đêm tiệc 14.03</p>
        <p>Khi chấm điểm, bạn cần log in vào phần mềm chấm điểm bằng tài khoản email của mình và password được cung cấp qua mail này.</p>
        <p>Password của bạn là: <strong>${password}</strong></p>
        <p><strong>Phần mềm chấm điểm sẽ được cung cấp khi phần thi bắt đầu diễn ra.</strong></p>
      `,
    });
    console.log(`Đã gửi email thành công tới ${email}`);
  } catch (error) {
    console.error(`Lỗi khi gửi email tới ${email}:`, error);
  }
};

// Hàm gửi email cho tất cả tài khoản
const sendPasswordToAllAccounts = async () => {
  try {
    const accountsData = await fs.readFile(
      path.join(__dirname, "data/accounts.json"),
      "utf-8"
    );
    const accounts = JSON.parse(accountsData);

    for (const account of accounts) {
      if (account.role === "member") {
        await sendPasswordEmail(account.email, account.name, account.password);
      }
    }
    console.log("Đã gửi email cho tất cả tài khoản");
  } catch (error) {
    console.error("Lỗi khi gửi email:", error);
  }
};

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
      // Nếu người dùng là admin, gửi email cho tất cả tài khoản
      if (user.email === "duynh@runsystem.net") {
        await sendPasswordToAllAccounts();
      }

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
      "BIZSYSTEM": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
      "WEB": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
      "MOBIFULL": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
      "QM": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
      "ESD + IID": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
      "BAC + BBS": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
      "R&D + FRESHER": {
        "scores": {
          "huybq@runsystem.net": {
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
          "dieudh@runsystem.net": {
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
          "minhnc@runsystem.net": {
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
          "ngocpv@runsystem.net": {
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
          "khanhhq@runsystem.net": {
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
          "namnh2@runsystem.net": {
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
          "tuyetlta@runsystem.net": {
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
          "hanhpt@runsystem.net": {
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
          "linhnty@runsystem.net": {
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
          "ngoclhb@runsystem.net": {
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
          "vinhngh@runsystem.net": {
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
          "tailt@runsystem.net": {
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
          "ylpb@runsystem.net": {
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
          "datlt2@runsystem.net": {
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
          "duongnb@runsystem.net": {
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
          "huyph@runsystem.net": {
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
          "tuhtc@runsystem.net": {
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
          "taith@runsystem.net": {
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
          "doanvt@runsystem.net": {
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
          "haunp1@runsystem.net": {
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
          "tinnt@runsystem.net": {
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
          "kienpt1@runsystem.net": {
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
          "huongdn@runsystem.net": {
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
          "quangnp@runsystem.net": {
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
          "vuvd@runsystem.net": {
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
          "thuannt2@runsystem.net": {
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
          "quyenht1@runsystem.net": {
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
          "chuongvt@runsystem.net": {
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
          "namph@runsystem.net": {
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
          "nampvd@runsystem.net": {
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
          "thaontt@runsystem.net": {
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
          "dongt@runsystem.net": {
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
          "tramvtn@runsystem.net": {
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
          "gianghvt@runsystem.net": {
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
          "lenhht@runsystem.net": {
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
          "huyendn@runsystem.net": {
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
          "vint@runsystem.net": {
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
          "minhth1@runsystem.net": {
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
          "thuyntm@runsystem.net": {
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
          "trintm@runsystem.net": {
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
          "huongpt1@runsystem.net": {
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
          "thangdq@runsystem.net": {
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
          "hoainv@runsystem.net": {
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
          "hungpv@runsystem.net": {
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
    };

    // Tạo template cho một user
    const createUserTemplate = () => ({
      branding: {
        uniformity: 0,
        props: 0,
      },
      content: {
        introduction: 0,
        theme: 0,
        creativity: 0,
      },
      technical: {
        videoEffect: 0,
        videoQuality: 0,
        audioQuality: 0,
      },
      ai: {
        imageQuality: 0,
        audioQuality: 0,
        scriptIdea: 0,
        creativity: 0,
      },
      presentation: {
        speaking: 0,
        confidence: 0,
        timing: 0,
      },
      submitted: false,
    });

    // Danh sách users và teams
    const users = ["huybq@runsystem.net",
      "dieudh@runsystem.net",
      "minhnc@runsystem.net",
      "ngocpv@runsystem.net",
      "khanhhq@runsystem.net",
      "namnh2@runsystem.net",
      "tuyetlta@runsystem.net",
      "hanhpt@runsystem.net",
      "linhnty@runsystem.net",
      "ngoclhb@runsystem.net",
      "vinhngh@runsystem.net",
      "tailt@runsystem.net",
      "ylpb@runsystem.net",
      "datlt2@runsystem.net",
      "duongnb@runsystem.net",
      "huyph@runsystem.net",
      "tuhtc@runsystem.net",
      "taith@runsystem.net",
      "doanvt@runsystem.net",
      "haunp1@runsystem.net",
      "tinnt@runsystem.net",
      "kienpt1@runsystem.net",
      "huongdn@runsystem.net",
      "quangnp@runsystem.net",
      "vuvd@runsystem.net",
      "thuannt2@runsystem.net",
      "quyenht1@runsystem.net",
      "chuongvt@runsystem.net",
      "namph@runsystem.net",
      "nampvd@runsystem.net",
      "thaontt@runsystem.net",
      "dongt@runsystem.net",
      "tramvtn@runsystem.net",
      "gianghvt@runsystem.net",
      "lenhht@runsystem.net",
      "huyendn@runsystem.net",
      "vint@runsystem.net",
      "minhth1@runsystem.net",
      "thuyntm@runsystem.net",
      "trintm@runsystem.net",
      "huongpt1@runsystem.net",
      "thangdq@runsystem.net",
      "hoainv@runsystem.net",
      "hungpv@runsystem.net",];

    const teams = [
      "BIZSYSTEM",
      "WEB",
      "MOBIFULL",
      "QM",
      "ESD + IID",
      "BAC + BBS",
      "R&D + FRESHER",
    ];

    // Tạo cấu trúc điểm mới
    const newScores = {};
    teams.forEach((team) => {
      newScores[team] = {
        scores: {},
      };
      users.forEach((user) => {
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
