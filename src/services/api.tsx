import api from '../connection/axios';

type JsonResponse = {
    data: Object,
    error: Object,
}

export const RegisterUser = async (data: Object) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.post('/user/', data);
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
};

export const LoginUser = async (data: Object) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.post('/user/login', data);
        json.data = result.data;
        return json;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
};

export const ListSubjects = async () => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get('/subject/');
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
};

export const ListNewModules = async () => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get('/modules/new/');
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
};

export const ListContentsModelus = async (id_module: Number) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get(`/contents/${id_module}`);
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
};

export const GetContent = async (idContent: Number) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get(`/contents/${idContent}`);
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
};

export const GetContentById = async (idContent: Number) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get(`/select-content/${idContent}`);
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
}

export const GetQuestionsByContent = async (idContent: Number) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get(`/question/content/${idContent}`);
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
}

export const ShowInfoDash = async (idUser: Number = 1) => {
    let json: JsonResponse = { data: Object, error: Object };
    try {
        const result = await api.get(`/dash/`,{
            headers:{
                user: idUser.toString()
            }
        });
        json.data = result.data;
        return json.data;
    } catch (error) {
        console.log(error, 'erro');
        json.error = {error}
        return json;
    }
}