const router = require("./auth.route");
const multer = require('multer');
const {verifyToken} = require("../middlewares/verify-token");
const storage = require("../configs/multer");
const {isCandidateOfTest, isJudgeOfTest, isCandiateOrJudgeOfTest} = require("../middlewares/test-middleware");
  
const upload = multer({ storage });

const {
    uploadAnswer,
    downloadAnswer,
    uploadQuestion,
    downloadQuestion,
    updateQuestion,
    uploadScore,
    updateQuestion
} = require("../controllers/up_level.controller");

router.use(verifyToken);

router.post("/:test_id/upload-question", upload.single('file'), isJudgeOfTest, uploadQuestion);
router.patch("/:test_id/update-question", upload.single('file'), isJudgeOfTest, updateQuestion);
router.get("/:test_id/download-question", isCandiateOrJudgeOfTest, downloadQuestion);
router.post("/:test_id/upload-answer", upload.single('file'), isCandidateOfTest, uploadAnswer);
router.get("/:test_id/download-answer", isCandiateOrJudgeOfTest , downloadAnswer);
router.post("/:test_id/upload-score", verifyToken, uploadScore);

module.exports = router;