import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerOopsie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oopsie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly location?: string | null;
  readonly date_time?: string | null;
  readonly coordinates?: string | null;
  readonly drawing_path?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOopsie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Oopsie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly location?: string | null;
  readonly date_time?: string | null;
  readonly coordinates?: string | null;
  readonly drawing_path?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Oopsie = LazyLoading extends LazyLoadingDisabled ? EagerOopsie : LazyOopsie

export declare const Oopsie: (new (init: ModelInit<Oopsie>) => Oopsie) & {
  copyOf(source: Oopsie, mutator: (draft: MutableModel<Oopsie>) => MutableModel<Oopsie> | void): Oopsie;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}