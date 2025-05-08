import { Where } from "sequelize/lib/utils";
import Terms from "../models/terms-of-use.model.js";

// export const getTerms = async (req, res) => {
//     try {
//         const { content, date } = req.body

//         const parsedDate = new Date(date)
//         if (isNaN(parsedDate.getTime())) {
//             return res.status(400).json({ error: "Fecha inválida" });
//         }

//         const getTerm = await Terms.findAll({
//             content,
//             date: parsedDate
//         })

//         res.status(200).json({ message: "Terminos obtenido con éxito", Term: getTerm })

//     } catch (err) {
//         res.status(400).json("Error al conseguir el Termino en la base de datos")
//     }
// }

export const EditTerms = async (req, res) => {
    try {
        const { content, date } = req.body

        const parsedDate = new Date(date)
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ error: "Fecha invalida" })
        }

        const putTerms = await Terms.update({
            content,
            date: parsedDate
        }, { where: { id: 1 } })

        res.status(200).json({ message: "Termino actualizado con éxito" })
    } catch (err) {
        res.status(400).json("Error al actualizar el Terms of use")
    }
}