import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogPosts = {
  "our-blog-1": {
    title: "Why Choose InfinoraTec for Your IT & Software Development Needs?",
    date: "August 2025",
    author: "InfinoraTec Team",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>InfinoraTec is a leading IT company in India, specializing in custom software development, web development, and mobile app solutions. Our team delivers innovative technology solutions for businesses worldwide, leveraging the latest frameworks and cloud platforms to ensure scalability and security.</p>
      <h2>Our Technical Expertise</h2>
      <ul>
        <li><strong>Custom Software Development:</strong> We build robust, scalable applications using technologies like Node.js, Python, .NET, and Java. Our agile methodology ensures rapid delivery and continuous improvement.</li>
        <li><strong>Web & Mobile App Development:</strong> Our team creates responsive web apps with React, Angular, and Vue, and mobile apps for Android/iOS using Flutter and React Native.</li>
        <li><strong>Cloud Solutions:</strong> We deploy and manage cloud infrastructure on AWS, Azure, and Google Cloud, implementing CI/CD pipelines and containerization with Docker and Kubernetes.</li>
        <li><strong>IT Consulting:</strong> We provide digital transformation strategies, architecture reviews, and technology roadmaps tailored to your business goals.</li>
      </ul>
      <h2>Why InfinoraTec?</h2>
      <p>Our technical team is certified in multiple domains, including cloud architecture, cybersecurity, and DevOps. We combine technical expertise, transparent communication, and a client-focused approach to deliver outstanding results. Our solutions are designed for high performance, reliability, and future growth.</p>
      <h2>Case Study: Scalable ERP Solution</h2>
      <p>Recently, we developed a scalable ERP system for a manufacturing client, integrating real-time analytics, automated workflows, and secure data management. The solution improved operational efficiency by 40% and reduced IT costs by 25%.</p>
    `
  },
  "our-blog-2": {
    title: "Top Trends in Software Development for 2025",
    date: "August 2025",
    author: "InfinoraTec Insights",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Software development is evolving rapidly in 2025, with new technologies and methodologies shaping the future of IT. InfinoraTec helps businesses stay ahead by adopting the latest trends and best practices.</p>
      <h2>Key Trends in 2025</h2>
      <ul>
        <li><strong>Artificial Intelligence & Machine Learning:</strong> AI-driven automation, predictive analytics, and natural language processing are transforming business operations. We integrate AI models using TensorFlow, PyTorch, and cloud AI services.</li>
        <li><strong>Cloud-Native Development:</strong> Microservices architecture, serverless computing, and container orchestration (Kubernetes) enable scalable, resilient applications. Our team builds cloud-native apps for rapid deployment and easy maintenance.</li>
        <li><strong>Mobile-First Approach:</strong> With mobile usage surpassing desktop, we design mobile-first solutions using responsive design, PWA technologies, and cross-platform frameworks.</li>
        <li><strong>Cybersecurity Focus:</strong> Security is paramount. We implement multi-factor authentication, encryption, and regular vulnerability assessments to protect client data.</li>
        <li><strong>DevOps & Automation:</strong> CI/CD pipelines, automated testing, and infrastructure as code (IaC) streamline development and deployment.</li>
      </ul>
      <h2>Industry Insights</h2>
      <p>According to Gartner, cloud-native platforms will power 95% of digital initiatives by 2025. InfinoraTec is committed to helping clients leverage these technologies for competitive advantage.</p>
      <h2>How We Help</h2>
      <p>Our experts provide training, migration services, and ongoing support to ensure your business benefits from the latest software development trends.</p>
    `
  },
  "our-blog-3": {
    title: "How Custom Software Can Transform Your Business",
    date: "August 2025",
    author: "InfinoraTec Solutions",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content: `
      <p>Custom software development provides businesses with solutions tailored to their unique requirements, enabling greater efficiency, scalability, and security. At InfinoraTec, we design and build custom applications that drive business growth and innovation.</p>
      <h2>Technical Advantages of Custom Software</h2>
      <ul>
        <li><strong>Scalability:</strong> Our solutions are built to grow with your business, using modular architectures and cloud integration for seamless expansion.</li>
        <li><strong>Security:</strong> We implement best practices in application security, including data encryption, secure APIs, and compliance with industry standards (GDPR, HIPAA).</li>
        <li><strong>Efficiency:</strong> Custom workflows, automation, and integration with existing systems reduce manual effort and improve productivity.</li>
        <li><strong>Competitive Advantage:</strong> Unique features and optimized performance set your business apart from competitors.</li>
      </ul>
      <h2>Our Development Process</h2>
      <ol>
        <li>Requirements Analysis & Consulting</li>
        <li>UI/UX Design & Prototyping</li>
        <li>Agile Development & Testing</li>
        <li>Deployment & Support</li>
      </ol>
      <h2>Success Story</h2>
      <p>We recently developed a custom CRM platform for a retail client, integrating sales automation, analytics, and mobile access. The solution increased sales conversion rates by 30% and improved customer satisfaction.</p>
    `
  }
};

function Blog() {
  const { blogId } = useParams();
  const navigate = useNavigate();

  // If no blogId, show blog listing
  if (!blogId) {
    return (
      <main style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
        <h1 style={{ color: '#0a2540', fontSize: '2.2rem', marginBottom: '2rem', fontWeight: 700, textAlign: 'center' }}>InfinoraTec Blog</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {Object.entries(blogPosts).map(([id, post]) => (
            <div key={id} style={{
              width: '300px',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(10,37,64,0.08)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img src={post.image} alt={post.title + ' - InfinoraTec Blog'} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(23,105,170,0.10)' }} />
              <h2 style={{ color: '#0a2540', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700, textAlign: 'center' }}>{post.title}</h2>
              <p style={{ color: '#1769aa', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.95rem', textAlign: 'center' }}><em>{post.date} | {post.author}</em></p>
              <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1rem', textAlign: 'center' }}>{post.content.replace(/<[^>]+>/g, '').slice(0, 120)}...</p>
              <button onClick={() => navigate(`/blog/${id}`)} style={{ padding: '0.5rem 1.2rem', background: '#0a2540', color: '#fff', borderRadius: '6px', border: 'none', fontWeight: 500, cursor: 'pointer' }}>Read More</button>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) {
            div[style*='flex-wrap'] { flex-direction: column !important; gap: 1.5rem !important; }
            div[style*='width: 300px'] { width: 100% !important; }
          }
        `}</style>
      </main>
    );
  }

  // Individual blog view
  const post = blogPosts[blogId];
  if (!post) {
    return (
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ color: '#0a2540' }}>Blog Not Found</h1>
        <p>The blog you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <article style={{
        textAlign: 'left',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(10,37,64,0.08)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img src={post.image} alt={post.title + ' - InfinoraTec Blog'} style={{ width: '100%', maxHeight: '320px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(23,105,170,0.10)' }} />
        <h1 style={{ color: '#0a2540', fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>{post.title}</h1>
        <p style={{ color: '#1769aa', fontWeight: 'bold', marginBottom: '1rem', fontSize: '1rem' }}><em>{post.date} | {post.author}</em></p>
        <div style={{ fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={() => navigate('/blog')} style={{ padding: '0.5rem 1.2rem', background: '#1769aa', color: '#fff', borderRadius: '6px', border: 'none', fontWeight: 500, cursor: 'pointer' }}>Back to Blog List</button>
      </div>
      <style>{`
        @media (max-width: 700px) {
          main { padding: 0.5rem !important; }
          article { padding: 1rem !important; }
          h1 { font-size: 1.3rem !important; }
        }
      `}</style>
    </main>
  );
}

export default Blog;
