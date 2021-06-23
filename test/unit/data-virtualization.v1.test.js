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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator, unitTestUtils } = core;

const DataVirtualizationV1 = require('../../dist/data-virtualization/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkForSuccessfulExecution,
} = unitTestUtils;

const dataVirtualizationServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'ibm.com/123456',
};

const dataVirtualizationService = new DataVirtualizationV1(dataVirtualizationServiceOptions);

// dont actually create a request
const createRequestMock = jest.spyOn(dataVirtualizationService, 'createRequest');
createRequestMock.mockImplementation(() => Promise.resolve());

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

afterEach(() => {
  createRequestMock.mockClear();
  getAuthenticatorMock.mockClear();
});

describe('DataVirtualizationV1', () => {
  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = DataVirtualizationV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(DataVirtualizationV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(DataVirtualizationV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(DataVirtualizationV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = DataVirtualizationV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(DataVirtualizationV1);
    });
  });
  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new DataVirtualizationV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new DataVirtualizationV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(DataVirtualizationV1.DEFAULT_SERVICE_URL);
    });
  });
  describe('listDatasourceConnections', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listDatasourceConnections
        const params = {};

        const listDatasourceConnectionsResult =
          dataVirtualizationService.listDatasourceConnections(params);

        // all methods should return a Promise
        expectToBePromise(listDatasourceConnectionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/datasource/connections', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.listDatasourceConnections(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        dataVirtualizationService.listDatasourceConnections({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('addDatasourceConnection', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PostDatasourceConnectionParametersProperties
      const postDatasourceConnectionParametersPropertiesModel = {
        access_token: 'ya29.Il-_',
        account_name: 'ibmdatastage.us-east-1',
        api_key: 'ApiKey-a31d60c5-0f7b-4995-a4ae-69bf09d3de50',
        auth_type: 'Bearer Token',
        client_id: '81571342315',
        client_secret: 'uIn8rVyIRsd',
        collection: 'test_collection',
        credentials: '-----BEGIN PRIVATE KEY-----',
        database: 'TPCDS',
        host: '192.168.0.1',
        http_path: 'cliservice',
        jar_uris: '/v2/asset_files/dbdrivers/ngdbc.jar',
        jdbc_driver: 'Snowflake',
        jdbc_url: '/v2/asset_files/dbdrivers/ngdbc.jar',
        password: 'password',
        port: '50000',
        project_id: 'housecanary-com',
        properties: 'key=value',
        refresh_token: '1//06uwhP7_312g',
        role: 'SYSADMIN',
        sap_gateway_url: 'https://sapes5.sapdevcenter.com',
        server: 'ol_informix1410',
        service_name: 'pdborcl.fyre.ibm.com',
        sid: 'orcl',
        ssl: 'false',
        ssl_certificate: '-----BEGIN CERTIFICATE-----',
        ssl_certificate_host: 'test.com',
        ssl_certificate_validation: 'false',
        username: 'db2inst1',
        warehouse: 'wdpcondev',
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation addDatasourceConnection
        const datasourceType = 'DB2';
        const name = 'DB2';
        const originCountry = 'us';
        const properties = postDatasourceConnectionParametersPropertiesModel;
        const assetCategory = 'USER';
        const params = {
          datasourceType,
          name,
          originCountry,
          properties,
          assetCategory,
        };

        const addDatasourceConnectionResult =
          dataVirtualizationService.addDatasourceConnection(params);

        // all methods should return a Promise
        expectToBePromise(addDatasourceConnectionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/datasource/connections', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body.datasource_type).toEqual(datasourceType);
        expect(options.body.name).toEqual(name);
        expect(options.body.origin_country).toEqual(originCountry);
        expect(options.body.properties).toEqual(properties);
        expect(options.body.asset_category).toEqual(assetCategory);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const datasourceType = 'DB2';
        const name = 'DB2';
        const originCountry = 'us';
        const properties = postDatasourceConnectionParametersPropertiesModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          datasourceType,
          name,
          originCountry,
          properties,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.addDatasourceConnection(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.addDatasourceConnection({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const addDatasourceConnectionPromise = dataVirtualizationService.addDatasourceConnection();
        expectToBePromise(addDatasourceConnectionPromise);

        addDatasourceConnectionPromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteDatasourceConnection', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteDatasourceConnection
        const connectionId = '75e4d01b-7417-4abc-b267-8ffb393fb970';
        const cid = 'DB210013';
        const params = {
          connectionId,
          cid,
        };

        const deleteDatasourceConnectionResult =
          dataVirtualizationService.deleteDatasourceConnection(params);

        // all methods should return a Promise
        expectToBePromise(deleteDatasourceConnectionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/datasource/connections/{connection_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.cid).toEqual(cid);
        expect(options.path.connection_id).toEqual(connectionId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const connectionId = '75e4d01b-7417-4abc-b267-8ffb393fb970';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          connectionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.deleteDatasourceConnection(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.deleteDatasourceConnection({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const deleteDatasourceConnectionPromise =
          dataVirtualizationService.deleteDatasourceConnection();
        expectToBePromise(deleteDatasourceConnectionPromise);

        deleteDatasourceConnectionPromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('grantUserToVirtualTable', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation grantUserToVirtualTable
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const authid = 'PUBLIC';
        const params = {
          tableName,
          tableSchema,
          authid,
        };

        const grantUserToVirtualTableResult =
          dataVirtualizationService.grantUserToVirtualTable(params);

        // all methods should return a Promise
        expectToBePromise(grantUserToVirtualTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/privileges/users', 'POST');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body.table_name).toEqual(tableName);
        expect(options.body.table_schema).toEqual(tableSchema);
        expect(options.body.authid).toEqual(authid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const authid = 'PUBLIC';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          tableName,
          tableSchema,
          authid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.grantUserToVirtualTable(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.grantUserToVirtualTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const grantUserToVirtualTablePromise = dataVirtualizationService.grantUserToVirtualTable();
        expectToBePromise(grantUserToVirtualTablePromise);

        grantUserToVirtualTablePromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('revokeUserFromObject', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation revokeUserFromObject
        const authid = 'PUBLIC';
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const params = {
          authid,
          tableName,
          tableSchema,
        };

        const revokeUserFromObjectResult = dataVirtualizationService.revokeUserFromObject(params);

        // all methods should return a Promise
        expectToBePromise(revokeUserFromObjectResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/privileges/users/{authid}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.table_name).toEqual(tableName);
        expect(options.qs.table_schema).toEqual(tableSchema);
        expect(options.path.authid).toEqual(authid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const authid = 'PUBLIC';
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          authid,
          tableName,
          tableSchema,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.revokeUserFromObject(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.revokeUserFromObject({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const revokeUserFromObjectPromise = dataVirtualizationService.revokeUserFromObject();
        expectToBePromise(revokeUserFromObjectPromise);

        revokeUserFromObjectPromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('grantRolesToVirtualizedTable', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation grantRolesToVirtualizedTable
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const roleName = 'PUBLIC';
        const params = {
          tableName,
          tableSchema,
          roleName,
        };

        const grantRolesToVirtualizedTableResult =
          dataVirtualizationService.grantRolesToVirtualizedTable(params);

        // all methods should return a Promise
        expectToBePromise(grantRolesToVirtualizedTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/privileges/roles', 'POST');
        const expectedAccept = undefined;
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body.table_name).toEqual(tableName);
        expect(options.body.table_schema).toEqual(tableSchema);
        expect(options.body.role_name).toEqual(roleName);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          tableName,
          tableSchema,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.grantRolesToVirtualizedTable(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.grantRolesToVirtualizedTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const grantRolesToVirtualizedTablePromise =
          dataVirtualizationService.grantRolesToVirtualizedTable();
        expectToBePromise(grantRolesToVirtualizedTablePromise);

        grantRolesToVirtualizedTablePromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('dvaasRevokeRoleFromTable', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation dvaasRevokeRoleFromTable
        const roleName = 'DV_ENGINEER';
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const params = {
          roleName,
          tableName,
          tableSchema,
        };

        const dvaasRevokeRoleFromTableResult =
          dataVirtualizationService.dvaasRevokeRoleFromTable(params);

        // all methods should return a Promise
        expectToBePromise(dvaasRevokeRoleFromTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/privileges/roles/{role_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.table_name).toEqual(tableName);
        expect(options.qs.table_schema).toEqual(tableSchema);
        expect(options.path.role_name).toEqual(roleName);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const roleName = 'DV_ENGINEER';
        const tableName = 'EMPLOYEE';
        const tableSchema = 'dv_ibmid_060000s4y5';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          roleName,
          tableName,
          tableSchema,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.dvaasRevokeRoleFromTable(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.dvaasRevokeRoleFromTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const dvaasRevokeRoleFromTablePromise =
          dataVirtualizationService.dvaasRevokeRoleFromTable();
        expectToBePromise(dvaasRevokeRoleFromTablePromise);

        dvaasRevokeRoleFromTablePromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listTablesForRole', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listTablesForRole
        const rolename = 'MANAGER | STEWARD | ENGINEER | USER';
        const params = {
          rolename,
        };

        const listTablesForRoleResult = dataVirtualizationService.listTablesForRole(params);

        // all methods should return a Promise
        expectToBePromise(listTablesForRoleResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/privileges/tables', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.rolename).toEqual(rolename);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const rolename = 'MANAGER | STEWARD | ENGINEER | USER';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          rolename,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.listTablesForRole(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.listTablesForRole({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const listTablesForRolePromise = dataVirtualizationService.listTablesForRole();
        expectToBePromise(listTablesForRolePromise);

        listTablesForRolePromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('turnOnPolicyV2', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation turnOnPolicyV2
        const status = 'enabled';
        const params = {
          status,
        };

        const turnOnPolicyV2Result = dataVirtualizationService.turnOnPolicyV2(params);

        // all methods should return a Promise
        expectToBePromise(turnOnPolicyV2Result);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/security/policy/status', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.status).toEqual(status);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const status = 'enabled';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          status,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.turnOnPolicyV2(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.turnOnPolicyV2({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const turnOnPolicyV2Promise = dataVirtualizationService.turnOnPolicyV2();
        expectToBePromise(turnOnPolicyV2Promise);

        turnOnPolicyV2Promise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('checkPolicyStatusV2', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation checkPolicyStatusV2
        const params = {};

        const checkPolicyStatusV2Result = dataVirtualizationService.checkPolicyStatusV2(params);

        // all methods should return a Promise
        expectToBePromise(checkPolicyStatusV2Result);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/security/policy/status', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.checkPolicyStatusV2(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        dataVirtualizationService.checkPolicyStatusV2({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('dvaasVirtualizeTable', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation dvaasVirtualizeTable
        const sourceName = 'Tab1';
        const sourceTableDef = [virtualizeTableParameterSourceTableDefItemModel];
        const sources = ['DB210001:"Hjq1"'];
        const virtualName = 'Tab1';
        const virtualSchema = 'dv_ibmid_060000s4y5';
        const virtualTableDef = [virtualizeTableParameterVirtualTableDefItemModel];
        const isIncludedColumns = 'Y, Y, N';
        const replace = false;
        const params = {
          sourceName,
          sourceTableDef,
          sources,
          virtualName,
          virtualSchema,
          virtualTableDef,
          isIncludedColumns,
          replace,
        };

        const dvaasVirtualizeTableResult = dataVirtualizationService.dvaasVirtualizeTable(params);

        // all methods should return a Promise
        expectToBePromise(dvaasVirtualizeTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/virtualization/tables', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body.source_name).toEqual(sourceName);
        expect(options.body.source_table_def).toEqual(sourceTableDef);
        expect(options.body.sources).toEqual(sources);
        expect(options.body.virtual_name).toEqual(virtualName);
        expect(options.body.virtual_schema).toEqual(virtualSchema);
        expect(options.body.virtual_table_def).toEqual(virtualTableDef);
        expect(options.body.is_included_columns).toEqual(isIncludedColumns);
        expect(options.body.replace).toEqual(replace);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const sourceName = 'Tab1';
        const sourceTableDef = [virtualizeTableParameterSourceTableDefItemModel];
        const sources = ['DB210001:"Hjq1"'];
        const virtualName = 'Tab1';
        const virtualSchema = 'dv_ibmid_060000s4y5';
        const virtualTableDef = [virtualizeTableParameterVirtualTableDefItemModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          sourceName,
          sourceTableDef,
          sources,
          virtualName,
          virtualSchema,
          virtualTableDef,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.dvaasVirtualizeTable(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.dvaasVirtualizeTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const dvaasVirtualizeTablePromise = dataVirtualizationService.dvaasVirtualizeTable();
        expectToBePromise(dvaasVirtualizeTablePromise);

        dvaasVirtualizeTablePromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteTable', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteTable
        const virtualSchema = 'testString';
        const virtualName = 'testString';
        const params = {
          virtualSchema,
          virtualName,
        };

        const deleteTableResult = dataVirtualizationService.deleteTable(params);

        // all methods should return a Promise
        expectToBePromise(deleteTableResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/virtualization/tables/{virtual_name}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.virtual_schema).toEqual(virtualSchema);
        expect(options.path.virtual_name).toEqual(virtualName);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const virtualSchema = 'testString';
        const virtualName = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          virtualSchema,
          virtualName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.deleteTable(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.deleteTable({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const deleteTablePromise = dataVirtualizationService.deleteTable();
        expectToBePromise(deleteTablePromise);

        deleteTablePromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getPrimaryCatalog', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getPrimaryCatalog
        const params = {};

        const getPrimaryCatalogResult = dataVirtualizationService.getPrimaryCatalog(params);

        // all methods should return a Promise
        expectToBePromise(getPrimaryCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/catalog/primary', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.getPrimaryCatalog(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        dataVirtualizationService.getPrimaryCatalog({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('postPrimaryCatalog', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation postPrimaryCatalog
        const guid = 'd77fc432-9b1a-4938-a2a5-9f37e08041f6';
        const params = {
          guid,
        };

        const postPrimaryCatalogResult = dataVirtualizationService.postPrimaryCatalog(params);

        // all methods should return a Promise
        expectToBePromise(postPrimaryCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/catalog/primary', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body.guid).toEqual(guid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const guid = 'd77fc432-9b1a-4938-a2a5-9f37e08041f6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          guid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.postPrimaryCatalog(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.postPrimaryCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const postPrimaryCatalogPromise = dataVirtualizationService.postPrimaryCatalog();
        expectToBePromise(postPrimaryCatalogPromise);

        postPrimaryCatalogPromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deletePrimaryCatalog', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deletePrimaryCatalog
        const guid = 'd77fc432-9b1a-4938-a2a5-9f37e08041f6';
        const params = {
          guid,
        };

        const deletePrimaryCatalogResult = dataVirtualizationService.deletePrimaryCatalog(params);

        // all methods should return a Promise
        expectToBePromise(deletePrimaryCatalogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/catalog/primary', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs.guid).toEqual(guid);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const guid = 'd77fc432-9b1a-4938-a2a5-9f37e08041f6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          guid,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.deletePrimaryCatalog(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.deletePrimaryCatalog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const deletePrimaryCatalogPromise = dataVirtualizationService.deletePrimaryCatalog();
        expectToBePromise(deletePrimaryCatalogPromise);

        deletePrimaryCatalogPromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('publishAssets', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // PostPrimaryCatalogParametersAssetsItem
      const postPrimaryCatalogParametersAssetsItemModel = {
        schema: 'db2inst1',
        table: 'EMPLOYEE',
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation publishAssets
        const catalogId = '2b6b9fc5-626c-47a9-a836-56b76c0bc826';
        const allowDuplicates = false;
        const assets = [postPrimaryCatalogParametersAssetsItemModel];
        const params = {
          catalogId,
          allowDuplicates,
          assets,
        };

        const publishAssetsResult = dataVirtualizationService.publishAssets(params);

        // all methods should return a Promise
        expectToBePromise(publishAssetsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/integration/catalog/publish', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body.catalog_id).toEqual(catalogId);
        expect(options.body.allow_duplicates).toEqual(allowDuplicates);
        expect(options.body.assets).toEqual(assets);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const catalogId = '2b6b9fc5-626c-47a9-a836-56b76c0bc826';
        const allowDuplicates = false;
        const assets = [postPrimaryCatalogParametersAssetsItemModel];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          catalogId,
          allowDuplicates,
          assets,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        dataVirtualizationService.publishAssets(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async (done) => {
        let err;
        try {
          await dataVirtualizationService.publishAssets({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', (done) => {
        const publishAssetsPromise = dataVirtualizationService.publishAssets();
        expectToBePromise(publishAssetsPromise);

        publishAssetsPromise.catch((err) => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
