import * as UploadApi from '../api/UploadRequest'

export const uploadImage = (data) => async (dispatch) => {
    console.log(data,"haaa");
    try {
        console.log(data,"helllloooooooo");
        await UploadApi.uploadImage(data)
    } catch (error) {
        // console.log(error,"hellooooo")
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" })
    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_FAIL" })
    }
}