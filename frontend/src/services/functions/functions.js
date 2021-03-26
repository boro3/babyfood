export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
};

export const compareStateUpdate = (values, initialValues) => {
    let payload={};
    if (!(values.first_name === initialValues.first_name || values.first_name === ''))
        payload.first_name = values.first_name;
    if (!(values.last_name === initialValues.last_name || values.last_name === ''))
        payload.last_name = values.last_name;
    if (!(values.dob === formatDate(initialValues.dob) || values.dob === ''))
        payload.dob = values.dob;
    if (!(values.email === initialValues.email || values.email === ''))
        payload.email = values.email;
    if (!(values.password === '')) {
        payload.password = values.password;
        payload.repeat_password = values.repeat_password;
    }
    return payload;
};



