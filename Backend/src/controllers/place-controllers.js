export function getAllPlaces(req, res, next) {
    return res.status(200).json({ success: true, message: 'Places fetched succesfully' })
}