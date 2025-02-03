/*
import React from 'react';
import { Alert } from '@/components/ui/alert';
import { Card } from '@/components/ui/card';

// DocumentList.tsx - Core document management component
export const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/documents', {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Important for security
        });
        
        if (!response.ok) throw new Error('Failed to fetch documents');
        
        const data = await response.json();
        setDocuments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (isLoading) {
    return (
      <div role="status" aria-label="Loading documents" className="animate-pulse">
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <Card key={doc.id} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{doc.title}</h3>
              <p className="text-sm text-gray-500">
                Status: {doc.status}
              </p>
            </div>
            <DocumentActions document={doc} />
          </div>
        </Card>
      ))}
    </div>
  );
};
*/