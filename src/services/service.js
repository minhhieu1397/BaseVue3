import ApiService from './api';
import { commonStore } from '@/store/modules/commonStore'
import { pinia } from '@/store'

const common = commonStore(pinia)
console.log(common.isCallingApi, '21313');
const ERROR_CODE_VALIDATE = 422;
const ERROR_CODE_UNAUTHORIZED = 401;
const ERROR_CODE_NOT_FOUND = 404;

export default {
  async post(url, params = {}) {
    try {
      if (common.isCallingApi) return;
      common.isCallingApi = true;
      let result = await ApiService.post(url, params);
      common.isCallingApi = false;
      return {
        statusCode: result.status,
        status: result.data.status,
        data: result.data,
      };
    } catch (e) {
      return this._setError(e);
    }
  },
  async put(url, params = {}) {
    try {
      if (common.isCallingApi) return;
      common.isCallingApi = true;
      let result = await ApiService.put(url, params);
      common.isCallingApi = false;

      return {
        statusCode: result.status,
        status: result.data.status,
        data: result.data.data,
      };
    } catch (e) {
      return this._setError(e);
    }
  },
  async get(url, params = {}) {
    try {
      let result = await ApiService.get(url, params);
      return {
        status: result.status,
        data: result.data.data,
      };
    } catch (e) {
      return this._setError(e);
    }
  },
  async getWithLoading(url, params = {}) {
    try {
      common.isCallingApi = true;
      let result = await ApiService.get(url, params);
      common.isCallingApi = false;
      return {
        status: result.status,
        data: result.data.data,
      };
    } catch (e) {
      return this._setError(e);
    }
  },
  async download(url, params = {}) {
    try {
      common.isCallingApi = true;
      let result = await ApiService.get(url, params, {responseType: 'blob'});
      common.isCallingApi = false;
      return {
        headers: result.headers,
        status: result.status,
        data: result.data,
      };
    } catch (e) {
      return this._setError(e);
    }
  },

  async _setError(e) {
    let errorCode = e.response ? e.response.status : 500;
    common.isCallingApi = false;

    let responseData = e.response.data;
    if (
      e.request.responseType === 'blob' &&
      e.response.data instanceof Blob &&
      e.response.data.type &&
      e.response.data.type.toLowerCase().indexOf('json') != -1
    ) {
      responseData = JSON.parse(await e.response.data.text());
    }

    switch (errorCode) {
      case ERROR_CODE_VALIDATE:
        return {
          status: false,
          errorCode: errorCode,
          data: e.response ? e.response.data.errors : 'error',
          error: e
        };
      case ERROR_CODE_UNAUTHORIZED:
        common.logout();
        return {
          status: false,
          errorCode: errorCode,
          error: e
        };
      case ERROR_CODE_NOT_FOUND:
        if (responseData.route_name) {
          return {
            status: false,
            errorCode: errorCode,
            data: {
              routeName: responseData.route_name,
              routeParams: responseData.route_params
            },
            error: e
          };
        }
        break
      default:
        // store.commit('commonStore/SET_ERROR_CODE', errorCode);
        break;
    }
    return e;
  }
};
