const got = require('got')

const resolveResult = async (rollno) => {
    try {
        const result = await got(`http://proedge.me/test.php?rollnumber=${rollno}`)
        return { [rollno]: result.body }
    } catch (error) {
        return error
    }
}


module.exports = resolveResult