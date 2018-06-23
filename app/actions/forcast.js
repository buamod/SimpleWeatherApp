export const UPDATE_FORCAST_DATA = 'UPDATE_FORCAST_DATA';

export const updateForcast = (newData) => ({
    type: UPDATE_FORCAST_DATA,
    newData: newData,
});