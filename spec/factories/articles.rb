FactoryGirl.define do
  factory :article do
    title {   Faker::Hipster.sentence }
    body { Faker::Hipster.paragraphs(rand(9) + 1).join("\n") }
  end
end
