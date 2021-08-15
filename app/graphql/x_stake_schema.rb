# frozen_string_literal: true
class XStakeSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
  use GraphQL::Dataloader

  def self.resolve_type(abstract_type, obj, ctx)
    case obj
    when Currency
      Types::CurrencyType
    when Balance
      Types::BalanceType
    when FiatBalance
      Types::FiatBalanceType
    else
      raise(GraphQL::RequiredImplementationMissingError, "Unexpected object: #{obj}")
    end
  end

  def self.id_from_object(object, type_definition, ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(id, ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    Pundit.policy_scope(ctx[:current_user], type_name.constantize).find(item_id)
  end
end
