import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Thrive Technology Inc. Assessment</h1>
      </header>

      <main className="main">
        <article className="card">
          <h2>
            1. Talk about how you made your site and why you chose the tools you
            did. Briefly explain one challenge you experienced in setting up
            this site and how you overcame it.
          </h2>
          <div className="answer" aria-label="Answer 1">
            I built this site using React, Vite, and Tailwind CSS. I choose
            these tools because they are what I am most proficient with. I did
            not have a difficult time building it, as it is only a single-page
            application and I kept the styling minimal. The only challenge I
            encountered was deploying a function in Netlify, as it was my first
            time using Netlify Functions. I overcame this by researching the
            necessary steps and following Netlify's documentation.
          </div>
        </article>

        <article className="card">
          <h2>
            2. What did you think of our service during the time you used it?
            Provide some constructive criticism or some features that impressed
            you.
          </h2>
          <div className="answer" aria-label="Answer 2">
            I like Netlify because it offers a free tier that is quite generous
            and easy to use. The deployment process is straightforward, and the
            integration with GitHub is seamless.
          </div>
        </article>

        <article className="card">
          <h2>
            3. Rank your 5 favorite and 5 least favorite activities from this
            list:
            https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab
          </h2>
          <div className="answer" aria-label="Answer 3">
            <h3>5 Favorite Activities:</h3>
            <ol>
              <li>
                Work with the development team to help design a new feature
                based on feedback from customers
              </li>
              <li>Write and maintain Support Guides for our product</li>
              <li>Develop a code example to share with a customer</li>
              <li>Respond to 20+ support requests via email every day</li>
              <li>Manage a Support team</li>
            </ol>
            <h3>5 Least Favorite Activities:</h3>
            <ol>
              <li>
                Create video tutorials to help teach users a specific feature or
                use case
              </li>
              <li>
                Debug a customer's build using a programming language and
                framework that you've never seen before
              </li>
              <li>Help train and onboard new support teammates</li>
              <li>
                Submit bug reports and potentially bug fixes
              </li>
              <li>
                Set up your own copy of several site frameworks for debugging
              </li>
            </ol>
          </div>
        </article>

        <article className="card">
          <h2>
            4. Provide a link to documentation for a technical/developer-focused
            product, which you think are well done, and explain why you think
            they are well done.
          </h2>
          <div className="answer" aria-label="Answer 4">
            The documentation I've reviewed generally meets a high standard,
            making it difficult to select a single product. For me, excellent
            documentation must include a searchable index, a clear feedback
            mechanism, step-by-step instructions, comprehensive Q&A coverage,
            and helpful supporting media (images or videos) where necessary.
          </div>
        </article>

        <article className="card">
          <h2>
            5. Explain, in a couple of paragraphs, what you think are two major
            challenges around DNS configuration for less-technical customers
            hosting websites.
          </h2>
          <div className="answer" aria-label="Answer 5">
            The two major challenges for less-technical customers concern
            complex terminology and propagation delays and the difficulty of
            managing external services.
            <br />
            <br />
            First, customers struggle to understand abstract DNS records (A,
            CNAME) and Nameserver roles, often confusing where changes must be
            made. This confusion is amplified by DNS propagation. The hours-long
            delay before changes take effect globally, which leads to
            unnecessary troubleshooting and repeated failed attempts.
            <br />
            <br />
            Second, integrating external services like professional email (e.g.,
            Google Workspace) or CDNs requires precise, manual entry of specific
            TXT or CNAME records. Errors in this detailed, multi-system process,
            even a minor typo, can instantly cause catastrophic failures in
            email delivery or website functionality, demanding expertise they do
            not possess.
          </div>
        </article>

        <article className="card">
          <h2>
            6. A customer writes in to Support saying simply that their “site
            won’t build”. You have access to their build logs, and there you see
            this error: Build failed due to a user error: Build script returned
            non-zero exit code: 2. You have no more information than this and
            the site’s source repository is private so you cannot test the build
            yourself. How would you troubleshoot this issue? What steps would
            you take? Also, please compose your best customer-facing first
            response.
          </h2>
          <div className="answer" aria-label="Answer 6">
            <h3>Troubleshooting Steps</h3>
            <ol>
              <li>
                <strong>Verify Log Completeness (Internal):</strong> Confirm the
                build log we have is the most recent and complete version. The
                critical failure message is almost always found before the final
                "exit code 2" summary.
              </li>
              <li>
                <strong>Define Next Action (Customer Focus):</strong>
                Immediately prioritize getting the specific error output from
                the customer, as the generic code is not actionable.
              </li>
              <li>
                <strong>Customer Step A — Locate Specific Error:</strong>
                Instruct the customer to review the full build log and provide
                the first instance of an error message, looking for keywords
                like Error:, Failed to compile, or FATAL.
              </li>
              <li>
                <strong>Customer Step B — Local Replication:</strong> Ask the
                customer to run the exact build command (for example,
                <code>npm run build</code>) locally and share the resulting
                error. This determines whether the issue is with their code or
                the remote environment.
              </li>
              <li>
                <strong>Analyze and Isolate:</strong> Once the specific error is
                received, use it to isolate the cause. Typical categories
                include:
                <ol type="a">
                  <li>
                    <strong>Syntax/Compile Error:</strong> Code issue — the
                    customer must fix the broken code.
                  </li>
                  <li>
                    <strong>Dependency Error:</strong> Problems installing or
                    resolving dependencies — check{" "}
                    <code>package-lock.json</code>/ <code>yarn.lock</code> and
                    installation logs.
                  </li>
                  <li>
                    <strong>Environment Error:</strong> Missing or incorrect
                    environment variables, build image differences, or other
                    platform configuration issues.
                  </li>
                </ol>
              </li>
            </ol>
            <h3>Customer-facing response</h3>
            <div>
              Hello,
              <br />
              <br />
              Thanks for reaching out — I understand your site won't build and I
              can see the generic exit code 2 in the logs you provided.
              Unfortunately, that code alone doesn't show the specific cause of
              the failure.
              <br />
              <br />
              To help us diagnose this quickly, please do the following and
              share the results:
              <ol>
                <li>
                  From your full build log, copy the first error message that
                  looks like an actual failure (search for "Error:", "Failed to
                  compile", or "FATAL").
                </li>
                <li>
                  Run the build command locally (<code>npm run build</code> or
                  similar) and paste the exact error output here.
                </li>
              </ol>
              Once we have the specific error output, we can advise whether it's
              a code issue, dependency problem, or environment configuration
              issue and provide the next steps.
              <br />
              <br />
              Best regards,
              <br />
              Support Team
            </div>
          </div>
        </article>

        <article className="card">
          <h2>
            7. How would you set up an http 301 status redirect from
            “/netlify/anything” on your site, to
            https://www.google.com/search?q=anything. Please provide the
            redirect formatting here. Now, how about a proxy redirect? Please
            add that proxy redirect rule directly to your site!
          </h2>
          <div className="answer" aria-label="Answer 7">
            <h3>Standard 301 Redirect with a placeholder (anything)</h3>
            /netlify/* https://www.google.com/search?q=:anything 301
            <br />
            <h3>Proxy Redirect:</h3>
            /netlify/* https://www.google.com/search?q=:anything 200
          </div>
        </article>

        <article className="card">
          <h2>
            8. Please attempt to deploy a function on our service. This need not
            be complicated. It could be "Hello World". Note that failure to
            deploy is not failing the exercise! Whether you have trouble or not,
            please describe what you experienced and how you attempted to
            troubleshoot any issues you encountered.
          </h2>
          <div className="answer" aria-label="Answer 8">
            Although this was my first time deploying a function on Netlify, the
            process was surprisingly straightforward, and I was able to learn
            the necessary steps quickly through my research.
            <h3>Function URL</h3>
            https://porteria-thrive-assessment.netlify.app/.netlify/functions/helloworld
            <h3>Function code</h3>
            <pre className="code-block">
              {`export const handler = async () => ({
  statusCode: 200,
  headers: { 'Content-Type': 'text/plain' },
  body: 'Hello World',
});`}
            </pre>
          </div>
        </article>

        <article className="card">
          <h2>
            9. We understand you don't know anything about our internal
            procedures at this stage, but we want you to explain at a high level
            how you'd react to this situation: You receive a report of a severe
            security issue on www.netlify.com. You can't immediately confirm the
            report, so what steps might you take to investigate or substantiate
            the report? What might you say to the reporter, even though we
            haven't confirmed their assertion yet, that will instill confidence
            that our business is very concerned about security? You believe
            there is a reasonable chance the report is correct and the problem
            is very large and impactful. How might you escalate?
          </h2>
          <div className="answer" aria-label="Answer 9">
            <h3>Investigation</h3>
            My priority here is to substantiate the claim without disturbing the
            production environment. Since I can't confirm the report yet, I
            wouldn't rush onto the live site.
            <ul className="investigation-list">
              <li>
                <strong>Immediate Log Review:</strong> Pull relevant logs around
                the report timestamp (access, error, security) and look for
                anomalies such as suspicious user agents, repeated failed
                logins, or unusual database errors.
              </li>
              <li>
                <strong>Internal Replication:</strong> Attempt to reproduce the
                issue in a staging/sandbox environment; if reproducible,
                escalate immediately.
              </li>
              <li>
                <strong>Code Scrutiny:</strong> Run targeted static analysis and
                a focused code review on the suspected modules to identify
                likely vulnerability vectors.
              </li>
            </ul>
            <h3>Customer-Facing First Response</h3>
            <blockquote>
              "Thank you so much for bringing this to our attention. I
              understand you've flagged what appears to be a severe security
              issue on our main platform, and I want you to know that we are
              treating this report with the highest level of urgency and
              seriousness.
              <br />
              <br />
              Your report has been immediately escalated to our core security
              team. They are already conducting a thorough, focused
              investigation to substantiate the details you provided in a
              controlled environment. We won't make any changes to the live site
              until we know exactly what we're dealing with, but rest assured,
              we have dropped everything to look into this. We are committed to
              maintaining a secure platform for all our users, and your
              diligence is genuinely appreciated. I'll be in touch with a
              substantive update as soon as we have one."
            </blockquote>
            <h3>Escalation Path</h3>
            <ol>
              <li>
                <strong>Create incident ticket: </strong>
                Notify the security team so the issue is treated as a security
                incident rather than a routine bug.
              </li>
              <li>
                <strong>Establish a War Room:</strong> Create a single dedicated
                channel or virtual meeting room for all incident communications
                to ensure clarity and speed.
              </li>
              <li>
                <strong>Define Mitigation Strategy:</strong> Decide on temporary
                containment steps (isolate the vulnerable service, disable the
                exposed functionality, or deploy a WAF rule) before applying a
                permanent fix.
              </li>
              <li>
                <strong>Continuous External Communication:</strong> Brief the
                communications team so they can prepare holding statements and
                an eventual public disclosure plan, ensuring transparency if the
                issue is confirmed.
              </li>
            </ol>
          </div>
        </article>
      </main>
    </div>
  );
}
