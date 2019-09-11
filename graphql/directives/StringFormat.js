const { defaultFieldResolver, GraphQLString } = require('graphql');
const { SchemaDirectiveVisitor } = require('graphql-tools');

class StringFormatDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.args.push(
      {
        name: 'formatFn',
        type: GraphQLString
      },
      {
        name: 'formatArgs',
        type: GraphQLString
      },
    );

    field.resolve = async function (
      source,
      { formatFn, formatArgs, ...otherArgs },
      context,
      info,
    ) {

      const data = await resolve.call(this, source, otherArgs, context, info);

      const fnArgs = formatArgs ? formatArgs.split(',') : [];

      if (formatFn) {

        return data[formatFn](...fnArgs);

      }

      return data;

    };
  }
}

module.exports = StringFormatDirective;