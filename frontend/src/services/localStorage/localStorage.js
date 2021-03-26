export const getLocalStorageUser = () => {
    let user = localStorage.getItem('user');
    if (user) {
        return (user);
    } else {
        return '';
    }
};

export const setLocalStorageUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
