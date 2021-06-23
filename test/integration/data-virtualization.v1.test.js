/* eslint-disable no-console */
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

const { readExternalSources } = require('ibm-cloud-sdk-core');
const DataVirtualizationV1 = require('../../dist/data-virtualization/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'data_virtualization_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('DataVirtualizationV1_integration', () => {
  const dataVirtualizationService = DataVirtualizationV1.newInstance({});

  expect(dataVirtualizationService).not.toBeNull();

  const config = readExternalSources(DataVirtualizationV1.DEFAULT_SERVICE_NAME);
  expect(config).not.toBeNull();

  jest.setTimeout(timeout);

  test('listDatasourceConnections()', async () => {
    const res = await dataVirtualizationService.listDatasourceConnections();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('addDatasourceConnection()', async () => {
    // Request models needed by this operation.

    // PostDatasourceConnectionParametersProperties
    const postDatasourceConnectionParametersPropertiesModel = {
      access_token: 'testString',
      account_name: 'testString',
      api_key: 'testString',
      auth_type: 'testString',
      client_id: 'testString',
      client_secret: 'testString',
      collection: 'testString',
      credentials: 'testString',
      database: 'TPCDS',
      host: '192.168.0.1',
      http_path: 'testString',
      jar_uris: 'testString',
      jdbc_driver: 'testString',
      jdbc_url: 'testString',
      password: 'password',
      port: '50000',
      project_id: 'testString',
      properties: 'testString',
      refresh_token: 'testString',
      role: 'testString',
      sap_gateway_url: 'testString',
      server: 'testString',
      service_name: 'testString',
      sid: 'testString',
      ssl: 'false',
      ssl_certificate: 'testString',
      ssl_certificate_host: 'testString',
      ssl_certificate_validation: 'testString',
      username: 'db2inst1',
      warehouse: 'testString',
    };

    const params = {
      datasourceType: 'DB2',
      name: 'DB2',
      originCountry: 'us',
      properties: postDatasourceConnectionParametersPropertiesModel,
      assetCategory: 'testString',
    };

    const res = await dataVirtualizationService.addDatasourceConnection(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('grantUserToVirtualTable()', async () => {
    const params = {
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
      authid: 'PUBLIC',
    };

    const res = await dataVirtualizationService.grantUserToVirtualTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('grantRolesToVirtualizedTable()', async () => {
    const params = {
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
      roleName: 'PUBLIC',
    };

    const res = await dataVirtualizationService.grantRolesToVirtualizedTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('listTablesForRole()', async () => {
    const params = {
      rolename: 'MANAGER | STEWARD | ENGINEER | USER',
    };

    const res = await dataVirtualizationService.listTablesForRole(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('turnOnPolicyV2()', async () => {
    const params = {
      status: 'enabled',
    };

    const res = await dataVirtualizationService.turnOnPolicyV2(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('checkPolicyStatusV2()', async () => {
    const res = await dataVirtualizationService.checkPolicyStatusV2();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('dvaasVirtualizeTable()', async () => {
    // Request models needed by this operation.

    // VirtualizeTableParameterSourceTableDefItem
    const virtualizeTableParameterSourceTableDefItemModel = {
      column_name: 'Column1',
      column_type: 'INTEGER',
    };

    // VirtualizeTableParameterVirtualTableDefItem
    const virtualizeTableParameterVirtualTableDefItemModel = {
      column_name: 'Column_1',
      column_type: 'INTEGER',
    };

    const params = {
      sourceName: 'Tab1',
      sourceTableDef: [virtualizeTableParameterSourceTableDefItemModel],
      sources: ['DB210001:"Hjq1"'],
      virtualName: 'Tab1',
      virtualSchema: 'dv_ibmid_060000s4y5',
      virtualTableDef: [virtualizeTableParameterVirtualTableDefItemModel],
      isIncludedColumns: 'Y, Y, N',
      replace: false,
    };

    const res = await dataVirtualizationService.dvaasVirtualizeTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getPrimaryCatalog()', async () => {
    const res = await dataVirtualizationService.getPrimaryCatalog();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('postPrimaryCatalog()', async () => {
    const params = {
      guid: 'd77fc432-9b1a-4938-a2a5-9f37e08041f6',
    };

    const res = await dataVirtualizationService.postPrimaryCatalog(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('publishAssets()', async () => {
    // Request models needed by this operation.

    // PostPrimaryCatalogParametersAssetsItem
    const postPrimaryCatalogParametersAssetsItemModel = {
      schema: 'db2inst1',
      table: 'EMPLOYEE',
    };

    const params = {
      catalogId: '2b6b9fc5-626c-47a9-a836-56b76c0bc826',
      allowDuplicates: false,
      assets: [postPrimaryCatalogParametersAssetsItemModel],
    };

    const res = await dataVirtualizationService.publishAssets(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('revokeUserFromObject()', async () => {
    const params = {
      authid: 'PUBLIC',
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
    };

    const res = await dataVirtualizationService.revokeUserFromObject(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('dvaasRevokeRoleFromTable()', async () => {
    const params = {
      roleName: 'DV_ENGINEER',
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
    };

    const res = await dataVirtualizationService.dvaasRevokeRoleFromTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deleteTable()', async () => {
    const params = {
      virtualSchema: 'testString',
      virtualName: 'testString',
    };

    const res = await dataVirtualizationService.deleteTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deletePrimaryCatalog()', async () => {
    const params = {
      guid: 'd77fc432-9b1a-4938-a2a5-9f37e08041f6',
    };

    const res = await dataVirtualizationService.deletePrimaryCatalog(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deleteDatasourceConnection()', async () => {
    const params = {
      connectionId: '75e4d01b-7417-4abc-b267-8ffb393fb970',
      cid: 'DB210013',
    };

    const res = await dataVirtualizationService.deleteDatasourceConnection(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
});
