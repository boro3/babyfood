import {
    POST_NEW_USER,
    POST_LOG_IN, GET_USER,
    PATCH_USER,
    POST_PROFILE_IMG,
    POST_RECIPE_IMG,
    POST_NEW_RECIPE,
    GET_SINGLE_RECIPE
} from './../constants/endpoins';

export const createUserReq = async (values) => {
    let response = await fetch(POST_NEW_USER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.json();
    }
};

export const loginUserReq = async (values) => {
    let response = await fetch(POST_LOG_IN,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(values)
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.json();
    }
};

export const fetchUserReq = async (id, jwt) => {
    let response = await fetch(`${GET_USER}${id}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.json();
    }
};

export const updateUserReq = async (id, jwt, payload) => {
    let response = await fetch(`${PATCH_USER}${id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(payload)
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return true;
    }
};

export const uploadUserPictureReq = async (image, jwt) => {
    let response = await fetch(POST_PROFILE_IMG,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            body: image,
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.text();
    }
};

export const uploadRecipePictureReq = async (image, jwt) => {
    let response = await fetch(POST_RECIPE_IMG,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            body: image,
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.text();
    }
};

export const createRecipeReq = async (jwt, payload) => {
    let response = await fetch(POST_NEW_RECIPE,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(payload)
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.json();
    }
};

export const fetchSingleReciple = async (jwt, id) => {
    let response = await fetch(`${GET_SINGLE_RECIPE}${id}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return response.json();
    }
};


export const updateRecipeReq = async (id, jwt, payload) => {
    let response = await fetch(`${GET_SINGLE_RECIPE}${id}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(payload)
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return true;
    }
};
export const deleteRecipeReq = async (id, jwt) => {
    let response = await fetch(`${GET_SINGLE_RECIPE}${id}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        }
    );
    if (!response.ok) {
        let text = await response.text();
        throw new Error(text);
    } else {
        return true;
    }
};