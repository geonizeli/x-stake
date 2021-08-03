# frozen_string_literal: true
class XStakeSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  def self.resolve_type(abstract_type, obj, ctx)
    raise(GraphQL::RequiredImplementationMissingError)
  end

  def self.id_from_object(object, type_definition, query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(id, query_ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    type_name.constantize.find(item_id)
  end
end
