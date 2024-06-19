import { AbilityClass, PureAbility } from '@casl/ability';
import { defineAbility } from '@casl/ability';

type Actions = 'create' | 'read' | 'update' | 'delete';
type Subjects = 'Challenge' | 'User';

export type AppAbility = PureAbility<[Actions, Subjects]>;
export const AppAbility = PureAbility as AbilityClass<AppAbility>;

export default defineAbility((can, cannot) => {
  can('manage', 'all');
  cannot('delete', 'User');
});
