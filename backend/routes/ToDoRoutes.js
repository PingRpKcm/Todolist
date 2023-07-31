const {Router} = require("express")
const { getToDo, saveToDo, updateToDo, deleteToDo, updateToDoProgress } = require("../controllers/ToDoController")

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.put('/update', updateToDo)
router.post('/delete', deleteToDo)
router.put('/updateProgress', updateToDoProgress)

module.exports = router;