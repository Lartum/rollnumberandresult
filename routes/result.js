const router = require('express').Router()
const resolveResult = require('../utils/_resultfunc')

router.post('/', async (req,res) => {
    const { rollnos } = req.body
    try {
        const rollnoArray = rollnos.split(",")
        rollnoArray.forEach(rollno => {
        if(isNaN(rollno)){
             return res.status(406).send('Invalid Rollnumber')
         }
        })
        const results = await Promise.all(rollnoArray.map(async (rollno) => {
           const result = await resolveResult(rollno)
           return result
        }))
        
        return res.status(200).send(results)                 
    } catch (error) {
        return res.status(400).send(error.toString())
    }
})


module.exports = router