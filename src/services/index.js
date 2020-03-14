import axios from 'axios';

export const getDogList = async () => {
    return await axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
        if (res.status === 200 && res.data.status === 'success') {
            return Object.entries(res.data.message).reduce((acc, cur) => {
                return acc.then((promiseRes) => {
                    return getDogPic(cur[0]).then((res) => {
                        promiseRes.push([cur[0], res]);
                        return Promise.resolve(promiseRes);
                    })
                })
            }, Promise.resolve([]));
        }
    });
};

export const getDogPic = name => {
    return axios.get(`https://dog.ceo/api/breed/${name}/images`).then(res => {
        if (res.status === 200 && res.data.status === 'success') {
            return res.data.message;
        }
    })
};
