import { createContext, useContext } from "react";
import { registerReviewRequest } from "../api/canal";
import { registerVideoRequest } from "../api/canal";
import { deleteVideo } from "../api/canal";
import { deleteReview } from "../api/canal";
import { putVideo } from "../api/canal";
import { putReview } from "../api/canal";

export const VideoContext = createContext();
export const ReviewContext = createContext()

export const useVideo = () => useContext(VideoContext);
export const useReview = () => useContext(ReviewContext);

export const VideoProvider = ({ children }) => {
    const adminVideo = async (video) => {
        const formData = new FormData();
        formData.append("video", video.video);
        formData.append("image", video.image); // este `image` debe ser un File, no un string
        formData.append("title", video.title);
        formData.append("description", video.description);
        formData.append("date", video.date);

        await registerVideoRequest(formData)
    };

    const editVideo = async (id, video) => {
        const formData = new FormData();
        formData.append("video", video.video);
        formData.append("image", video.image);
        formData.append("title", video.title);
        formData.append("description", video.description);
        formData.append("date", video.date);
        await putVideo(id, formData);
      };

    return (
        <VideoContext.Provider value={{ adminVideo, editVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

export const ReviewProvider = ({ children }) => {
    const adminReview = async (review) => {
        const formData = new FormData();
        formData.append("image", review.image);
        formData.append("name", review.name);
        formData.append("content", review.content);
        formData.append("date", review.date);

        await registerReviewRequest(formData)
    }

    const editReview = async (id, review) => {
        const formData = new FormData();
        formData.append("image", review.image);
        formData.append("name", review.name);
        formData.append("content", review.content);
        formData.append("date", review.date);

        await putReview(id, formData)
    }
    return (
        <ReviewContext.Provider value={{ adminReview, editReview }}>
            {children}
        </ReviewContext.Provider>
    )
}

export const deletedVideo = async (id) => {
    try {       
        await deleteVideo(id)
        alert("Video eliminado con éxito")
    } catch (err) {
        alert("Hubo un error al eliminar el video")
        console.log(err)
    }
}

export const deletedReview = async (id) => {
    try {
        await deleteReview(id)
        alert("Reseña eliminada con éxito")
    } catch (err) {
        alert("Hubo un error al eliminar la Reseña")
        console.log(err)
    }
}