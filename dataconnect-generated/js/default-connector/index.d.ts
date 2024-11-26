import { ConnectorConfig, DataConnect } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface Role_Key {
  id: UUIDString;
  __typename?: 'Role_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}



