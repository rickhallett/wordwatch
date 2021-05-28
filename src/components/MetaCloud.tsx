import { Topic } from "../types";

export const MetaCloud = ({
  activeTopic,
}: {
  activeTopic: Topic;
}): JSX.Element => {
  if (!activeTopic || !activeTopic.sentiment) {
    return (
         <section className="bg-gray-100 ml-6 max-w-10/12 md:ml-0 mr-6 mt-6 md:mt-0 p-6 w-auto md:w-1/3 h-xl">
           <h2>No topic selected!</h2>
         </section>
    )
  }
  return (
    <section className="bg-gray-100 ml-6 max-w-10/12 md:ml-0 mr-6 mt-6 md:mt-0 p-6 w-auto md:w-1/3 h-xl">
      <table className="shadow-lg bg-white mx-auto">
        <thead>
          <tr>
            <th className="bg-gray-300 border text-lefr px-6 py-4">
              {activeTopic.label || null}
            </th>
            <th className="bg-gray-300 border text-lefr px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-gray-100 border px-6 py-4">Positive mentions:</td>
            <td className="bg-gray-100 border px-6 py-4 text-green-400">
              {activeTopic.sentiment.positive || 0}
            </td>
          </tr>
          <tr>
            <td className="bg-gray-100 border px-6 py-4">Neutral mentions:</td>
            <td className="bg-gray-100 border px-6 py-4 text-gray-400">
              {activeTopic.sentiment.neutral || 0}
            </td>
          </tr>
          <tr>
            <td className="bg-gray-100 border px-6 py-4">Negative mentions:</td>
            <td className="bg-gray-100 border px-6 py-4 text-red-400">
              {activeTopic.sentiment.negative || 0}
            </td>
          </tr>
          <tr>
            <td className="bg-gray-100 border px-6 py-4 font-bold">
              Total mentions:
            </td>
            <td className="bg-gray-100 border px-6 py-4 font-bold">
              {activeTopic.volume || null}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
