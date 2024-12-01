"use client";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-950 mb-6">Terms and Conditions</h1>

        <div className="space-y-8 text-gray-700">
          {/* Delivery Times in 4 rows */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-xl underline font-semibold mb-2">Standard Delivery Time</h2>
              <p>E-Invites: 3-4 days</p>
              <p>Video Invites: 7 days</p>
            </div>

            <div>
              <h2 className="text-xl underline font-semibold mb-2">Urgent Delivery Time</h2>
              <p>E-Invites: 1-2 days</p>
              <p>Video Invites: 1-2 days</p>
            </div>

            <div>
              <h2 className="text-xl underline font-semibold mb-2">Invitation Format</h2>
              <p>E-Invites: JPEG, PDF</p>
              <p>Video Invites: MP4 (HD Quality)</p>
            </div>

            <div>
              <h2 className="text-xl underline font-semibold mb-2">Delivery Mode</h2>
              <p>Email</p>
              <p>Google Drive Link</p>
            </div>
          </div>

          {/* Customization Options */}
          <div>
          <p className="text-red-500 mt-2">Note: Urgent charges will be applicable.<br/></p>
            <h2 className="text-xl font-semibold mb-2">Customization Options</h2>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                <strong>Content Customization:</strong> All content details in the invitation (e.g., Name, Date, Time, Venue) are editable.
              </li>
              <li>
                <strong>Video Invites - Song Customization:</strong> You can replace the original background music by providing your preferred track.
              </li>
              <li>
                <strong>Doodle Characters Customization:</strong> Doodle characters can be replaced with others from the gallery. Complete color changes are also accepted.
              </li>
              <li>
                <strong>Design Customization:</strong> Customization of background colors, logo design, or inclusion of additional design elements is possible. 
                <span className="text-red-500"> Note: Design customizations are subject to additional charges based on the scope of work.</span>
              </li>
            </ol>
          </div>

          {/* Refund Policy */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
            <p>
              The advance amount paid for order confirmation is strictly non-refundable. Purchasing any product acknowledges your understanding and agreement that no refund will be issued. This is because the product is a digital file that cannot be returned.
            </p>
          </div>

          {/* Template Change Policy */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Template Change Policy</h2>
            <p>
              Once the template is finalized and the order is confirmed, template change requests will not be accepted.
            </p>
            <p>
              Any request to change the template will be treated as a new order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
