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
}