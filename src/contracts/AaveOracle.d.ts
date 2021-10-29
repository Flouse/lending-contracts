/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AaveOracleInterface extends ethers.utils.Interface {
  functions: {
    "BASE_CURRENCY()": FunctionFragment;
    "BASE_CURRENCY_UNIT()": FunctionFragment;
    "getAssetPrice(address)": FunctionFragment;
    "getAssetsPrices(address[])": FunctionFragment;
    "getFallbackOracle()": FunctionFragment;
    "getSourceOfAsset(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAssetSources(address[],address[])": FunctionFragment;
    "setFallbackOracle(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASE_CURRENCY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_CURRENCY_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetsPrices",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFallbackOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSourceOfAsset",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetSources",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetsPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSourceOfAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetSources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AssetSourceUpdated(address,address)": EventFragment;
    "BaseCurrencySet(address,uint256)": EventFragment;
    "FallbackOracleUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetSourceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BaseCurrencySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AssetSourceUpdatedEvent = TypedEvent<
  [string, string] & { asset: string; source: string }
>;

export type BaseCurrencySetEvent = TypedEvent<
  [string, BigNumber] & { baseCurrency: string; baseCurrencyUnit: BigNumber }
>;

export type FallbackOracleUpdatedEvent = TypedEvent<
  [string] & { fallbackOracle: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class AaveOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AaveOracleInterface;

  functions: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<[string]>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFallbackOracle(overrides?: CallOverrides): Promise<[string]>;

    getSourceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

  BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  getAssetsPrices(
    assets: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFallbackOracle(overrides?: CallOverrides): Promise<string>;

  getSourceOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAssetSources(
    assets: string[],
    sources: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFallbackOracle(
    fallbackOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFallbackOracle(overrides?: CallOverrides): Promise<string>;

    getSourceOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetSourceUpdated(address,address)"(
      asset?: string | null,
      source?: string | null
    ): TypedEventFilter<[string, string], { asset: string; source: string }>;

    AssetSourceUpdated(
      asset?: string | null,
      source?: string | null
    ): TypedEventFilter<[string, string], { asset: string; source: string }>;

    "BaseCurrencySet(address,uint256)"(
      baseCurrency?: string | null,
      baseCurrencyUnit?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { baseCurrency: string; baseCurrencyUnit: BigNumber }
    >;

    BaseCurrencySet(
      baseCurrency?: string | null,
      baseCurrencyUnit?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { baseCurrency: string; baseCurrencyUnit: BigNumber }
    >;

    "FallbackOracleUpdated(address)"(
      fallbackOracle?: string | null
    ): TypedEventFilter<[string], { fallbackOracle: string }>;

    FallbackOracleUpdated(
      fallbackOracle?: string | null
    ): TypedEventFilter<[string], { fallbackOracle: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFallbackOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getSourceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BASE_CURRENCY_UNIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFallbackOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSourceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}