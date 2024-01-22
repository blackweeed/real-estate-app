import { executeGraphql } from "./graphqlApi";
import { SubmitFormDocument } from "@/gql/graphql";

export async function SubmitContactForm(
  first_name: string,
  second_name: string,
  phone_number: string,
  comments: string
) {
  const graphqlResponse = await executeGraphql({
    query: SubmitFormDocument,
    variables: {
      FirstName: first_name,
      SecondName: second_name,
      PhoneNumber: phone_number,
      Comments: comments,
    },
  });
  return graphqlResponse.submitGfForm;
}
