import axios from "axios";

const API = "http://localhost:3000/api/admin/canal"

export const registerVideoRequest = (formData) =>
    axios.post(`${API}/PostVideo`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
});

export const registerReviewRequest = (formData) =>
    axios.post(`${API}/PostReview`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
})

export const getChannel = await axios.get(`${API}`, { withCredentials: true })


export const getVideo = await axios.get(`${API}/video`, { withCredentials: true })
export const getReview = await axios.get(`${API}/review`, { withCredentials: true })

export const deleteVideo = id => axios.delete(`${API}/video/${id}`)
export const deleteReview = id => axios.delete(`${API}/review/${id}`)
export const putVideo = (id, formData) => axios.put(`${API}/video/${id}`, formData, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
export const putReview = (id, formData) => axios.put(`${API}/review/${id}`, formData, {
    headers:  {
        "Content-Type": "multipart/form-data"
    }
})

// export const registerReviewRequest = (formData) =>
//     axios.post(`${API}/PostVideo`, formData, {
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//     });