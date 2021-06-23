/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * IBM OpenAPI SDK Code Generator Version: 3.34.1-ad041667-20210617-195430
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  getMissingParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * The Data Virtualization REST API connects to your service, so you can manage your virtual data, data sources, and
 * user roles.
 */

class DataVirtualizationV1 extends BaseService {
  static DEFAULT_SERVICE_NAME: string = 'data_virtualization';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of DataVirtualizationV1 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {DataVirtualizationV1}
   */

  public static newInstance(options: UserOptions): DataVirtualizationV1 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new DataVirtualizationV1(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a DataVirtualizationV1 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {DataVirtualizationV1}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    }
  }

  /*************************
   * dataSources
   ************************/

  /**
   * Get data source connections.
   *
   * Gets all data source connections that are connected to the service.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.DatasourceConnectionsList>>}
   */
  public listDatasourceConnections(
    params?: DataVirtualizationV1.ListDatasourceConnectionsParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.DatasourceConnectionsList>> {
    const _params = { ...params };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'listDatasourceConnections'
    );

    const parameters = {
      options: {
        url: '/v2/datasource/connections',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Add data source connection.
   *
   * Adds a data source connection to the Data Virtualization service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.datasourceType - The type of data source that you want to add.
   * @param {string} params.name - The name of data source.
   * @param {string} params.originCountry - The location of data source that you want to add.
   * @param {PostDatasourceConnectionParametersProperties} params.properties -
   * @param {string} [params.assetCategory] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.PostDatasourceConnection>>}
   */
  public addDatasourceConnection(
    params: DataVirtualizationV1.AddDatasourceConnectionParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.PostDatasourceConnection>> {
    const _params = { ...params };
    const requiredParams = ['datasourceType', 'name', 'originCountry', 'properties'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'datasource_type': _params.datasourceType,
      'name': _params.name,
      'origin_country': _params.originCountry,
      'properties': _params.properties,
      'asset_category': _params.assetCategory,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'addDatasourceConnection'
    );

    const parameters = {
      options: {
        url: '/v2/datasource/connections',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete data source connection.
   *
   * Deletes a data source connection from the Data Virtualization service.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.connectionId - The connection identifier for the platform..
   * @param {string} [params.cid] - The identifier of the connection for the Data Virtualization..
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public deleteDatasourceConnection(
    params: DataVirtualizationV1.DeleteDatasourceConnectionParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['connectionId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'cid': _params.cid,
    };

    const path = {
      'connection_id': _params.connectionId,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteDatasourceConnection'
    );

    const parameters = {
      options: {
        url: '/v2/datasource/connections/{connection_id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /*************************
   * users
   ************************/

  /**
   * Grant user access.
   *
   * Grants a user access to a specific virtualized table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.tableName - The name of the virtualized table.
   * @param {string} params.tableSchema - The schema of the virtualized table.
   * @param {string} params.authid - The identifier of the authorization, if grant access to all users, the value is
   * PUBLIC, othervise the value is the data virtualization username.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public grantUserToVirtualTable(
    params: DataVirtualizationV1.GrantUserToVirtualTableParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['tableName', 'tableSchema', 'authid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'table_name': _params.tableName,
      'table_schema': _params.tableSchema,
      'authid': _params.authid,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'grantUserToVirtualTable'
    );

    const parameters = {
      options: {
        url: '/v2/privileges/users',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Revoke user acccess.
   *
   * Revokes user access to the virtualized table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.authid - The Data Virtualization user name, if the value is PUBLIC, it means revoke access
   * privilege from all Data Virtualization users.
   * @param {string} params.tableName - The virtualized table's name.
   * @param {string} params.tableSchema - The virtualized table's schema name.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public revokeUserFromObject(
    params: DataVirtualizationV1.RevokeUserFromObjectParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['authid', 'tableName', 'tableSchema'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'table_name': _params.tableName,
      'table_schema': _params.tableSchema,
    };

    const path = {
      'authid': _params.authid,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'revokeUserFromObject'
    );

    const parameters = {
      options: {
        url: '/v2/privileges/users/{authid}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /*************************
   * roles
   ************************/

  /**
   * Grant user role.
   *
   * Grants a user role access to a specific virtualized table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.tableName - The name of the virtualized table.
   * @param {string} params.tableSchema - The schema of the virtualized table.
   * @param {string} [params.roleName] - The identifier of the authorization, if grant access to all users, the value is
   * PUBLIC, othervise the value is the data virtualization username.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public grantRolesToVirtualizedTable(
    params: DataVirtualizationV1.GrantRolesToVirtualizedTableParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['tableName', 'tableSchema'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'table_name': _params.tableName,
      'table_schema': _params.tableSchema,
      'role_name': _params.roleName,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'grantRolesToVirtualizedTable'
    );

    const parameters = {
      options: {
        url: '/v2/privileges/roles',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete role.
   *
   * Revokes roles for a virtualized table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.roleName - The Data Virtualization role type. Values can be DV_ADMIN, DV_ENGINEER,
   * DV_STEWARD, or DV_WORKER, which correspond to MANAGER, ENGINEER, STEWARD, and USER roles in the user interface.
   * @param {string} params.tableName - The virtualized table's name.
   * @param {string} params.tableSchema - The virtualized table's schema name.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public dvaasRevokeRoleFromTable(
    params: DataVirtualizationV1.DvaasRevokeRoleFromTableParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['roleName', 'tableName', 'tableSchema'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'table_name': _params.tableName,
      'table_schema': _params.tableSchema,
    };

    const path = {
      'role_name': _params.roleName,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'dvaasRevokeRoleFromTable'
    );

    const parameters = {
      options: {
        url: '/v2/privileges/roles/{role_name}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get virtualized tables by role.
   *
   * Retrieves the list of virtualized tables that have a specific role.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.rolename - Data Virtualization has four roles: MANAGER, STEWARD, ENGINEER and USER The value
   * of rolename should be one of them.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.TablesForRoleResponse>>}
   */
  public listTablesForRole(
    params: DataVirtualizationV1.ListTablesForRoleParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.TablesForRoleResponse>> {
    const _params = { ...params };
    const requiredParams = ['rolename'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'rolename': _params.rolename,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'listTablesForRole'
    );

    const parameters = {
      options: {
        url: '/v2/privileges/tables',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /*************************
   * securities
   ************************/

  /**
   * Turn on or off WKC policy enforcement status.
   *
   * Turn on WKC policy enforcement status.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.status - Set the status of WKC policy.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.TurnOnPolicyV2Response>>}
   */
  public turnOnPolicyV2(
    params: DataVirtualizationV1.TurnOnPolicyV2Params
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.TurnOnPolicyV2Response>> {
    const _params = { ...params };
    const requiredParams = ['status'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'status': _params.status,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'turnOnPolicyV2'
    );

    const parameters = {
      options: {
        url: '/v2/security/policy/status',
        method: 'PUT',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get WKC policy enforcement status.
   *
   * Get WKC policy enforcement status, return enabled or disabled.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.CheckPolicyStatusV2Response>>}
   */
  public checkPolicyStatusV2(
    params?: DataVirtualizationV1.CheckPolicyStatusV2Params
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.CheckPolicyStatusV2Response>> {
    const _params = { ...params };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'checkPolicyStatusV2'
    );

    const parameters = {
      options: {
        url: '/v2/security/policy/status',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /*************************
   * virtualization
   ************************/

  /**
   * Virtualize table.
   *
   * Transforms a given data source table into a virtualized table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.sourceName - The name of the source table.
   * @param {VirtualizeTableParameterSourceTableDefItem[]} params.sourceTableDef -
   * @param {string[]} params.sources -
   * @param {string} params.virtualName - The name of the table that will be virtualized.
   * @param {string} params.virtualSchema - The schema of the table that will be virtualized.
   * @param {VirtualizeTableParameterVirtualTableDefItem[]} params.virtualTableDef -
   * @param {string} [params.isIncludedColumns] - The columns that are included in the source table.
   * @param {boolean} [params.replace] - Determines whether to replace columns in the virtualized table.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.VirtualizeTableResponse>>}
   */
  public dvaasVirtualizeTable(
    params: DataVirtualizationV1.DvaasVirtualizeTableParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.VirtualizeTableResponse>> {
    const _params = { ...params };
    const requiredParams = [
      'sourceName',
      'sourceTableDef',
      'sources',
      'virtualName',
      'virtualSchema',
      'virtualTableDef',
    ];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'source_name': _params.sourceName,
      'source_table_def': _params.sourceTableDef,
      'sources': _params.sources,
      'virtual_name': _params.virtualName,
      'virtual_schema': _params.virtualSchema,
      'virtual_table_def': _params.virtualTableDef,
      'is_included_columns': _params.isIncludedColumns,
      'replace': _params.replace,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'dvaasVirtualizeTable'
    );

    const parameters = {
      options: {
        url: '/v2/virtualization/tables',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete virtualized table.
   *
   * Removes the specified virtualized table. You must specify the schema and table name.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.virtualSchema - The schema of virtualized table to be deleted.
   * @param {string} params.virtualName - The name of virtualized table to be deleted.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public deleteTable(
    params: DataVirtualizationV1.DeleteTableParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['virtualSchema', 'virtualName'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'virtual_schema': _params.virtualSchema,
    };

    const path = {
      'virtual_name': _params.virtualName,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteTable'
    );

    const parameters = {
      options: {
        url: '/v2/virtualization/tables/{virtual_name}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /*************************
   * primaryCatalog
   ************************/

  /**
   * Get primary catalog ID.
   *
   * Get primary catalog ID from the table DVSYS.INSTANCE_INFO.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.PrimaryCatalogInfo>>}
   */
  public getPrimaryCatalog(
    params?: DataVirtualizationV1.GetPrimaryCatalogParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.PrimaryCatalogInfo>> {
    const _params = { ...params };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getPrimaryCatalog'
    );

    const parameters = {
      options: {
        url: '/v2/catalog/primary',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Add primary catalog.
   *
   * Insert primary catalog ID into table DVSYS.INSTANCE_INFO.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.guid -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.PostPrimaryCatalog>>}
   */
  public postPrimaryCatalog(
    params: DataVirtualizationV1.PostPrimaryCatalogParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.PostPrimaryCatalog>> {
    const _params = { ...params };
    const requiredParams = ['guid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'guid': _params.guid,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'postPrimaryCatalog'
    );

    const parameters = {
      options: {
        url: '/v2/catalog/primary',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete primary catalog.
   *
   * Delete primary catalog item in the DVSYS.INSTANCE_INFO table.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.guid - The Data Virtualization user name, if the value is PUBLIC, it means revoke access
   * privilege from all Data Virtualization users.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>>}
   */
  public deletePrimaryCatalog(
    params: DataVirtualizationV1.DeletePrimaryCatalogParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.Empty>> {
    const _params = { ...params };
    const requiredParams = ['guid'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'guid': _params.guid,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deletePrimaryCatalog'
    );

    const parameters = {
      options: {
        url: '/v2/catalog/primary',
        method: 'DELETE',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /*************************
   * publishObjects
   ************************/

  /**
   * publish virtual table to WKC.
   *
   * publish virtual tables to WKC.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.catalogId -
   * @param {boolean} params.allowDuplicates - The type of data source that you want to add.
   * @param {PostPrimaryCatalogParametersAssetsItem[]} params.assets -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<DataVirtualizationV1.Response<DataVirtualizationV1.CatalogPublishResponse>>}
   */
  public publishAssets(
    params: DataVirtualizationV1.PublishAssetsParams
  ): Promise<DataVirtualizationV1.Response<DataVirtualizationV1.CatalogPublishResponse>> {
    const _params = { ...params };
    const requiredParams = ['catalogId', 'allowDuplicates', 'assets'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'catalog_id': _params.catalogId,
      'allow_duplicates': _params.allowDuplicates,
      'assets': _params.assets,
    };

    const sdkHeaders = getSdkHeaders(
      DataVirtualizationV1.DEFAULT_SERVICE_NAME,
      'v1',
      'publishAssets'
    );

    const parameters = {
      options: {
        url: '/v2/integration/catalog/publish',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace DataVirtualizationV1 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `listDatasourceConnections` operation. */
  export interface ListDatasourceConnectionsParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `addDatasourceConnection` operation. */
  export interface AddDatasourceConnectionParams {
    /** The type of data source that you want to add. */
    datasourceType: string;
    /** The name of data source. */
    name: string;
    /** The location of data source that you want to add. */
    originCountry: string;
    properties: PostDatasourceConnectionParametersProperties;
    assetCategory?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteDatasourceConnection` operation. */
  export interface DeleteDatasourceConnectionParams {
    /** The connection identifier for the platform.. */
    connectionId: string;
    /** The identifier of the connection for the Data Virtualization.. */
    cid?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `grantUserToVirtualTable` operation. */
  export interface GrantUserToVirtualTableParams {
    /** The name of the virtualized table. */
    tableName: string;
    /** The schema of the virtualized table. */
    tableSchema: string;
    /** The identifier of the authorization, if grant access to all users, the value is PUBLIC, othervise the value
     *  is the data virtualization username.
     */
    authid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `revokeUserFromObject` operation. */
  export interface RevokeUserFromObjectParams {
    /** The Data Virtualization user name, if the value is PUBLIC, it means revoke access privilege from all Data
     *  Virtualization users.
     */
    authid: string;
    /** The virtualized table's name. */
    tableName: string;
    /** The virtualized table's schema name. */
    tableSchema: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `grantRolesToVirtualizedTable` operation. */
  export interface GrantRolesToVirtualizedTableParams {
    /** The name of the virtualized table. */
    tableName: string;
    /** The schema of the virtualized table. */
    tableSchema: string;
    /** The identifier of the authorization, if grant access to all users, the value is PUBLIC, othervise the value
     *  is the data virtualization username.
     */
    roleName?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `dvaasRevokeRoleFromTable` operation. */
  export interface DvaasRevokeRoleFromTableParams {
    /** The Data Virtualization role type. Values can be DV_ADMIN, DV_ENGINEER, DV_STEWARD, or DV_WORKER, which
     *  correspond to MANAGER, ENGINEER, STEWARD, and USER roles in the user interface.
     */
    roleName: string;
    /** The virtualized table's name. */
    tableName: string;
    /** The virtualized table's schema name. */
    tableSchema: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listTablesForRole` operation. */
  export interface ListTablesForRoleParams {
    /** Data Virtualization has four roles: MANAGER, STEWARD, ENGINEER and USER The value of rolename should be one
     *  of them.
     */
    rolename: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `turnOnPolicyV2` operation. */
  export interface TurnOnPolicyV2Params {
    /** Set the status of WKC policy. */
    status: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `checkPolicyStatusV2` operation. */
  export interface CheckPolicyStatusV2Params {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `dvaasVirtualizeTable` operation. */
  export interface DvaasVirtualizeTableParams {
    /** The name of the source table. */
    sourceName: string;
    sourceTableDef: VirtualizeTableParameterSourceTableDefItem[];
    sources: string[];
    /** The name of the table that will be virtualized. */
    virtualName: string;
    /** The schema of the table that will be virtualized. */
    virtualSchema: string;
    virtualTableDef: VirtualizeTableParameterVirtualTableDefItem[];
    /** The columns that are included in the source table. */
    isIncludedColumns?: string;
    /** Determines whether to replace columns in the virtualized table. */
    replace?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteTable` operation. */
  export interface DeleteTableParams {
    /** The schema of virtualized table to be deleted. */
    virtualSchema: string;
    /** The name of virtualized table to be deleted. */
    virtualName: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPrimaryCatalog` operation. */
  export interface GetPrimaryCatalogParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `postPrimaryCatalog` operation. */
  export interface PostPrimaryCatalogParams {
    guid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deletePrimaryCatalog` operation. */
  export interface DeletePrimaryCatalogParams {
    /** The Data Virtualization user name, if the value is PUBLIC, it means revoke access privilege from all Data
     *  Virtualization users.
     */
    guid: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `publishAssets` operation. */
  export interface PublishAssetsParams {
    catalogId: string;
    /** The type of data source that you want to add. */
    allowDuplicates: boolean;
    assets: PostPrimaryCatalogParametersAssetsItem[];
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** CatalogPublishResponseDuplicateAssetsItem. */
  export interface CatalogPublishResponseDuplicateAssetsItem {
    schema_name?: string;
    table_name?: string;
  }

  /** CatalogPublishResponseFailedAssetsItem. */
  export interface CatalogPublishResponseFailedAssetsItem {
    error_msg?: string;
    schema_name?: string;
    table_name?: string;
  }

  /** CatalogPublishResponsePublishedAssetsItem. */
  export interface CatalogPublishResponsePublishedAssetsItem {
    schema_name?: string;
    table_name?: string;
    wkc_asset_id?: string;
  }

  /** CheckPolicyStatusV2Response. */
  export interface CheckPolicyStatusV2Response {
    status: string;
  }

  /** DatasourceConnectionsList. */
  export interface DatasourceConnectionsList {
    datasource_connections?: DatasourceConnectionsListDatasourceConnectionsItem[];
  }

  /** DatasourceConnectionsListDatasourceConnectionsItem. */
  export interface DatasourceConnectionsListDatasourceConnectionsItem {
    /** The name of the node that a datasource connection associates. */
    node_name?: string;
    /** The description of the node that a datasource connection associates. */
    node_description?: string;
    /** The type of connector, for example, H stands for Hosted, ie running within the cluster, F means Fenced Mode
     *  Process, ie direct within Data Virtualization instance.
     */
    agent_class?: string;
    /** The hostname or IP address that is used to access the connection. */
    hostname?: string;
    /** The port number that is used to access the connection. */
    port?: string;
    os_user?: string;
    /** Determines whether the data source uses Docker. */
    is_docker?: string;
    /** The number of data sources. */
    dscount?: string;
    data_sources?: DatasourceConnectionsListDatasourceConnectionsItemDataSourcesItem[];
  }

  /** DatasourceConnectionsListDatasourceConnectionsItemDataSourcesItem. */
  export interface DatasourceConnectionsListDatasourceConnectionsItemDataSourcesItem {
    /** The identifier of the connection for the Data Virtualization. */
    cid?: string;
    /** The name of the database. */
    dbname?: string;
    /** The connection identifier for the platform. */
    connection_id?: string;
    /** The hostname or IP address of the data source. */
    srchostname?: string;
    /** The port number of the data source. */
    srcport?: string;
    /** The type of the data source. */
    srctype?: string;
    /** The user that has access to the data source. */
    usr?: string;
    /** The URI of the data source. */
    uri?: string;
    /** The status of the data source. */
    status?: string;
    /** The name of the connection. */
    connection_name?: string;
  }

  /** PostDatasourceConnection. */
  export interface PostDatasourceConnection {
    /** The identifier of data source connection. */
    connection_id: string;
    /** The type of data source that you want to add. */
    datasource_type: string;
    /** The name of data source. */
    name: string;
  }

  /** PostDatasourceConnectionParametersProperties. */
  export interface PostDatasourceConnectionParametersProperties {
    access_token?: string;
    account_name?: string;
    api_key?: string;
    auth_type?: string;
    client_id?: string;
    client_secret?: string;
    collection?: string;
    credentials?: string;
    database?: string;
    host?: string;
    http_path?: string;
    jar_uris?: string;
    jdbc_driver?: string;
    jdbc_url?: string;
    password?: string;
    port?: string;
    project_id?: string;
    properties?: string;
    refresh_token?: string;
    role?: string;
    sap_gateway_url?: string;
    server?: string;
    service_name?: string;
    sid?: string;
    ssl?: string;
    ssl_certificate?: string;
    ssl_certificate_host?: string;
    ssl_certificate_validation?: string;
    username?: string;
    warehouse?: string;
  }

  /** PostPrimaryCatalogParametersAssetsItem. */
  export interface PostPrimaryCatalogParametersAssetsItem {
    schema: string;
    table: string;
  }

  /** PrimaryCatalogInfoEntity. */
  export interface PrimaryCatalogInfoEntity {
    auto_profiling?: boolean;
    bss_account_id?: string;
    capacity_limit?: number;
    description?: string;
    generator?: string;
    is_governed?: boolean;
    name?: string;
  }

  /** PrimaryCatalogInfoMetadata. */
  export interface PrimaryCatalogInfoMetadata {
    create_time?: string;
    creator_id?: string;
    guid?: string;
    url?: string;
  }

  /** TablesForRoleResponse. */
  export interface TablesForRoleResponse {
    objects?: TablesForRoleResponseObjectsItem[];
  }

  /** TablesForRoleResponseObjectsItem. */
  export interface TablesForRoleResponseObjectsItem {
    /** The virtualized table name that is granted access to role ROLENAME. */
    table_name?: string;
    /** The SCHEMA of virtualized table that is granted access to role ROLENAME. */
    table_schema?: string;
  }

  /** TurnOnPolicyV2Response. */
  export interface TurnOnPolicyV2Response {
    status: string;
  }

  /** VirtualizeTableParameterSourceTableDefItem. */
  export interface VirtualizeTableParameterSourceTableDefItem {
    /** The name of the column. */
    column_name: string;
    /** The type of the column. */
    column_type: string;
  }

  /** VirtualizeTableParameterVirtualTableDefItem. */
  export interface VirtualizeTableParameterVirtualTableDefItem {
    /** The name of the column. */
    column_name: string;
    /** The type of the column. */
    column_type: string;
  }

  /** VirtualizeTableResponse. */
  export interface VirtualizeTableResponse {
    /** The name of the table that is virtualized. */
    table_name: string;
    /** The schema of the table that is virtualized. */
    schema_name: string;
  }

  /** CatalogPublishResponse. */
  export interface CatalogPublishResponse {
    duplicate_assets?: CatalogPublishResponseDuplicateAssetsItem[];
    failed_assets?: CatalogPublishResponseFailedAssetsItem[];
    published_assets?: CatalogPublishResponsePublishedAssetsItem[];
  }

  /** PostPrimaryCatalog. */
  export interface PostPrimaryCatalog {
    guid: string;
    name: string;
    description: string;
  }

  /** PrimaryCatalogInfo. */
  export interface PrimaryCatalogInfo {
    entity?: PrimaryCatalogInfoEntity;
    href?: string;
    metadata?: PrimaryCatalogInfoMetadata;
  }
}

export = DataVirtualizationV1;
