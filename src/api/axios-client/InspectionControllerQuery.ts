//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client';
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { trimArrayEnd, isParameterObject, getBaseUrl, addMetaToOptions } from './helpers';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import { InspectionControllerClient as InspectionControllerClientClass } from '../axios-client';
import { createClient, getClientFactory } from './helpers';

export const Client = () => getClientFactory()(InspectionControllerClientClass);
import type { AxiosRequestConfig } from 'axios';

export function saveUrl(): string {
  let url_ = getBaseUrl() + "/inspection/save";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function saveMutationKey(): MutationKey {
  return trimArrayEnd([
      'InspectionControllerClient',
      'save',
    ]);
}

export function useSaveMutation<TContext>(options?: Omit<UseMutationOptions<Types.Anonymous3, unknown, Types.InspectionRequestDto, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.Anonymous3, unknown, Types.InspectionRequestDto, TContext> {
  const key = saveMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
  return useMutation({
    ...options,
    mutationFn: (body: Types.InspectionRequestDto) => Client().save(body),
    mutationKey: key,
  });
}