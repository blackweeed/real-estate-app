import { useFormStatus } from "react-dom";

export function SubmitButton({ messagePopup, setMessagePopup, message }) {
  const { pending } = useFormStatus();

  return (
    <>
      {messagePopup && (
        <div
          className="bg-black/30 w-full h-screen fixed left-0 right-0 top-0 flex items-center justify-center z-10 "
          onClick={() => setMessagePopup(false)}
        >
          <div className="bg-white w-[500px] h-[400px] rounded-lg flex items-center text-center px-10 z-20">
            <p
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </div>
        </div>
      )}
      <button
        type="submit"
        aria-disabled={pending}
        className={`px-8 py-3 bg-blue-600 text-white rounded-full ${
          pending && "bg-red-600"
        }`}
      >
        {pending ? "..." : "Wyślij"}
      </button>
    </>
  );
}
