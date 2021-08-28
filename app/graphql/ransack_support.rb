# frozen_string_literal: true
module RansackSupport
  def ransack(base, filter)
    base.ransack(build_ransack_query(base, filter)).result
  end

  def build_ransack_query(base, filter)
    filter = filter.to_h
    mapped_filter = {}

    filter.each do |parent_key, parent_value|
      next unless base.ransackable_attributes.include?(parent_key.to_s)

      parent_value.each do |children_key, children_value|
        mapped_filter["#{parent_key}_#{children_key}".to_sym] = children_value
      end
    end

    mapped_filter
  end
end
