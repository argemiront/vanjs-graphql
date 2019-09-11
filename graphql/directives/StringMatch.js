const { defaultFieldResolver, GraphQLString } = require('graphql');
const { SchemaDirectiveVisitor } = require('graphql-tools');

class StringFormatDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    const { matchDefaultFlags } = this.args;

    field.args.push(
      {
        name: 'matchArg',
        type: GraphQLString
      },
      {
        name: 'matchFlags',
        type: GraphQLString
      },
    );

    field.resolve = async function (
      source,
      { matchArg, matchFlags, ...otherArgs },
      context,
      info,
    ) {
      const data = await resolve.call(this, source, otherArgs, context, info);

      if (matchArg) {

        const regex = new RegExp(matchArg, matchFlags || matchDefaultFlags);

        const results = data.match(regex);
        return results ? results.join(',') : '';

      }

      return data;
    };
  }
}

module.exports = StringFormatDirective;