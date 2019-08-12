import { GraphQLOutputType, GraphQLFieldConfigArgumentMap, GraphQLFieldResolver, FieldDefinitionNode } from 'graphql';
import Maybe from 'graphql/tsutils/Maybe';

export interface MutationFields<TSource = any, TContext = any, TArgs = { [argName: string]: any }> {
    [mutationAction: string]: {
        type: GraphQLOutputType;
        args?: GraphQLFieldConfigArgumentMap;
        resolve?: GraphQLFieldResolver<TSource, TContext, TArgs>;
        subscribe?: GraphQLFieldResolver<TSource, TContext, TArgs>;
        deprecationReason?: Maybe<string>;
        description?: Maybe<string>;
        astNode?: Maybe<FieldDefinitionNode>;
    };
}
