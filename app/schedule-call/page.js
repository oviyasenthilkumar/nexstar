export default function ScheduleCall() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Schedule a Discovery Call</h2>
        <div className="w-full max-w-3xl">
          <iframe
            src="https://calendly.com/sudhikshaa06"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-xl shadow"
          ></iframe>
        </div>
      </section>
    );
  }