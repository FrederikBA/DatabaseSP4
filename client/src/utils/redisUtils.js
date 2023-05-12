import api from './apiUtils';

export const getData = async () => {
  try {
    const response = await api.getAxios().get(api.getUrl());
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const subscribe = async (channel) => {
  try {
    const response = await api.getAxios().post(`${api.getUrl()}/subscribe/${channel}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const publish = async (channel, message) => {
  try {
    const response = await api.getAxios().post(`${api.getUrl()}/publish/${channel}`, { message });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


