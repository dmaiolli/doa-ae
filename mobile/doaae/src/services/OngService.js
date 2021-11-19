import axios from 'axios';

const BASE_URL = "https://salty-garden-90525.herokuapp.com/api/v1/ong";

export const create = async (name, description, email, whatsapp, cnpj, uf, city, number, street) => {
    try {
        return axios({
            method: 'post',
            url: BASE_URL,
            data: {
                name,
                description,
                email,
                whatsapp,
                cnpj,
                uf,
                city,
                number,
                street,
            }
        })
    } catch (err) {
        console.log(err);
    }

}

export const findAll = async () => {
    return axios({
        method: 'get',
        url: `${BASE_URL}/list`
    })
}

export const findByCdOng = async (id) => {
    return axios({
        method: 'get',
        url: `${BASE_URL}/${id}`
    })
}

export const findByUfAndCity = async (uf, city) => {
    try {
        return axios({
            method: 'get',
            url: `${BASE_URL}/${uf}/${city}`
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteByCdOng = async (id) => {
    return axios({
        method: 'delete',
        url: `${BASE_URL}/${id}`
    })
}

export const update = async (id, name, description, email, whatsapp, cnpj, uf, city, number, street) => {
    return axios({
        method: 'put',
        url: `${BASE_URL}/${id}`,
        data: {
            name,
            description,
            email,
            whatsapp,
            cnpj,
            uf,
            city,
            number,
            street,
        }
    })
}
