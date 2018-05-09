import DS, { ModelRegistry, TransformRegistry } from "ember-data";

/**
 * Decorator that turns the property into an Ember Data attribute
 *
 * ```javascript
 * import Model from 'ember-data/model';
 * import { attr } from 'ember-decorators/data';
 *
 * export default Model.extend({
 *   @attr firstName: null
 * });
 * ```
 *
 * @function
 * @param {String} [type] - Type of the attribute
 */
export function attr<K extends keyof TransformRegistry>(
  type?: K,
  options?: DS.AttrOptions<TransformRegistry[K]>,
): PropertyDecorator;

/**
 * Decorator that turns the property into an Ember Data `hasMany` relationship
 *
 * ```javascript
 * import Model from 'ember-data/model';
 * import { hasMany } from 'ember-decorators/data';
 *
 * export default Model.extend({
 *   @hasMany users: null
 * });
 * ```
 *
 * @function
 * @param {String} [type] - Type of the `hasMany` relationship
 */
export function hasMany<K extends keyof ModelRegistry>(
  type?: K,
  options?: DS.RelationshipOptions<ModelRegistry[K]>
): PropertyDecorator;

/**
 * Decorator that turns the property into an Ember Data `belongsTo` relationship
 *
 * ```javascript
 * import Model from 'ember-data/model';
 * import { belongsTo } from 'ember-decorators/data';
 *
 * export default Model.extend({
 *   @belongsTo user: null
 * });
 * ```
 * @function
 * @param {String} [type] - Type of the `belongsTo` relationship
 */
export function belongsTo<K extends keyof ModelRegistry>(
  type?: K,
  options?: DS.RelationshipOptions<ModelRegistry[K]>
): PropertyDecorator;
