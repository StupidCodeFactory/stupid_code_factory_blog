FactoryGirl.define do
  factory :article do
    title {   Faker::Hipster.sentence }
    body { Faker::Hipster.paragraphs(rand(9) + 1).join("\n") }
    description { Faker::Hipster.sentences(2) }
  end
end
