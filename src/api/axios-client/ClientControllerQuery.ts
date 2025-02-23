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
import * as Client from './ClientControllerClient'
export { Client };
import type { AxiosRequestConfig } from 'axios';


export function createUrl(): string {
  let url_ = getBaseUrl() + "/client/save";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function createMutationKey(): MutationKey {
  return trimArrayEnd([
      'ClientControllerClient',
      'create',
    ]);
}

export function useCreateMutation<TContext>(options?: Omit<UseMutationOptions<Types.Anonymous4, unknown, Types.ClientDto, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.Anonymous4, unknown, Types.ClientDto, TContext> {
  const key = createMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
  return useMutation({
    ...options,
    mutationFn: (body: Types.ClientDto) => Client.create(body),
    mutationKey: key,
  });
}
  
export function getClientsUrl(): string {
  let url_ = getBaseUrl() + "/client/get";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function getClientsMutationKey(): MutationKey {
  return trimArrayEnd([
      'ClientControllerClient',
      'getClients',
    ]);
}

export function useGetClientsMutation<TContext>(options?: Omit<UseMutationOptions<Types.ClientPaginationResponse, unknown, Types.PaginationRequest, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.ClientPaginationResponse, unknown, Types.PaginationRequest, TContext> {
  const key = getClientsMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
  return useMutation({
    ...options,
    mutationFn: (body: Types.PaginationRequest) => Client.getClients(body),
    mutationKey: key,
  });
}