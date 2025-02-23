//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client';
import type { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { throwException, isAxiosError } from '../axios-client';
import { getAxios, getBaseUrl } from './helpers';

export function save(body: Types.PropertyRequestDto, config?: AxiosRequestConfig | undefined): Promise<Types.Anonymous3> {
    let url_ = getBaseUrl() + "/property/save";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigSave,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            ..._requestConfigSave?.headers,
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processSave(_response);
    });
}

function processSave(response: AxiosResponse): Promise<Types.Anonymous3> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
        return Promise.resolve<Types.Anonymous3>(result200);

    } else if (status === 201) {
        const _responseText = response.data;
        return throwException("A server side error occurred.", status, _responseText, _headers);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.Anonymous3>(null as any);
}

export function getProperties(body: Types.PaginationRequest, config?: AxiosRequestConfig | undefined): Promise<Types.PropertyPaginationResponse> {
    let url_ = getBaseUrl() + "/property/get";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigGetProperties,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            ..._requestConfigGetProperties?.headers,
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...config?.headers,
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processGetProperties(_response);
    });
}

function processGetProperties(response: AxiosResponse): Promise<Types.PropertyPaginationResponse> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
        result200 = Types.PropertyPaginationResponse.fromJS(resultData200);
        return Promise.resolve<Types.PropertyPaginationResponse>(result200);

    } else if (status === 201) {
        const _responseText = response.data;
        let result201: any = null;
        let resultData201  = _responseText;
        result201 = Types.PropertyPaginationResponse.fromJS(resultData201);
        return Promise.resolve<Types.PropertyPaginationResponse>(result201);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<Types.PropertyPaginationResponse>(null as any);
}
let _requestConfigSave: Partial<AxiosRequestConfig> | null;
export function getSaveRequestConfig() {
  return _requestConfigSave;
}
export function setSaveRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigSave = value;
}
export function patchSaveRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigSave = patch(_requestConfigSave ?? {});
}

let _requestConfigGetProperties: Partial<AxiosRequestConfig> | null;
export function getGetPropertiesRequestConfig() {
  return _requestConfigGetProperties;
}
export function setGetPropertiesRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigGetProperties = value;
}
export function patchGetPropertiesRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigGetProperties = patch(_requestConfigGetProperties ?? {});
}