const asyncHander = (requestHandler) => async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err));
}

export default asyncHander;

// OR

// const asyncHander = (requestHandler) => async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json ({ success: false, message: err.message});
//     }
// }