module.exports = (resolve, parent, args, ctx, info) => {

  console.log(`== resolver for '${info.fieldName}' from parent ${info.parentType.name}`);

  return resolve(parent, args, ctx, info);

};